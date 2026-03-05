import asyncio
import base64
import json
import os
import random
import shutil
import time
import urllib.error
import urllib.request
from typing import List, Optional, Tuple

import requests
from fastapi import HTTPException

from server.config import (
    ALGO_SIDE_BASE_URL,
    COMFYUI_INSTANCES,
    OUTPUT_DIR,
    WORKFLOW_DIR,
    WORKFLOW_PATH,
)
from server.core.state import state
from server.schemas import GenerateRequest
from server.services.history_service import save_to_history


def _save_base64_png_to_output(b64_str: str, prefix: str) -> str:
    raw = base64.b64decode(b64_str)
    filename = f"{prefix}{os.urandom(5).hex()}.png"
    file_path = os.path.join(OUTPUT_DIR, filename)
    with open(file_path, "wb") as f:
        f.write(raw)
    return f"/output/{filename}"


def _generate_zimage_via_algo(req: GenerateRequest) -> dict:
    payload = {
        "prompt": req.prompt,
        "width": req.width,
        "height": req.height,
        "model": getattr(req, "model", ""),
    }

    try:
        resp = requests.post(f"{ALGO_SIDE_BASE_URL}/Zimage_text2img", json=payload, timeout=60000)
        data = resp.json() if resp.content else {}
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"算法侧路由不可用：{str(e)}") from e

    if resp.status_code != 200:
        detail = data.get("error") if isinstance(data, dict) else None
        raise HTTPException(status_code=resp.status_code, detail=detail or "算法侧路由返回错误")

    b64_img = data.get("res_image") if isinstance(data, dict) else None
    if not b64_img:
        raise HTTPException(status_code=500, detail="算法侧路由未返回 res_image")

    img_url = _save_base64_png_to_output(b64_img, prefix="zimage_")
    ts = time.time()
    result = {
        "prompt": req.prompt,
        "images": [img_url],
        "timestamp": ts,
        "type": "zimage",
        "params": {"width": req.width, "height": req.height},
    }
    save_to_history(result)
    if state.global_loop:
        asyncio.run_coroutine_threadsafe(state.ws_manager.broadcast_new_image(result), state.global_loop)
    return result


def get_best_backend():
    best_backend = COMFYUI_INSTANCES[0]
    min_queue_size = float("inf")

    for addr in COMFYUI_INSTANCES:
        try:
            with urllib.request.urlopen(f"http://{addr}/queue", timeout=1) as response:
                data = json.loads(response.read())
                remote_load = len(data.get("queue_running", [])) + len(data.get("queue_pending", []))
            with state.load_lock:
                local_load = state.backend_local_load.get(addr, 0)
            effective_load = max(remote_load, local_load)
            if effective_load < min_queue_size:
                min_queue_size = effective_load
                best_backend = addr
        except Exception:
            continue

    return best_backend


def get_comfy_history(comfy_address: str, prompt_id: str):
    try:
        with urllib.request.urlopen(f"http://{comfy_address}/history/{prompt_id}") as response:
            return json.loads(response.read())
    except Exception:
        return {}


def download_image(comfy_address: str, comfy_url_path: str, prefix: str = "studio_"):
    filename = f"{prefix}{os.urandom(5).hex()}.png"
    local_path = os.path.join(OUTPUT_DIR, filename)
    full_url = f"http://{comfy_address}{comfy_url_path}"
    try:
        with urllib.request.urlopen(full_url) as response, open(local_path, "wb") as out_file:
            shutil.copyfileobj(response, out_file)
        return f"/output/{filename}"
    except Exception:
        if comfy_url_path.startswith("/view"):
            return comfy_url_path.replace("/view", "/api/view", 1)
        return full_url


def proxy_view_image(filename: str, image_type: str = "input", subfolder: str = ""):
    try:
        url = f"http://{COMFYUI_INSTANCES[0]}/view"
        params = {"filename": filename, "type": image_type, "subfolder": subfolder}
        response = requests.get(url, params=params, timeout=10)
        return response
    except Exception as e:
        raise HTTPException(status_code=404, detail="Image not found") from e


async def upload_images_to_instances(files_content: List[Tuple]):
    uploaded_files = []
    for file, content in files_content:
        success_count = 0
        last_result = None
        for addr in COMFYUI_INSTANCES:
            try:
                files_data = {"image": (file.filename, content, file.content_type)}
                response = requests.post(f"http://{addr}/upload/image", files=files_data, timeout=5)
                if response.status_code == 200:
                    last_result = response.json()
                    success_count += 1
            except Exception:
                continue

        if success_count > 0 and last_result:
            uploaded_files.append({"comfy_name": last_result.get("name", file.filename)})
        else:
            raise HTTPException(status_code=500, detail="Failed to upload to any backend")

    return {"files": uploaded_files}


