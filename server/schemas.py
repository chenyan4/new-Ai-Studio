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

