import json

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from server.core.state import state

router = APIRouter()


@router.websocket("/ws/stats")
async def websocket_endpoint(websocket: WebSocket, client_id: str = None):
    await state.ws_manager.connect(websocket, client_id)
    try:
        while True:
            data = await websocket.receive_text()
            if data == "ping":
                await websocket.send_text(json.dumps({"type": "pong"}))
    except WebSocketDisconnect:
        await state.ws_manager.disconnect(websocket, client_id)
    except Exception:
        await state.ws_manager.disconnect(websocket, client_id)

