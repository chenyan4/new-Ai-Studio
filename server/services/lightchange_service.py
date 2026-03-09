import base64
import os
import time
import uuid

import httpx

from server.config import ALGO_SIDE_BASE_URL

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../../output")

MODEL_ENDPOINT_MAP = {
    "qwen_edit_2509": "/qwen_change_light",
    "flux2_klein": "/flux2_change_light",
}


def file_to_base64(file_bytes: bytes) -> str:
    return base64.b64encode(file_bytes).decode("utf-8")


async def generate_lightchange(image, mask, model: str, prompt: str = ""):
    image_bytes = await image.read()
    image_b64 = file_to_base64(image_bytes)

    endpoint = MODEL_ENDPOINT_MAP.get(model, "/qwen_change_light")
    url = f"{ALGO_SIDE_BASE_URL}{endpoint}"

    payload = {
        "image_1": image_b64,
        "prompt": prompt or "change light",
    }

    async with httpx.AsyncClient(timeout=300) as client:
        response = await client.post(url, json=payload)
        if response.status_code != 200:
            error_text = response.text
            raise Exception(f"Algorithm service error: {error_text}")

        data = response.json()

    res_b64 = data.get("res_image")
    if not res_b64:
        raise Exception("Algorithm service did not return an image")

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    filename = f"lightchange_{uuid.uuid4().hex[:8]}_{int(time.time())}.png"
    filepath = os.path.join(OUTPUT_DIR, filename)

    img_bytes = base64.b64decode(res_b64)
    with open(filepath, "wb") as f:
        f.write(img_bytes)

    image_url = f"/output/{filename}"

    return {"images": [image_url], "type": "lightchange"}
