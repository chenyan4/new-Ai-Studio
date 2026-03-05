import time

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from server.schemas import GenerateRequest
from server.services.comfy_service import generate_local
from server.services.faceswap_service import generate_faceswap
from server.services.changebg_service import generate_changebg
from server.services.clearperson_service import generate_clearperson
from server.services.persontransfer_service import generate_persontransfer
from server.services.lightchange_service import generate_lightchange
from server.services.anglechange_service import generate_anglechange
from server.core.database import get_db
from server.routes.auth import get_current_user
from server.services.history_db_service import save_generation

router = APIRouter()


@router.post("/api/generate")
def generate(req: GenerateRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    result = generate_local(req)
    # 生成成功才落库
    if isinstance(result, dict) and result.get("images"):
        result = save_generation(db, current_user.id, result)
    return result


@router.post("/api/faceswap/generate")
async def faceswap_generate(
    face_image: UploadFile = File(...),
    target_image: UploadFile = File(...),
    model: str = Form("InstantID"),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    result = await generate_faceswap(face_image, target_image, model)
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": f"FaceSwap - {model}",
            "images": result["images"],
            "type": "faceswap",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    return result


@router.post("/api/changebg/generate")
async def changebg_generate(
    person_image: UploadFile = File(...),
    bg_image: UploadFile = File(...),
    model: str = Form("qwen_one"),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    result = await generate_changebg(person_image, bg_image, model)
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": f"ChangeBg - {model}",
            "images": result["images"],
            "type": "changebg",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    return result


@router.post("/api/clearperson/generate")
async def clearperson_generate(
    image: UploadFile = File(...),
    mask: UploadFile = File(None),
    model: str = Form("qwen_edit_2509"),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    result = await generate_clearperson(image, mask, model)
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": f"ClearPerson - {model}",
            "images": result["images"],
            "type": "clearperson",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    return result


@router.post("/api/persontransfer/generate")
async def persontransfer_generate(
    person_image: UploadFile = File(...),
    bg_image: UploadFile = File(...),
    model: str = Form("qwen_edit_2511"),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    result = await generate_persontransfer(person_image, bg_image, model)
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": f"PersonTransfer - {model}",
            "images": result["images"],
            "type": "persontransfer",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    return result


@router.post("/api/lightchange/generate")
async def lightchange_generate(
    image: UploadFile = File(...),
    mask: UploadFile = File(None),
    model: str = Form("qwen_edit_2509"),
    prompt: str = Form(""),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    result = await generate_lightchange(image, mask, model, prompt)
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": prompt or f"LightChange - {model}",
            "images": result["images"],
            "type": "lightchange",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    return result


@router.post("/api/anglechange/generate")
async def anglechange_generate(
    image: UploadFile = File(...),
    prompt: str = Form(""),
    model: str = Form("qwen_edit_2511"),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        result = await generate_anglechange(image, prompt, model)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    if isinstance(result, dict) and result.get("images"):
        record = {
            "timestamp": time.time(),
            "prompt": prompt or f"AngleChange - {model}",
            "images": result["images"],
            "type": "klein_angle",
            "params": {"model": model},
        }
        save_generation(db, current_user.id, record)
        return record
    raise HTTPException(status_code=500, detail="Algorithm service did not return images")
