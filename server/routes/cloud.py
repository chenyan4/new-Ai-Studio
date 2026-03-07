import base64
import os
import time
import uuid

from fastapi import APIRouter, Depends, File, Form, UploadFile
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from server.config import VIDEO_UPLOAD_DIR
from server.schemas import CloudGenRequest, CloudPollRequest, KleinCloudRequest, VeoSeedanceRequest, WanVaceT2VRequest, WanVaceI2VRequest, WanVaceFirstEndRequest, VideoExpandRequest, PersonChangeOneRequest, PersonChangeMixRequest, PoseChangeRequest
from server.services.cloud_service import generate_angle_cloud, generate_cloud, generate_klein_cloud, poll_angle_cloud, veo_seedance_api, wan_vace_t2v_api, wan_vace_i2v_api, wan_vace_h_first_end_api, video_expand_api, wan_vace_person_change_one_api, wan_vace_person_change_mix_api, wan_vace_pose_change_api
from server.core.database import get_db
from server.routes.auth import get_current_user
from server.services.history_db_service import save_generation

router = APIRouter()


@router.post("/api/angle/poll_status")
async def poll_angle_cloud_api(req: CloudPollRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await poll_angle_cloud(req)
    if isinstance(data, dict) and data.get("url"):
        record = {
            "timestamp": time.time(),
            "prompt": f"Resumed {req.task_id}",
            "images": [data["url"]],
            "type": "angle",
            "is_cloud": True,
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/api/angle/generate")
async def generate_angle_cloud_api(req: CloudGenRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await generate_angle_cloud(req)
    if isinstance(data, dict) and data.get("url"):
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [data["url"]],
            "type": "angle",
            "is_cloud": True,
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/generate")
async def generate_cloud_api(req: CloudGenRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await generate_cloud(req)
    if isinstance(data, dict) and data.get("url"):
        width, height = 1024, 1024
        if req.resolution and "x" in req.resolution:
            parts = req.resolution.split("x")
            if len(parts) == 2:
                try:
                    width, height = int(parts[0]), int(parts[1])
                except ValueError:
                    pass
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [data["url"]],
            "type": "cloud",
            "params": {"width": width, "height": height},
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/api/klein/generate")
async def generate_klein_cloud_api(req: KleinCloudRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await generate_klein_cloud(req)
    if isinstance(data, dict) and data.get("url"):
        history_type = "klein_ecom" if (getattr(req, "feature", None) == "ecom") else "klein"
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [data["url"]],
            "type": history_type,
            "params": {
                "model": req.model_select,
                "width": req.custom_w,
                "height": req.custom_h,
                "size_mode": req.size_mode,
                "feature": getattr(req, "feature", None),
                "product_category": getattr(req, "product_category", None),
                "style": getattr(req, "style", None),
                "scene": getattr(req, "scene", None),
                "language": getattr(req, "language", None),
            },
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/api/video/veo_seedance")
async def veo_seedance_video_api(req: VeoSeedanceRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await veo_seedance_api(req)
    if isinstance(data, dict) and data.get("url"):
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [data["url"]],
            "type": "video",
            "params": {
                "model_select": req.model_select,
                "aspect_ratio": req.aspect_ratio,
                "resolution": req.resolution,
                "duration": req.duration,
            },
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/api/video/veo_seedance_i2v")
async def veo_seedance_i2v_api(
    image: UploadFile = File(...),
    prompt: str = Form(...),
    api_key: str = Form(""),
    model_select: str = Form("veo3.1-fast"),
    aspect_ratio: str = Form("16:9"),
    resolution: str = Form("480p"),
    duration: int = Form(5),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    # 前端上传的是文件；后端转为 base64 后以 image_1 发给算法侧
    raw = await image.read()
    image_b64 = base64.b64encode(raw).decode("utf-8")
    req = VeoSeedanceRequest(
        prompt=prompt.strip(),
        api_key=api_key.strip(),
        model_select=model_select or "veo3.1-fast",
        aspect_ratio=aspect_ratio or "16:9",
        resolution=resolution or "480p",
        duration=int(duration) if duration is not None else 5,
        image_1=image_b64,
        image_2=None,
    )
    data = await veo_seedance_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [url],
            "type": "i2v",
            "params": {
                "model_select": req.model_select,
                "aspect_ratio": req.aspect_ratio,
                "resolution": req.resolution,
                "duration": req.duration,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/veo_seedance_first_end")
async def veo_seedance_first_end_api(
    image_1: UploadFile = File(..., description="首帧图片"),
    image_2: UploadFile = File(..., description="尾帧图片"),
    prompt: str = Form(...),
    api_key: str = Form(""),
    model_select: str = Form("veo3.1-fast"),
    aspect_ratio: str = Form("16:9"),
    resolution: str = Form("480p"),
    duration: int = Form(5),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw1 = await image_1.read()
    raw2 = await image_2.read()
    b64_1 = base64.b64encode(raw1).decode("utf-8")
    b64_2 = base64.b64encode(raw2).decode("utf-8")
    req = VeoSeedanceRequest(
        prompt=prompt.strip(),
        api_key=api_key.strip(),
        model_select=model_select or "veo3.1-fast",
        aspect_ratio=aspect_ratio or "16:9",
        resolution=resolution or "480p",
        duration=int(duration) if duration is not None else 5,
        image_1=b64_1,
        image_2=b64_2,
    )
    data = await veo_seedance_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [url],
            "type": "first_end",
            "params": {
                "model_select": req.model_select,
                "aspect_ratio": req.aspect_ratio,
                "resolution": req.resolution,
                "duration": req.duration,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_i2v")
async def wan_vace_i2v_video_api(
    image: UploadFile = File(...),
    prompt: str = Form(...),
    num_frames: int = Form(81),
    fps: int = Form(24),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw = await image.read()
    image_b64 = base64.b64encode(raw).decode("utf-8")
    req = WanVaceI2VRequest(
        prompt=prompt.strip(),
        image_1=image_b64,
        num_frames=int(num_frames) if num_frames is not None else 81,
        fps=int(fps) if fps is not None else 24,
    )
    data = await wan_vace_i2v_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [url],
            "type": "i2v",
            "params": {
                "model_select": "Wan2.2 Vace",
                "num_frames": req.num_frames,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_first_end")
async def wan_vace_first_end_video_api(
    image_1: UploadFile = File(..., description="首帧图片"),
    image_2: UploadFile = File(..., description="尾帧图片"),
    prompt: str = Form(...),
    num_frames: int = Form(81),
    width: int = Form(780),
    height: int = Form(420),
    fps: int = Form(24),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw1 = await image_1.read()
    raw2 = await image_2.read()
    b64_1 = base64.b64encode(raw1).decode("utf-8")
    b64_2 = base64.b64encode(raw2).decode("utf-8")
    req = WanVaceFirstEndRequest(
        prompt=prompt.strip(),
        image_1=b64_1,
        image_2=b64_2,
        num_frames=int(num_frames) if num_frames is not None else 81,
        width=int(width) if width is not None else 780,
        height=int(height) if height is not None else 420,
        fps=int(fps) if fps is not None else 24,
    )
    data = await wan_vace_h_first_end_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [url],
            "type": "first_end",
            "params": {
                "model_select": "Wan2.2 Vace",
                "num_frames": req.num_frames,
                "width": req.width,
                "height": req.height,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_t2v")
async def wan_vace_t2v_video_api(req: WanVaceT2VRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    data = await wan_vace_t2v_api(req)
    if isinstance(data, dict) and data.get("url"):
        record = {
            "timestamp": time.time(),
            "prompt": req.prompt,
            "images": [data["url"]],
            "type": "video",
            "params": {
                "model_select": "Wan2.2 Vace",
                "width": req.width,
                "height": req.height,
                "num_frames": req.num_frames,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
    return data


@router.post("/api/video/video_expand")
async def video_expand_video_api(
    video: UploadFile = File(..., description="输入视频"),
    expand_left: int = Form(160),
    expand_top: int = Form(0),
    expand_right: int = Form(160),
    expand_bottom: int = Form(0),
    width: int = Form(480),
    height: int = Form(832),
    fps: int = Form(24),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw = await video.read()
    ext = "mp4"
    if video.filename and "." in video.filename:
        ext = video.filename.rsplit(".", 1)[-1].lower() or "mp4"
    name = f"expand_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
    save_path = os.path.join(VIDEO_UPLOAD_DIR, name)
    with open(save_path, "wb") as f:
        f.write(raw)
    video_url = os.path.abspath(save_path)
    req = VideoExpandRequest(
        video_url=video_url,
        expand_left=int(expand_left),
        expand_top=int(expand_top),
        expand_right=int(expand_right),
        expand_bottom=int(expand_bottom),
        width=int(width),
        height=int(height),
        fps=int(fps),
    )
    data = await video_expand_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": "",
            "images": [url],
            "type": "video_expand",
            "params": {
                "model_select": "Wan2.2 Vace",
                "expand_left": req.expand_left,
                "expand_top": req.expand_top,
                "expand_right": req.expand_right,
                "expand_bottom": req.expand_bottom,
                "width": req.width,
                "height": req.height,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_person_change_one")
async def wan_vace_person_change_one_video_api(
    video: UploadFile = File(..., description="输入视频"),
    image_1: UploadFile = File(..., description="视频任意帧图片"),
    image_2: UploadFile = File(..., description="参考图"),
    width: int = Form(576),
    height: int = Form(1024),
    fps: int = Form(16),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw_video = await video.read()
    raw1 = await image_1.read()
    raw2 = await image_2.read()
    ext = "mp4"
    if video.filename and "." in video.filename:
        ext = video.filename.rsplit(".", 1)[-1].lower() or "mp4"
    name = f"person_one_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
    save_path = os.path.join(VIDEO_UPLOAD_DIR, name)
    with open(save_path, "wb") as f:
        f.write(raw_video)
    video_url = os.path.abspath(save_path)
    b64_1 = base64.b64encode(raw1).decode("utf-8")
    b64_2 = base64.b64encode(raw2).decode("utf-8")
    req = PersonChangeOneRequest(
        image_1=b64_1,
        image_2=b64_2,
        video_url=video_url,
        width=int(width),
        height=int(height),
        fps=int(fps),
    )
    data = await wan_vace_person_change_one_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": "",
            "images": [url],
            "type": "person_change_one",
            "params": {
                "model_select": "Wan2.2 Vace",
                "width": req.width,
                "height": req.height,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_person_change_mix")
async def wan_vace_person_change_mix_video_api(
    video: UploadFile = File(..., description="输入视频"),
    image_1: UploadFile = File(..., description="视频替换帧图片"),
    width: int = Form(840),
    height: int = Form(1024),
    fps: int = Form(16),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw_video = await video.read()
    raw1 = await image_1.read()
    ext = "mp4"
    if video.filename and "." in video.filename:
        ext = video.filename.rsplit(".", 1)[-1].lower() or "mp4"
    name = f"person_mix_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
    save_path = os.path.join(VIDEO_UPLOAD_DIR, name)
    with open(save_path, "wb") as f:
        f.write(raw_video)
    video_url = os.path.abspath(save_path)
    b64_1 = base64.b64encode(raw1).decode("utf-8")
    req = PersonChangeMixRequest(
        image_1=b64_1,
        video_url=video_url,
        width=int(width),
        height=int(height),
        fps=int(fps),
    )
    data = await wan_vace_person_change_mix_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": "",
            "images": [url],
            "type": "person_change_mix",
            "params": {
                "model_select": "Wan2.2 Vace",
                "width": req.width,
                "height": req.height,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )


@router.post("/api/video/wan_vace_pose_change")
async def wan_vace_pose_change_video_api(
    video: UploadFile = File(..., description="输入视频"),
    image_1: UploadFile = File(..., description="参考图"),
    width: int = Form(576),
    height: int = Form(1024),
    fps: int = Form(16),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    raw_video = await video.read()
    raw1 = await image_1.read()
    ext = "mp4"
    if video.filename and "." in video.filename:
        ext = video.filename.rsplit(".", 1)[-1].lower() or "mp4"
    name = f"pose_change_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
    save_path = os.path.join(VIDEO_UPLOAD_DIR, name)
    with open(save_path, "wb") as f:
        f.write(raw_video)
    video_url = os.path.abspath(save_path)
    b64_1 = base64.b64encode(raw1).decode("utf-8")
    req = PoseChangeRequest(
        image_1=b64_1,
        video_url=video_url,
        width=int(width),
        height=int(height),
        fps=int(fps),
    )
    data = await wan_vace_pose_change_api(req)
    url = data.get("url") if isinstance(data, dict) else None
    if url:
        record = {
            "timestamp": time.time(),
            "prompt": "",
            "images": [url],
            "type": "pose_change",
            "params": {
                "model_select": "Wan2.2 Vace",
                "width": req.width,
                "height": req.height,
                "fps": req.fps,
            },
        }
        save_generation(db, current_user.id, record)
        return JSONResponse(content={"url": url, "success": True})
    return JSONResponse(
        content={"success": False, "detail": "未获取到视频地址", "url": None},
        status_code=502,
    )
