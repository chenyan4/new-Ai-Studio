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

export function generateVeoSeedanceVideo({
  prompt,
  apiKey,
  modelSelect,
  aspectRatio,
  resolution,
  duration,
}) {
  return request("/api/video/veo_seedance", {
    method: "POST",
    body: JSON.stringify({
      prompt: prompt?.trim() || "",
      api_key: apiKey || "",
      model_select: modelSelect || "veo3.1-fast",
      aspect_ratio: aspectRatio || "16:9",
      resolution: resolution || "480p",
      duration: duration ?? 5,
    }),
  });
}

/**
 * 图生视频 Cloud：前端传图片文件，后端转为 base64 后调算法 /veo_seedance_api。
 * 成功时返回 { url, success: true }，url 为可访问的视频地址（本地 /output/xxx 或远程）。
 */
export async function generateVeoSeedanceI2VVideo({
  imageFile,
  prompt,
  apiKey,
  modelSelect,
  aspectRatio,
  resolution,
  duration,
}) {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("prompt", prompt?.trim() || "");
  formData.append("api_key", apiKey || "");
  formData.append("model_select", modelSelect || "veo3.1-fast");
  formData.append("aspect_ratio", aspectRatio || "16:9");
  formData.append("resolution", resolution || "480p");
  formData.append("duration", String(duration ?? 5));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/veo_seedance_i2v", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "图生视频失败");
  }
  // 保证返回 { url, success } 形状，便于调用方使用
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: typeof data === "object" && data?.url ? data.url : null, success: !!data?.url };
}

/**
 * 首尾帧生成 Cloud：双图 + 提示词，调 /veo_seedance_api（双图 I2V），保存 type first_end。
 */
export async function generateVeoSeedanceFirstEndVideo({
  image1File,
  image2File,
  prompt,
  apiKey,
  modelSelect,
  aspectRatio,
  resolution,
  duration,
}) {
  const formData = new FormData();
  formData.append("image_1", image1File);
  formData.append("image_2", image2File);
  formData.append("prompt", prompt?.trim() || "");
  formData.append("api_key", apiKey || "");
  formData.append("model_select", modelSelect || "veo3.1-fast");
  formData.append("aspect_ratio", aspectRatio || "16:9");
  formData.append("resolution", resolution || "480p");
  formData.append("duration", String(duration ?? 5));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/veo_seedance_first_end", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "首尾帧生成失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

/**
 * 图生视频 Local（Wan2.2 Vace I2V）：前端传图片文件，后端转 base64 调算法 /wan_vace_i2v，返回 base64 视频后存本地。
 */
export async function generateWanVaceI2VVideo({ imageFile, prompt, numFrames, fps }) {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("prompt", prompt?.trim() || "");
  formData.append("num_frames", String(numFrames ?? 81));
  formData.append("fps", String(fps ?? 24));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/wan_vace_i2v", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "图生视频失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

/**
 * 首尾帧生成（Local）：首帧图 + 尾帧图 + 提示词 -> WanVideo 首尾帧视频。
 */
export async function generateWanVaceFirstEndVideo({
  image1File,
  image2File,
  prompt,
  numFrames,
  width,
  height,
  fps,
}) {
  const formData = new FormData();
  formData.append("image_1", image1File);
  formData.append("image_2", image2File);
  formData.append("prompt", prompt?.trim() || "");
  formData.append("num_frames", String(numFrames ?? 81));
  formData.append("width", String(Number(width) || 780));
  formData.append("height", String(Number(height) || 420));
  formData.append("fps", String(Number(fps) ?? 24));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/wan_vace_first_end", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "首尾帧生成失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

export function generateWanVaceT2VVideo({ prompt, width, height, numFrames, fps }) {
  return request("/api/video/wan_vace_t2v", {
    method: "POST",
    body: JSON.stringify({
      prompt: prompt?.trim() || "",
      width: Number(width) || 1024,
      height: Number(height) || 576,
      num_frames: Number(numFrames) || 81,
      fps: Number(fps) || 24,
    }),
  });
}

/**
 * 视频扩图（Local）：上传视频 + 四边扩展像素 + 尺寸、帧率 -> 算法 /video_expand。
 */
export async function generateVideoExpand({
  videoFile,
  expandLeft,
  expandTop,
  expandRight,
  expandBottom,
  width,
  height,
  fps,
}) {
  const formData = new FormData();
  formData.append("video", videoFile);
  formData.append("expand_left", String(Number(expandLeft) || 0));
  formData.append("expand_top", String(Number(expandTop) || 0));
  formData.append("expand_right", String(Number(expandRight) || 0));
  formData.append("expand_bottom", String(Number(expandBottom) || 0));
  formData.append("width", String(Number(width) || 480));
  formData.append("height", String(Number(height) || 832));
  formData.append("fps", String(Number(fps) ?? 24));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/video_expand", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "视频扩图失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

/**
 * 视频替换（单人）：视频 + 视频任意帧图 + 参考图 -> 算法 /wan_vace_person_change_one。
 */
export async function generateWanVacePersonChangeOneVideo({
  videoFile,
  image1File,
  image2File,
  width,
  height,
  fps,
}) {
  const formData = new FormData();
  formData.append("video", videoFile);
  formData.append("image_1", image1File);
  formData.append("image_2", image2File);
  formData.append("width", String(Number(width) || 576));
  formData.append("height", String(Number(height) || 1024));
  formData.append("fps", String(Number(fps) ?? 16));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/wan_vace_person_change_one", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "视频替换失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

/**
 * 视频替换（多人）：视频 + 视频替换帧图片 -> 算法 /wan_vace_person_change_mix。
 */
export async function generateWanVacePersonChangeMixVideo({
  videoFile,
  image1File,
  width,
  height,
  fps,
}) {
  const formData = new FormData();
  formData.append("video", videoFile);
  formData.append("image_1", image1File);
  formData.append("width", String(Number(width) || 840));
  formData.append("height", String(Number(height) || 1024));
  formData.append("fps", String(Number(fps) ?? 16));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/wan_vace_person_change_mix", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "视频替换失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
}

/**
 * 动作迁移：视频 + 参考图 -> 算法 /wan_vace_pose_change。
 */
export async function generateWanVacePoseChangeVideo({
  videoFile,
  image1File,
  width,
  height,
  fps,
}) {
  const formData = new FormData();
  formData.append("video", videoFile);
  formData.append("image_1", image1File);
  formData.append("width", String(Number(width) || 576));
  formData.append("height", String(Number(height) || 1024));
  formData.append("fps", String(Number(fps) ?? 16));

  const token = localStorage.getItem("access_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch("/api/video/wan_vace_pose_change", {
    method: "POST",
    headers,
    body: formData,
  });
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = typeof data === "object" && data?.detail
      ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail))
      : String(data);
    throw new Error(message || "动作迁移失败");
  }
  if (typeof data === "object" && data !== null && "url" in data) {
    return data;
  }
  return { url: data?.url ?? null, success: !!data?.url };
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
