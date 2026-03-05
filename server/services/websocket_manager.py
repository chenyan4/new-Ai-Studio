import json
from typing import Dict, List, Optional

from fastapi import WebSocket


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.user_connections: Dict[str, WebSocket] = {}

    async def connect(self, websocket: WebSocket, client_id: Optional[str] = None):
        await websocket.accept()
        self.active_connections.append(websocket)
        if client_id:
            self.user_connections[client_id] = websocket
        await self.broadcast_count()

    async def disconnect(self, websocket: WebSocket, client_id: Optional[str] = None):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
        if client_id and client_id in self.user_connections:
            del self.user_connections[client_id]
        await self.broadcast_count()

    async def send_personal_message(self, message: dict, client_id: str):
        if client_id not in self.user_connections:
            return
        try:
            await self.user_connections[client_id].send_text(json.dumps(message))
        except Exception:
            await self.disconnect(self.user_connections[client_id], client_id)

    async def broadcast_count(self):
        payload = json.dumps(
            {
                "type": "stats",
                "online_count": len(self.active_connections),
            }
        )
        for connection in self.active_connections[:]:
            try:
                await connection.send_text(payload)
            except Exception:
                self.active_connections.remove(connection)

    async def broadcast_new_image(self, image_data: dict):
        payload = json.dumps({"type": "new_image", "data": image_data})
        for connection in self.active_connections[:]:
            try:
                await connection.send_text(payload)
            except Exception:
                self.active_connections.remove(connection)

