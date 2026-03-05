import { request } from "./client";

export function generateLocalZImage({ prompt, width, height, modelVersion, clientId }) {
  return request("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt,
      width,
      height,
      model: modelVersion,
      type: "zimage",
      client_id: clientId,
    }),
  });
}

export function generateCloudZImage({ prompt, resolution, apiKey, model }) {
  return request("/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt,
      resolution,
      api_key: apiKey,
      model,
    }),
  });
}

export async function uploadImageFile(file, filename = "upload.png") {
  const formData = new FormData();
  formData.append("files", file, filename);
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Upload failed");
  }
  return data;
}

export function generateEnhancePhase({ uploadedPath, strength, clientId }) {
  return request("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      workflow_json: "Z-Image-Enhance.json",
      params: {
        "15": { image: uploadedPath },
        "204": { value: strength },
      },
      type: "enhance",
      client_id: clientId,
    }),
  });
}

export function generateUpscalePhase({ uploadedPath, resolution, seed, clientId }) {
  return request("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      workflow_json: "upscale.json",
      params: {
        "15": { image: uploadedPath },
        "172": { seed, resolution },
      },
      type: "enhance",
      client_id: clientId,
    }),
  });
}

export function generateKleinWorkflow({ prompt, slot1, slot2, slot3, clientId }) {
  return request("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt,
      workflow_json: "Flux2-Klein.json",
      type: "klein",
      client_id: clientId,
      params: {
        "168": { text: prompt },
        "158": { noise_seed: Math.floor(Math.random() * 1000000) },
        "278": { image: slot1 },
        "270": { image: slot2 || "" },
        "292": { image: slot3 || "" },
        "313": { value: Boolean(slot2) },
        "314": { value: Boolean(slot3) },
      },
    }),
  });
}

export function generateKleinCloud({
  prompt,
  image1,
  image2,
  image3,
  apiKey,
  model,
  sizeMode,
  width,
  height,
  feature,
  productCategory,
  style,
  scene,
  language,
}) {
  return request("/api/klein/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt,
      image_1: image1 || null,
      image_2: image2 || null,
      image_3: image3 || null,
      api_key: apiKey,
      model_select: model || "gemini-3.1-flash-image-preview",
      size_mode: sizeMode || "Match Image_1 (Smart Crop)",
      custom_w: width || 1024,
      custom_h: height || 1024,
      feature: feature || null,
      product_category: productCategory || null,
      style: style || null,
      scene: scene || null,
      language: language || null,
    }),
  });
}

export function generateAngleLocal({ uploadedPath, prompt, seed, clientId, model }) {
  return request("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      workflow_json: "2511.json",
      params: {
        "31": { image: uploadedPath },
        "11": { prompt },
        "14": { seed },
      },
      type: "angle",
      client_id: clientId,
      model: model || "qwen_edit_2511",
    }),
  });
}

export function generateAngleCloud({ prompt, apiKey, imageDataUri, clientId }) {
  return request("/api/angle/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt,
      api_key: apiKey,
      type: "angle",
      model: "Qwen/Qwen-Image-Edit-2511",
      image_urls: [imageDataUri],
      client_id: clientId,
    }),
  });
}

export function pollAngleCloud({ taskId, apiKey, clientId }) {
  return request("/api/angle/poll_status", {
    method: "POST",
    body: JSON.stringify({
      task_id: taskId,
      api_key: apiKey,
      client_id: clientId,
    }),
  });
}

export async function generateFaceSwapLocal({ faceFile, targetFile, model }) {
  const formData = new FormData();
  formData.append("face_image", faceFile);
  formData.append("target_image", targetFile);
  formData.append("model", model);

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/faceswap/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Face swap failed");
  }
  return data;
}

export async function generateChangeBgLocal({ personFile, bgFile, model }) {
  const formData = new FormData();
  formData.append("person_image", personFile);
  formData.append("bg_image", bgFile);
  formData.append("model", model);

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/changebg/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Change background failed");
  }
  return data;
}

export async function generatePersonTransferLocal({ personFile, bgFile, model }) {
  const formData = new FormData();
  formData.append("person_image", personFile);
  formData.append("bg_image", bgFile);
  formData.append("model", model);

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/persontransfer/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Person transfer failed");
  }
  return data;
}

export async function generateClearPersonLocal({ imageFile, maskDataUrl, model }) {
  const formData = new FormData();
  formData.append("image", imageFile);

  // Only flux2_klein requires mask
  if (model === "flux2_klein" && maskDataUrl) {
    const maskBlob = await fetch(maskDataUrl).then((r) => r.blob());
    formData.append("mask", maskBlob, "mask.png");
  }
  formData.append("model", model);

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/clearperson/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Clear person failed");
  }
  return data;
}

export async function generateLightChangeLocal({ imageFile, maskDataUrl, model, prompt }) {
  const formData = new FormData();
  formData.append("image", imageFile);

  // Only flux2_klein requires mask
  if (model === "flux2_klein" && maskDataUrl) {
    const maskBlob = await fetch(maskDataUrl).then((r) => r.blob());
    formData.append("mask", maskBlob, "mask.png");
  }
  formData.append("model", model);
  formData.append("prompt", prompt || "");

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/lightchange/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Light change failed");
  }
  return data;
}

export async function generateAngleChangeLocal({ imageFile, prompt, model }) {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("prompt", prompt || "");
  formData.append("model", model);

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/anglechange/generate", {
    method: "POST",
    headers,
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.detail || "Angle change failed");
  }
  return data;
}
