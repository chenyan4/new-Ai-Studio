import os

from fastapi import APIRouter, File, UploadFile
from fastapi.responses import FileResponse, Response
from fastapi import Depends
from sqlalchemy.orm import Session

from server.config import STATIC_DIR
from server.core.state import state
from server.schemas import DeleteHistoryRequest
from server.services.comfy_service import proxy_view_image, upload_images_to_instances
from server.core.database import get_db
from server.routes.auth import get_current_user
from server.services.history_db_service import delete_history as delete_history_db, get_history as get_history_db

router = APIRouter()


@router.get("/api/view")
def view_image(filename: str, type: str = "input", subfolder: str = ""):
    response = proxy_view_image(filename, image_type=type, subfolder=subfolder)
    return Response(content=response.content, media_type=response.headers.get("Content-Type"))


@router.post("/api/upload")
async def upload_image(files: list[UploadFile] = File(...)):
    files_content = []
    for file in files:
        content = await file.read()
        files_content.append((file, content))
    return await upload_images_to_instances(files_content)


@router.get("/api/history")
async def get_history_api(type: str = None, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return get_history_db(db, current_user.id, type_filter=type)


@router.get("/api/queue_status")
async def get_queue_status(client_id: str):
    with state.queue_lock:
        total = len(state.queue)
        positions = [i + 1 for i, task in enumerate(state.queue) if task["client_id"] == client_id]
        position = positions[0] if positions else 0
    return {"total": total, "position": position}


@router.post("/api/history/delete")
async def delete_history_api(req: DeleteHistoryRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return delete_history_db(db, current_user.id, str(req.timestamp))


@router.api_route("/{full_path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"])
async def catch_all(full_path: str):
    # Exclude API routes and other mounted directories - return 404 so API routes (registered in other routers) can match
    if (
        full_path.startswith("api/")
        or full_path.startswith("ws/")
        or full_path.startswith("output/")
        or full_path.startswith("static/")
    ):
        return Response(status_code=404, content="Not Found")

    react_index = os.path.join(STATIC_DIR, "react", "index.html")
    if not os.path.exists(react_index):
        return Response(
            content="Frontend build missing. Please run: npm run build",
            media_type="text/plain",
            status_code=503,
        )
    return FileResponse(react_index)

