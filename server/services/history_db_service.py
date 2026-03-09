import json
import time
from typing import Optional, List

from sqlalchemy.orm import Session

from server.models import GenerationHistory


def _normalize_timestamp(value) -> str:
    # 统一存成字符串，兼容前端 key 与删除逻辑
    if value is None:
        return str(time.time())
    return str(value)


def save_generation(db: Session, user_id: str, record: dict) -> dict:
    ts = _normalize_timestamp(record.get("timestamp"))
    images = record.get("images") or []
    params = record.get("params") or {}

    row = GenerationHistory(
        user_id=str(user_id),
        type=str(record.get("type") or "zimage"),
        prompt=record.get("prompt") or "",
        images_json=json.dumps(images, ensure_ascii=False),
        params_json=json.dumps(params, ensure_ascii=False),
        timestamp=ts,
    )
    db.add(row)
    db.commit()
    db.refresh(row)

    # 返回给前端/调用方的统一 shape
    out = dict(record)
    out["timestamp"] = ts
    out["images"] = images
    out["params"] = params
    return out


def get_history(
    db: Session,
    user_id: str,
    type_filter: Optional[str] = None,
    limit: int = 100,
    offset: int = 0,
) -> List[dict]:
    q = db.query(GenerationHistory).filter(GenerationHistory.user_id == str(user_id))

    if type_filter:
        target_types = [type_filter]
        # 兼容旧逻辑：zimage 页面需要同时展示 cloud
        if type_filter == "zimage":
            target_types.append("cloud")
        q = q.filter(GenerationHistory.type.in_(target_types))

    rows = q.order_by(GenerationHistory.created_at.desc()).offset(offset).limit(limit).all()
    result = []
    for r in rows:
        images = r.images
        if not images:
            continue
        item = {
            "timestamp": r.timestamp,
            "prompt": r.prompt,
            "images": images,
            "type": r.type,
            "params": r.params,
        }
        # 兼容 angle 的云端 badge
        if r.type == "angle":
            if any("cloud_angle" in img or "cloud_" in img for img in images):
                item["is_cloud"] = True
        result.append(item)
    return result


def delete_history(db: Session, user_id: str, timestamp: str):
    row = (
        db.query(GenerationHistory)
        .filter(GenerationHistory.user_id == str(user_id))
        .filter(GenerationHistory.timestamp == str(timestamp))
        .first()
    )
    if not row:
        return {"success": False, "message": "Record not found"}
    db.delete(row)
    db.commit()
    return {"success": True}

