import asyncio
import os
import time

import httpx
from fastapi import HTTPException

from server.config import OUTPUT_DIR
from server.schemas import CloudGenRequest, CloudPollRequest, KleinCloudRequest
from server.services.history_service import save_to_history
from server.core.state import state


BASE_URL = "https://api-inference.modelscope.cn/"


async def _download_to_output(img_url: str, filename_prefix: str):
    try:
        async with httpx.AsyncClient() as dl_client:
            img_res = await dl_client.get(img_url)
            if img_res.status_code == 200:
                filename = f"{filename_prefix}_{int(time.time())}.png"
                file_path = os.path.join(OUTPUT_DIR, filename)
                with open(file_path, "wb") as f:
                    f.write(img_res.content)
                return f"/output/{filename}"
    except Exception:
        pass
    return img_url


async def _poll_task(headers: dict, task_id: str, retries: int, sleep_seconds: int, req_client_id: str = None):
    async with httpx.AsyncClient(timeout=30) as client:
        for i in range(retries):
            if req_client_id and i % 5 == 0:
                await state.ws_manager.send_personal_message(
                    {
                        "type": "cloud_status",
                        "status": f"PENDING ({i}/{retries})",
                        "task_id": task_id,
                        "progress": i,
                        "total": retries,
                    },
                    req_client_id,
                )

            try:
                result = await client.get(
                    f"{BASE_URL}v1/tasks/{task_id}",
                    headers={**headers, "X-ModelScope-Task-Type": "image_generation"},
                )
                data = result.json()
                status = data.get("task_status")
                if status == "SUCCEED":
                    return data
                if status == "FAILED":
                    return {"__failed__": data}
            except Exception:
                # 网络波动时继续轮询，保持与旧逻辑一致。
                pass
            await asyncio.sleep(sleep_seconds)
    return None


async def generate_cloud(req: CloudGenRequest):
    try:
        w_str, h_str = req.resolution.split("x")
        w, h = int(w_str), int(h_str)
    except Exception:
        w, h = 1024, 1024

    payload = {
        "prompt": req.prompt.strip(),
        "api_key": req.api_key.strip(),
        "model_select": req.model.strip() if req.model else "gemini-3-pro-image-preview",
        "custom_w": w,
        "custom_h": h,
    }

    try:
        from server.config import ALGO_SIDE_BASE_URL
        async with httpx.AsyncClient(timeout=180) as client:
            submit_res = await client.post(
                f"{ALGO_SIDE_BASE_URL}/everything_image",
                json=payload,
            )
            
        if submit_res.status_code != 200:
            try:
                detail = submit_res.json()
            except Exception:
                detail = submit_res.text
            raise HTTPException(status_code=submit_res.status_code, detail=detail)

        data = submit_res.json()
        if "error" in data:
            raise HTTPException(status_code=400, detail=data["error"])
            
        b64_img = data.get("res_image")
        if not b64_img:
            raise Exception("Algorithm side route did not return res_image")
            
        import base64
        
        raw = base64.b64decode(b64_img)
        filename = f"cloud_{int(time.time())}_{os.urandom(5).hex()}.png"
        local_path = os.path.join(OUTPUT_DIR, filename)
        with open(local_path, "wb") as f:
            f.write(raw)
            
        img_url = f"/output/{filename}"

        record = {"timestamp": time.time(), "prompt": req.prompt, "images": [img_url], "type": "cloud"}
        save_to_history(record)
        
        if getattr(state, "ws_manager", None):
            await state.ws_manager.broadcast_new_image(record)
            
        return {"url": img_url}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e)) from e


async def generate_angle_cloud(req: CloudGenRequest):
    headers = {
        "Authorization": f"Bearer {req.api_key.strip()}",
        "Content-Type": "application/json",
        "X-ModelScope-Async-Mode": "true",
    }
    payload = {
        "model": "Qwen/Qwen-Image-Edit-2511",
        "prompt": req.prompt.strip(),
        "image_url": req.image_urls,
    }

    try:
        async with httpx.AsyncClient(timeout=30) as client:
            submit_res = await client.post(f"{BASE_URL}v1/images/generations", headers=headers, json=payload)
        if submit_res.status_code != 200:
            detail = submit_res.text
            try:
                detail = submit_res.json()
            except Exception:
                pass
            raise HTTPException(status_code=submit_res.status_code, detail=detail)

        task_id = submit_res.json().get("task_id")
        if req.client_id:
            await state.ws_manager.send_personal_message(
                {"type": "cloud_status", "status": "SUBMITTED", "task_id": task_id, "progress": 0, "total": 150},
                req.client_id,
            )

        data = await _poll_task(headers, task_id, retries=300, sleep_seconds=2, req_client_id=req.client_id)
        if data and data.get("__failed__"):
            raise Exception(f"ModelScope task failed: {data['__failed__']}")
        if not data:
            if req.client_id:
                await state.ws_manager.send_personal_message(
                    {"type": "cloud_status", "status": "TIMEOUT", "task_id": task_id},
                    req.client_id,
                )
            return {"status": "timeout", "task_id": task_id, "message": "Task still pending"}

        img_url = data["output_images"][0]
        local_path = await _download_to_output(img_url, "cloud_angle")
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [local_path],
            "type": "angle",
            "is_cloud": True,
        }
        save_to_history(record)
        if req.client_id:
            await state.ws_manager.send_personal_message(
                {"type": "cloud_status", "status": "SUCCEED", "task_id": task_id},
                req.client_id,
            )
        return {"url": local_path}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e)) from e