def _inject_workflow_params(workflow: dict, req: GenerateRequest, seed: int):
    if "23" in workflow and req.prompt:
        workflow["23"]["inputs"]["text"] = req.prompt
    if "144" in workflow:
        workflow["144"]["inputs"]["width"] = req.width
        workflow["144"]["inputs"]["height"] = req.height
    if "22" in workflow:
        workflow["22"]["inputs"]["seed"] = seed
    if "158" in workflow:
        workflow["158"]["inputs"]["noise_seed"] = seed

    for node_id in ["146", "181", "184", "14"]:
        if node_id in workflow and "inputs" in workflow[node_id] and "seed" in workflow[node_id]["inputs"]:
            workflow[node_id]["inputs"]["seed"] = seed
    if "172" in workflow and "inputs" in workflow["172"] and "seed" in workflow["172"]["inputs"]:
        workflow["172"]["inputs"]["seed"] = seed % 4294967295

    for node_id, node_inputs in req.params.items():
        if node_id not in workflow:
            continue
        if "inputs" not in workflow[node_id]:
            workflow[node_id]["inputs"] = {}
        for input_name, value in node_inputs.items():
            workflow[node_id]["inputs"][input_name] = value


def generate_local(req: GenerateRequest):
    current_task: Optional[dict] = None
    target_backend: Optional[str] = None

    with state.queue_lock:
        task_id = state.next_task_id
        state.next_task_id += 1
        current_task = {"task_id": task_id, "client_id": req.client_id}
        state.queue.append(current_task)

    try:
        # 文生图：优先走算法侧路由（comfyui/app_router.py），不再走 ComfyUI workflow 提交流程
        if (req.type or "zimage") == "zimage" and (req.workflow_json in ("", None, "Z-Image.json")):
            return _generate_zimage_via_algo(req)

        target_backend = get_best_backend()
        with state.load_lock:
            state.backend_local_load[target_backend] += 1

        workflow_path = os.path.join(WORKFLOW_DIR, req.workflow_json)
        if not os.path.exists(workflow_path) and req.workflow_json == "Z-Image.json":
            workflow_path = WORKFLOW_PATH
        if not os.path.exists(workflow_path):
            raise Exception(f"Workflow file not found: {req.workflow_json}")

        with open(workflow_path, "r", encoding="utf-8") as f:
            workflow = json.load(f)

        seed = random.randint(1, 10**15)
        _inject_workflow_params(workflow, req, seed)

        payload = {"prompt": workflow, "client_id": state.client_id}
        data = json.dumps(payload).encode("utf-8")
        try:
            post_req = urllib.request.Request(f"http://{target_backend}/prompt", data=data)
            prompt_id = json.loads(urllib.request.urlopen(post_req, timeout=10).read())["prompt_id"]
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8")
            raise Exception(f"HTTP Error {e.code}: {error_body}") from e

        history_data = None
        for _ in range(300):
            res = get_comfy_history(target_backend, prompt_id)
            if prompt_id in res:
                history_data = res[prompt_id]
                break
            time.sleep(1)

        if not history_data:
            raise Exception("ComfyUI 渲染超时")

        local_urls = []
        current_timestamp = time.time()
        if "outputs" in history_data:
            for node_id in history_data["outputs"]:
                node_output = history_data["outputs"][node_id]
                if "images" not in node_output:
                    continue
                for img in node_output["images"]:
                    comfy_url_path = (
                        f"/view?filename={img['filename']}&subfolder={img['subfolder']}&type={img['type']}"
                    )
                    prefix = f"{req.type}_{int(current_timestamp)}_"
                    local_path = download_image(target_backend, comfy_url_path, prefix=prefix)
                    local_urls.append(local_path)

        result = {
            "prompt": req.prompt if req.prompt else "Detail Enhance",
            "images": local_urls,
            "seed": seed,
            "timestamp": current_timestamp,
            "type": req.type,
            "params": req.params,
        }
        save_to_history(result)

        if state.global_loop:
            asyncio.run_coroutine_threadsafe(state.ws_manager.broadcast_new_image(result), state.global_loop)

        return result
    except Exception as e:
        return {"images": [], "error": str(e)}
    finally:
        if target_backend:
            with state.load_lock:
                if state.backend_local_load.get(target_backend, 0) > 0:
                    state.backend_local_load[target_backend] -= 1
        if current_task:
            with state.queue_lock:
                if current_task in state.queue:
                    state.queue.remove(current_task)

