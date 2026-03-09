import asyncio

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from server.config import OUTPUT_DIR, STATIC_DIR
from server.core.state import state
from server.routes.cloud import router as cloud_router
from server.routes.common import router as common_router
from server.routes.config import router as config_router
from server.routes.generation import router as generation_router
from server.routes.websocket import router as websocket_router
from server.routes.auth import router as auth_router
from server.core.database import engine, Base

# 初始化数据库
Base.metadata.create_all(bind=engine)


class OutputCacheMiddleware(BaseHTTPMiddleware):
    """为 /output 下的静态资源加缓存头，加速历史图片/视频二次加载"""

    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        if request.url.path.startswith("/output/") and response.status_code == 200:
            response.headers.setdefault("Cache-Control", "public, max-age=86400")  # 1 天
        return response


def create_app():
    app = FastAPI()
    app.add_middleware(OutputCacheMiddleware)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
    app.mount("/output", StaticFiles(directory=OUTPUT_DIR), name="output")

    app.include_router(websocket_router)
    app.include_router(config_router)
    app.include_router(cloud_router)
    app.include_router(generation_router)
    app.include_router(auth_router)
    app.include_router(common_router)

    @app.on_event("startup")
    async def startup_event():
        state.global_loop = asyncio.get_running_loop()

    return app


app = create_app()

