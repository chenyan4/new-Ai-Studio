from typing import Any, Dict, List, Optional

from pydantic import BaseModel


class GenerateRequest(BaseModel):
    prompt: str = ""
    width: int = 1024
    height: int = 1024
    workflow_json: str = "Z-Image.json"
    params: Dict[str, Any] = {}
    type: str = "zimage"
    client_id: str = ""
    model: str = ""


class CloudGenRequest(BaseModel):
    prompt: str
    api_key: str
    resolution: str = "1024x1024"
    client_id: Optional[str] = None
    type: str = "default"
    image_urls: List[str] = []
    model: str = ""


class DeleteHistoryRequest(BaseModel):
    # 历史记录 timestamp 在数据库中按字符串存储；删除时应保持原样透传
    timestamp: str


class TokenRequest(BaseModel):
    token: str


class CloudPollRequest(BaseModel):
    task_id: str
    api_key: str
    client_id: Optional[str] = None


class KleinCloudRequest(BaseModel):
    prompt: str
    image_1: Optional[str] = None
    image_2: Optional[str] = None
    image_3: Optional[str] = None
    api_key: str
    model_select: str = "gemini-3-pro-image-preview"
    size_mode: str = "Match Image_1 (Smart Crop)"
    custom_w: int = 1024
    custom_h: int = 1024
    feature: Optional[str] = None
    product_category: Optional[str] = None
    style: Optional[str] = None
    scene: Optional[str] = None
    language: Optional[str] = None


class VeoSeedanceRequest(BaseModel):
    prompt: str
    api_key: str
    model_select: str = "veo3.1-fast"
    aspect_ratio: str = "16:9"
    resolution: str = "480p"
    duration: int = 5
    image_1: Optional[str] = None
    image_2: Optional[str] = None


class WanVaceT2VRequest(BaseModel):
    prompt: str
    width: int = 1024
    height: int = 576
    num_frames: int = 81
    fps: int = 24


class WanVaceI2VRequest(BaseModel):
    prompt: str
    image_1: str
    num_frames: int = 81
    fps: int = 24


class WanVaceFirstEndRequest(BaseModel):
    prompt: str
    image_1: str
    image_2: str
    num_frames: int = 81
    width: int = 780
    height: int = 420
    fps: int = 24


class VideoExpandRequest(BaseModel):
    video_url: str  # 本地视频文件绝对路径，算法侧可读
    expand_left: int = 160
    expand_top: int = 0
    expand_right: int = 160
    expand_bottom: int = 0
    width: int = 480
    height: int = 832
    fps: int = 24


class PersonChangeOneRequest(BaseModel):
    image_1: str  # base64 视频任意帧
    image_2: str  # base64 参考图
    video_url: str  # 本地视频路径，算法侧可读
    width: int = 576
    height: int = 1024
    fps: int = 16


class PersonChangeMixRequest(BaseModel):
    image_1: str  # base64 视频替换帧
    video_url: str  # 本地视频路径，算法侧可读
    width: int = 840
    height: int = 1024
    fps: int = 16


class PoseChangeRequest(BaseModel):
    image_1: str  # base64 参考图
    video_url: str  # 本地视频路径，算法侧可读
    width: int = 576
    height: int = 1024
    fps: int = 16


class UserCreate(BaseModel):
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    email: str
    username: str
    avatar_url: Optional[str] = None
    created_at: str
    api_token: Optional[str] = None

class UserTokenUpdate(BaseModel):
    api_token: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

