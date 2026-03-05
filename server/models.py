from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy import Text
from datetime import datetime
import uuid
import json

from server.core.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True, index=True, default=generate_uuid)
    email = Column(String(120), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    username = Column(String(80), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    avatar_url = Column(String(500), nullable=True)
    api_token = Column(String(255), nullable=True)


class GenerationHistory(Base):
    __tablename__ = "generation_history"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String(36), index=True, nullable=False)

    type = Column(String(50), index=True, nullable=False)  # zimage/enhance/klein/angle/cloud...
    prompt = Column(Text, nullable=True)
    images_json = Column(Text, nullable=False, default="[]")
    params_json = Column(Text, nullable=False, default="{}")

    # 与前端兼容：仍使用 timestamp 字段作为 key
    timestamp = Column(String(64), index=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)

    @property
    def images(self):
        try:
            return json.loads(self.images_json or "[]")
        except Exception:
            return []

    @property
    def params(self):
        try:
            return json.loads(self.params_json or "{}")
        except Exception:
            return {}
