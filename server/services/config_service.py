import json
import os

from server.config import GLOBAL_CONFIG_FILE
from server.core.state import state


def get_token():
    if not os.path.exists(GLOBAL_CONFIG_FILE):
        return ""
    try:
        with open(GLOBAL_CONFIG_FILE, "r", encoding="utf-8") as f:
            config = json.load(f)
        return config.get("modelscope_token", "")
    except Exception:
        return ""


def set_token(token: str):
    with state.global_config_lock:
        config = {}
        if os.path.exists(GLOBAL_CONFIG_FILE):
            try:
                with open(GLOBAL_CONFIG_FILE, "r", encoding="utf-8") as f:
                    config = json.load(f)
            except Exception:
                config = {}

        config["modelscope_token"] = token.strip()
        with open(GLOBAL_CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=4)


def delete_token():
    with state.global_config_lock:
        if not os.path.exists(GLOBAL_CONFIG_FILE):
            return
        try:
            with open(GLOBAL_CONFIG_FILE, "r", encoding="utf-8") as f:
                config = json.load(f)
            if "modelscope_token" in config:
                del config["modelscope_token"]
            with open(GLOBAL_CONFIG_FILE, "w", encoding="utf-8") as f:
                json.dump(config, f, indent=4)
        except Exception:
            pass

