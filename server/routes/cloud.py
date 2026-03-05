import time

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from server.schemas import CloudGenRequest, CloudPollRequest, KleinCloudRequest
from server.services.cloud_service import generate_angle_cloud, generate_cloud, generate_klein_cloud, poll_angle_cloud
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

