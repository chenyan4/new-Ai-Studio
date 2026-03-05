import json
import os
import time
from typing import Optional

from server.config import HISTORY_FILE, OUTPUT_DIR
from server.core.state import state


def save_to_history(record: dict):
    with state.history_lock:
        history = []
        if os.path.exists(HISTORY_FILE):
            try:
                with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                    history = json.load(f)
            except Exception:
                history = []

        if "timestamp" not in record:
            record["timestamp"] = time.time()

        history.insert(0, record)
        with open(HISTORY_FILE, "w", encoding="utf-8") as f:
            json.dump(history[:5000], f, ensure_ascii=False, indent=4)


def get_history(type_filter: Optional[str] = None):
    if not os.path.exists(HISTORY_FILE):
        return []
    try:
        with open(HISTORY_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception:
        return []

    if type_filter:
        target_types = [type_filter]
        if type_filter == "zimage":
            target_types.append("cloud")
        data = [item for item in data if item.get("type", "zimage") in target_types]

    data = [item for item in data if item.get("images") and len(item["images"]) > 0]

    def sort_key(item):
        ts = item.get("timestamp", 0)
        return float(ts) if isinstance(ts, (int, float)) else 0

    data.sort(key=sort_key, reverse=True)

    for item in data:
        if "is_cloud" not in item and item.get("images"):
            if any("cloud_angle" in img or "cloud_" in img for img in item["images"]):
                item["is_cloud"] = True

    return data


def delete_history(timestamp: float):
    if not os.path.exists(HISTORY_FILE):
        return {"success": False, "message": "History file not found"}

    target_record = None
    try:
        with state.history_lock:
            with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                history = json.load(f)

            new_history = []
            for item in history:
                is_match = False
                item_ts = item.get("timestamp", 0)
                if isinstance(timestamp, (int, float)) and isinstance(item_ts, (int, float)):
                    if abs(float(item_ts) - float(timestamp)) < 0.001:
                        is_match = True
                elif str(item_ts) == str(timestamp):
                    is_match = True

                if is_match:
                    target_record = item
                else:
                    new_history.append(item)

            if target_record:
                with open(HISTORY_FILE, "w", encoding="utf-8") as f:
                    json.dump(new_history, f, ensure_ascii=False, indent=4)
    except Exception as e:
        return {"success": False, "message": str(e)}

    if not target_record:
        return {"success": False, "message": "Record not found"}

    for img_url in target_record.get("images", []):
        if not img_url.startswith("/output/"):
            continue
        filename = img_url.split("/")[-1]
        file_path = os.path.join(OUTPUT_DIR, filename)
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
            except Exception:
                pass

    return {"success": True}

