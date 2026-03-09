import asyncio
import os
import time

import httpx
from fastapi import HTTPException

from server.config import OUTPUT_DIR, VIDEO_UPLOAD_DIR, ALGO_SIDE_BASE_URL
from server.schemas import CloudGenRequest, CloudPollRequest, KleinCloudRequest, VeoSeedanceRequest, WanVaceT2VRequest, WanVaceI2VRequest, WanVaceFirstEndRequest, VideoExpandRequest, PersonChangeOneRequest, PersonChangeMixRequest, PoseChangeRequest
from server.services.history_service import save_to_history
from server.core.state import state


BASE_URL = "https://api-inference.modelscope.cn/"

# 兼容前端/localStorage 可能传入的拼写错误（如 ggemini -> gemini）
def _normalize_gemini_model(model: str) -> str:
    if not model or not isinstance(model, str):
        return model or ""
    s = model.strip()
    if s.startswith("ggemini"):
        return "gemini" + s[7:]  # 去掉多余的一个 g
    return s


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


async def _download_video_to_output(video_url: str, filename_prefix: str = "veo_seedance"):
    try:
        async with httpx.AsyncClient(timeout=120) as dl_client:
            res = await dl_client.get(video_url)
            if res.status_code == 200:
                ext = "mp4"
                filename = f"{filename_prefix}_{int(time.time())}_{os.urandom(4).hex()}.{ext}"
                file_path = os.path.join(OUTPUT_DIR, filename)
                with open(file_path, "wb") as f:
                    f.write(res.content)
                return f"/output/{filename}"
    except Exception:
        pass
    return video_url


async def veo_seedance_api(req: VeoSeedanceRequest):

    payload = {
        "prompt": req.prompt.strip(),
        "api_key": req.api_key.strip(),
        "model_select": req.model_select or "veo3.1-fast",
        "aspect_ratio": req.aspect_ratio or "16:9",
        "resolution": req.resolution or "480p",
        "duration": int(req.duration) if req.duration is not None else 5,
    }
    # 算法侧 /veo_seedance_api 接收的 image_1/image_2 为 base64 字符串
    if req.image_1 is not None:
        payload["image_1"] = req.image_1
    if req.image_2 is not None:
        payload["image_2"] = req.image_2

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/veo_seedance_api",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_url = data.get("res_video_url")
    if not res_video_url:
        raise HTTPException(status_code=502, detail="算法未返回 res_video_url")
    if not isinstance(res_video_url, str) or not res_video_url.strip().lower().startswith(("http://", "https://")):
        raise HTTPException(
            status_code=502,
            detail="算法返回的 res_video_url 需为可下载的 http(s) 地址，当前无法下载",
        )

    local_path = await _download_video_to_output(res_video_url)
    return {"url": local_path}


def _save_base64_video_to_output(b64_str: str, filename_prefix: str = "wan_vace_t2v") -> str:
    import base64
    raw = base64.b64decode(b64_str)
    filename = f"{filename_prefix}_{int(time.time())}_{os.urandom(4).hex()}.mp4"
    file_path = os.path.join(OUTPUT_DIR, filename)
    with open(file_path, "wb") as f:
        f.write(raw)
    return f"/output/{filename}"


async def wan_vace_t2v_api(req: WanVaceT2VRequest):

    payload = {
        "prompt": req.prompt.strip(),
        "width": int(req.width),
        "height": int(req.height),
        "num_frames": int(req.num_frames),
        "fps": int(req.fps),
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_t2v",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64)
    return {"url": local_path}


async def wan_vace_i2v_api(req: WanVaceI2VRequest):

    payload = {
        "prompt": req.prompt.strip(),
        "image_1": req.image_1,
        "num_frames": int(req.num_frames) if req.num_frames is not None else 81,
        "fps": int(req.fps) if req.fps is not None else 24,
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_i2v",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="wan_vace_i2v")
    return {"url": local_path}


async def wan_vace_h_first_end_api(req: WanVaceFirstEndRequest):

    payload = {
        "prompt": req.prompt.strip(),
        "image_1": req.image_1,
        "image_2": req.image_2,
        "num_frames": int(req.num_frames) if req.num_frames is not None else 81,
        "width": int(req.width) if req.width is not None else 780,
        "height": int(req.height) if req.height is not None else 420,
        "fps": int(req.fps) if req.fps is not None else 24,
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_h_first_end",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="wan_vace_first_end")
    return {"url": local_path}


async def video_expand_api(req: VideoExpandRequest):
    """视频扩图：算法侧需要可读的 video_url（本地文件路径）。"""

    payload = {
        "video_url": req.video_url,
        "expand_left": int(req.expand_left),
        "expand_top": int(req.expand_top),
        "expand_right": int(req.expand_right),
        "expand_bottom": int(req.expand_bottom),
        "width": int(req.width),
        "height": int(req.height),
        "fps": int(req.fps),
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/video_expand",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="video_expand")
    return {"url": local_path}


async def wan_vace_person_change_one_api(req: PersonChangeOneRequest):
    """视频替换（单人）：image_1 视频任意帧，image_2 参考图，video_url 本地路径。"""

    payload = {
        "image_1": req.image_1,
        "image_2": req.image_2,
        "video_url": req.video_url,
        "width": int(req.width),
        "height": int(req.height),
        "fps": int(req.fps),
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_person_change_one",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="person_change_one")
    return {"url": local_path}


async def wan_vace_person_change_mix_api(req: PersonChangeMixRequest):
    """视频替换（多人）：image_1 视频替换帧，video_url 本地路径。"""

    payload = {
        "image_1": req.image_1,
        "video_url": req.video_url,
        "width": int(req.width),
        "height": int(req.height),
        "fps": int(req.fps),
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_person_change_mix",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="person_change_mix")
    return {"url": local_path}


async def wan_vace_pose_change_api(req: PoseChangeRequest):
    """动作迁移：image_1 参考图，video_url 本地路径。"""

    payload = {
        "image_1": req.image_1,
        "video_url": req.video_url,
        "width": int(req.width),
        "height": int(req.height),
        "fps": int(req.fps),
    }

    async with httpx.AsyncClient(timeout=600) as client:
        res = await client.post(
            f"{ALGO_SIDE_BASE_URL}/wan_vace_pose_change",
            json=payload,
        )

    if res.status_code != 200:
        try:
            detail = res.json()
        except Exception:
            detail = res.text
        raise HTTPException(status_code=res.status_code, detail=detail)

    data = res.json()
    if "error" in data:
        raise HTTPException(status_code=400, detail=data["error"])

    res_video_b64 = data.get("res_video")
    if not res_video_b64:
        raise HTTPException(status_code=502, detail="算法未返回 res_video")

    local_path = _save_base64_video_to_output(res_video_b64, filename_prefix="pose_change")
    return {"url": local_path}


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
        "model_select": _normalize_gemini_model(req.model or "gemini-3-pro-image-preview"),
        "custom_w": w,
        "custom_h": h,
    }

    try:
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
                "model_select": _normalize_gemini_model(req.model_select or "gemini-3.1-flash-image-preview"),
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
                "model_select": _normalize_gemini_model(req.model_select or "gemini-3.1-flash-image-preview"),
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

