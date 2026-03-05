import base64
import os
import time
import uuid

import httpx

ALGO_SIDE_BASE_URL = os.getenv("ALGO_SIDE_BASE_URL", "http://127.0.0.1:9001")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../../output")

MODEL_ENDPOINT_MAP = {
    "qwen_edit_2509": "/qwen_clear_person",
    "flux2_klein": "/flux2_clear_person",
}

# Models that require mask image
MODELS_REQUIRE_MASK = {"flux2_klein"}


def file_to_base64(file_bytes: bytes) -> str:
    return base64.b64encode(file_bytes).decode("utf-8")


async def generate_clearperson(image, mask, model: str):
    image_bytes = await image.read()
    image_b64 = file_to_base64(image_bytes)

    endpoint = MODEL_ENDPOINT_MAP.get(model, "/qwen_clear_person")
    url = f"{ALGO_SIDE_BASE_URL}{endpoint}"

    # Build payload based on model requirements
    if model in MODELS_REQUIRE_MASK:
        # flux2_klein requires mask
        if mask is None:
            raise Exception("flux2_klein 模型需要遮罩图片")
        mask_bytes = await mask.read()
        mask_b64 = file_to_base64(mask_bytes)
        payload = {
            "image_1": image_b64,
            "image_2": mask_b64,
        }
    else:
        # qwen_edit_2509 does not need mask
        payload = {
            "image_1": image_b64,
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
    filename = f"clearperson_{uuid.uuid4().hex[:8]}_{int(time.time())}.png"
    filepath = os.path.join(OUTPUT_DIR, filename)

    img_bytes = base64.b64decode(res_b64)
    with open(filepath, "wb") as f:
        f.write(img_bytes)

    image_url = f"/output/{filename}"

    return {"images": [image_url], "type": "clearperson"}