async def poll_angle_cloud(req: CloudPollRequest):
    headers = {
        "Authorization": f"Bearer {req.api_key.strip()}",
        "Content-Type": "application/json",
        "X-ModelScope-Async-Mode": "true",
    }
    try:
        data = await _poll_task(headers, req.task_id, retries=300, sleep_seconds=2, req_client_id=req.client_id)
        if data and data.get("__failed__"):
            raise Exception(f"ModelScope task failed: {data['__failed__']}")
        if not data:
            if req.client_id:
                await state.ws_manager.send_personal_message(
                    {"type": "cloud_status", "status": "TIMEOUT", "task_id": req.task_id},
                    req.client_id,
                )
            return {"status": "timeout", "task_id": req.task_id, "message": "Task still pending"}

        img_url = data["output_images"][0]
        local_path = await _download_to_output(img_url, "cloud_angle")
        save_to_history(
            {
                "timestamp": time.time(),
                "prompt": f"Resumed {req.task_id}",
                "images": [local_path],
                "type": "angle",
            }
        )
        if req.client_id:
            await state.ws_manager.send_personal_message(
                {"type": "cloud_status", "status": "SUCCEED", "task_id": req.task_id},
                req.client_id,
            )
        return {"url": local_path}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e)) from e


async def generate_klein_cloud(req: KleinCloudRequest):
    try:
        from server.config import ALGO_SIDE_BASE_URL
        import base64

        # AI 电商图：走 /product_image 接口
        if req.feature == "ecom":
            payload = {
                "image": req.image_1,
                "prompt": req.prompt.strip(),
                "product_type": (req.product_category or "耳机").strip(),
                "design_style": req.style or "科技感",
                "scene_preference": req.scene or "混合（以使用场景为主）",
                "output_language": req.language or "中文 (Chinese)",
                "api_key": req.api_key.strip(),
                "model_select": req.model_select or "gemini-3.1-flash-image-preview",
                "size_mode": req.size_mode or "Match Image_1 (Smart Crop)",
                "custom_w": req.custom_w,
                "custom_h": req.custom_h,
            }
            endpoint = "/product_image"
        else:
            # 万能改图：保持使用 everything_image
            payload = {
                "prompt": req.prompt.strip(),
                "api_key": req.api_key.strip(),
                "model_select": req.model_select or "gemini-3.1-flash-image-preview",
                "image_1": req.image_1,
                "image_2": req.image_2,
                "image_3": req.image_3,
                "size_mode": req.size_mode or "Match Image_1 (Smart Crop)",
                "custom_w": req.custom_w,
                "custom_h": req.custom_h,
                "product_category": (req.product_category or "").strip() if req.product_category else None,
                "style": req.style,
                "scene": req.scene,
                "language": req.language,
            }
            endpoint = "/everything_image"

        async with httpx.AsyncClient(timeout=180) as client:
            submit_res = await client.post(
                f"{ALGO_SIDE_BASE_URL}{endpoint}",
                json=payload,
            )

        if submit_res.status_code != 200:
            try:
                detail = submit_res.json()
            except Exception:
                detail = submit_res.text
            raise HTTPException(status_code=submit_res.status_code, detail=detail)

        data = submit_res.json()
        if "error" in data:
            raise HTTPException(status_code=400, detail=data["error"])

        b64_img = data.get("res_image")
        if not b64_img:
            raise Exception("Algorithm side route did not return res_image")

        raw = base64.b64decode(b64_img)
        filename = f"klein_{int(time.time())}_{os.urandom(5).hex()}.png"
        local_path = os.path.join(OUTPUT_DIR, filename)
        with open(local_path, "wb") as f:
            f.write(raw)

        img_url = f"/output/{filename}"

        return {"url": img_url}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e)) from e

