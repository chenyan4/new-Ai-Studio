from fastapi import APIRouter

from server.schemas import TokenRequest
from server.services.config_service import delete_token, get_token, set_token

router = APIRouter()


@router.get("/api/config/token")
async def get_global_token():
    return {"token": get_token()}


@router.post("/api/config/token")
async def set_global_token(req: TokenRequest):
    set_token(req.token)
    return {"success": True}


@router.delete("/api/config/token")
async def delete_global_token():
    delete_token()
    return {"success": True}

