import asyncio
import uuid
from threading import Lock
from typing import Dict, List, Optional

from server.config import COMFYUI_INSTANCES
from server.services.websocket_manager import ConnectionManager


class AppState:
    def __init__(self):
        self.client_id = str(uuid.uuid4())
        self.queue: List[dict] = []
        self.next_task_id = 1
        self.backend_local_load: Dict[str, int] = {addr: 0 for addr in COMFYUI_INSTANCES}

        self.queue_lock = Lock()
        self.history_lock = Lock()
        self.global_config_lock = Lock()
        self.load_lock = Lock()

        self.global_loop: Optional[asyncio.AbstractEventLoop] = None
        self.ws_manager = ConnectionManager()


state = AppState()

