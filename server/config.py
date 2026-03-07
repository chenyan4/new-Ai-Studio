import os


DEFAULT_COMFYUI_INSTANCES = [
    "127.0.0.1:8188",
]


def _load_comfyui_instances():
    raw = os.environ.get("COMFYUI_INSTANCES", "").strip()
    if not raw:
        return DEFAULT_COMFYUI_INSTANCES
    instances = [item.strip() for item in raw.split(",") if item.strip()]
    return instances or DEFAULT_COMFYUI_INSTANCES


COMFYUI_INSTANCES = _load_comfyui_instances()
COMFYUI_ADDRESS = COMFYUI_INSTANCES[0]

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORKFLOW_DIR = os.path.join(BASE_DIR, "workflows")
WORKFLOW_PATH = os.path.join(WORKFLOW_DIR, "Z-Image.json")
STATIC_DIR = os.path.join(BASE_DIR, "static")
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
HISTORY_FILE = os.path.join(BASE_DIR, "history.json")
GLOBAL_CONFIG_FILE = os.path.join(BASE_DIR, "global_config.json")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(STATIC_DIR, exist_ok=True)
os.makedirs(WORKFLOW_DIR, exist_ok=True)

# 视频上传目录（算法侧需能读取此路径，同机部署可设为算法 input_video 目录）
VIDEO_UPLOAD_DIR = os.environ.get("VIDEO_UPLOAD_DIR", os.path.join(BASE_DIR, "output", "uploaded_video"))
os.makedirs(VIDEO_UPLOAD_DIR, exist_ok=True)

# 算法侧路由（本地算法服务，如 comfyui/app_router.py）
ALGO_SIDE_BASE_URL = os.environ.get("ALGO_SIDE_BASE_URL", "http://127.0.0.1:9001")

# 数据库配置
DATABASE_URL = os.environ.get("DATABASE_URL", f"sqlite:///{os.path.join(BASE_DIR, 'server', 'database.db')}")

# JWT 配置
JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "your-super-secret-jwt-key")
JWT_ALGORITHM = "HS256"
JWT_ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

