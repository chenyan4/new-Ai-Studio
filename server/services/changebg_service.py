import base64
import os
import time
import uuid

import httpx

ALGO_SIDE_BASE_URL = os.getenv("ALGO_SIDE_BASE_URL", "http://127.0.0.1:9001")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../../output")

MODEL_ENDPOINT_MAP = {
    "qwen_one": "/qwen_2509_one_cb",
    "qwen_double": "/qwen_change_bg",
    "flux2_klein_one": "/flux2_klein_one_cb",
    "flux2_klein_double": "/flux2_klein_change_bg",
}


def file_to_base64(file_bytes: bytes) -> str:
    return base64.b64encode(file_bytes).decode("utf-8")


async def generate_changebg(person_image, bg_image, model: str):
    person_bytes = await person_image.read()
    bg_bytes = await bg_image.read()

    person_b64 = file_to_base64(person_bytes)
    bg_b64 = file_to_base64(bg_bytes)

    endpoint = MODEL_ENDPOINT_MAP.get(model, "/qwen_changebg_one")
    url = f"{ALGO_SIDE_BASE_URL}{endpoint}"

    payload = {
        "image_1": person_b64,
        "image_2": bg_b64,
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
    filename = f"changebg_{uuid.uuid4().hex[:8]}_{int(time.time())}.png"
    filepath = os.path.join(OUTPUT_DIR, filename)

    img_bytes = base64.b64decode(res_b64)
    with open(filepath, "wb") as f:
        f.write(img_bytes)

    image_url = f"/output/{filename}"

    return {"images": [image_url], "type": "changebg"}
