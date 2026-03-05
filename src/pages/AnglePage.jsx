import { useEffect, useMemo, useState, useCallback } from "react";
import { getHistory } from "@/api/history";
import {
  generateAngleCloud,
  generateAngleLocal,
  pollAngleCloud,
  uploadImageFile,
} from "@/api/generation";
import AngleUploadPanel from "@/components/angle/AngleUploadPanel";
import AngleControls from "@/components/angle/AngleControls";
import AngleHistoryGrid from "@/components/angle/AngleHistoryGrid";
import AngleLightbox from "@/components/angle/AngleLightbox";
import { Camera, Download } from "lucide-react";

const PAGE_SIZE = 30;
const ENGINE_MODE_KEY = "angle_engine_mode";

const makeClientId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const ensureClientId = () => {
  const existing = localStorage.getItem("client_id");
  if (existing) return existing;
  const created = makeClientId();
  localStorage.setItem("client_id", created);
  return created;
};

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AnglePage = () => {
  const [engine, setEngine] = useState(localStorage.getItem(ENGINE_MODE_KEY) || "local");
  const [prompt, setPrompt] = useState("");
  const [rotateH, setRotateH] = useState(0);
  const [rotateV, setRotateV] = useState(0);
  const [distance, setDistance] = useState(4);

  const [uploadedPath, setUploadedPath] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [rendering, setRendering] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState({
    visible: false,
    status: "Pending...",
    percent: 0,
  });

  const clientId = useMemo(() => ensureClientId(), []);

  useEffect(() => {
    localStorage.setItem(ENGINE_MODE_KEY, engine);
  }, [engine]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    const data = await getHistory("angle");
    setHistorySource(data || []);
    setHistoryItems([]);
    setCurrentIndex(0);
    appendPage(data || [], 0);
  };

  // Sync prompt with angle changes
  const applyAnglePrompt = useCallback((h, v, d) => {
    const parts = [];
    if (h !== 0) {
      parts.push(`${h > 0 ? "向右" : "向左"}旋转${Math.abs(h)}度`);
    }
    if (v !== 0) {
      parts.push(`${v > 0 ? "俯视" : "仰视"}${Math.abs(v)}度`);
    }
    let lensText = "";
    if (d > 4) lensText = "使用广角镜头";
    if (d < 4) lensText = "使用特写镜头";

    let line = "";
    if (parts.length > 0) line = `将相机${parts.join("，")}`;
    if (lensText) line += (line ? "，" : "将相机") + lensText;

    setPrompt((prevPrompt) => {
      const regex = /将相机.*?(?=(\n|$))/g;
      if (regex.test(prevPrompt)) {
        return prevPrompt.replace(regex, line);
      } else {
        return prevPrompt.trim() ? (line ? `${prevPrompt.trim()}\n${line}` : prevPrompt) : line;
      }
    });
  }, []);

  useEffect(() => {
    applyAnglePrompt(rotateH, rotateV, distance);
  }, [rotateH, rotateV, distance, applyAnglePrompt]);

  const handleSelectFile = async (file) => {
    if (!file) return;
    setUploadedFile(file);
    const dataUrl = await fileToDataUri(file);
    setPreviewUrl(dataUrl);
    try {
      const data = await uploadImageFile(file, file.name || "angle_input.png");
      const comfyName = data?.files?.[0]?.comfy_name;
      if (!comfyName) throw new Error("上传成功但未返回路径");
      setUploadedPath(comfyName);
    } catch (error) {
      alert(error.message || "上传失败");
    }
  };

  const runCloud = async () => {
    let token = localStorage.getItem("modelscope_api_token");
    if (!token) {
      if (typeof window.openTokenModal === "function") {
        window.openTokenModal();
      }
      throw new Error("请先设置个人 ModelScope Token");
    }

    const imageDataUri = await fileToDataUri(uploadedFile);
    setProgress({ visible: true, status: "Submitting...", percent: 0 });

    let data = await generateAngleCloud({
      prompt,
      apiKey: token,
      imageDataUri,
      clientId,
    });

    while (data?.status === "timeout" && data?.task_id) {
      const shouldContinue = window.confirm(
        "Cloud generation is taking longer than expected (300s).\n\nDo you want to continue waiting?"
      );
      if (!shouldContinue) {
        throw new Error("User cancelled waiting.");
      }
      setProgress({ visible: true, status: "Resuming...", percent: 0 });
      data = await pollAngleCloud({
        taskId: data.task_id,
        apiKey: token,
        clientId,
      });
    }

    if (!data?.url) {
      throw new Error("No image URL in cloud response");
    }

    return {
      images: [data.url],
      prompt,
      timestamp: Date.now(),
      is_cloud: true,
    };
  };

  const runLocal = async () => {
    const data = await generateAngleLocal({
      uploadedPath,
      prompt,
      seed: Math.floor(Math.random() * 1000000000000000),
      clientId,
    });
    if (!data?.images?.length) {
      throw new Error("No images returned");
    }
    return data;
  };

  const handleGenerate = async () => {
    if (engine === "local" && !uploadedPath) {
      alert("Please upload an image first");
      return;
    }
    if (engine === "cloud" && !uploadedFile) {
      alert("Please upload an image first");
      return;
    }
    if (!prompt.trim()) {
      alert("请输入提示词");
      return;
    }

    setRendering(true);
    setCurrentResult(null);
    try {
      const generated = engine === "cloud" ? await runCloud() : await runLocal();
      setCurrentResult(generated);
      setHistorySource((prev) => [generated, ...prev]);
      setHistoryItems((prev) => [generated, ...prev]);
    } catch (error) {
      alert(error.message || "Generation failed");
    } finally {
      setRendering(false);
      setProgress({ visible: false, status: "Pending...", percent: 0 });
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const data = event?.detail;
      if (!data) return;

      if (data.type === "cloud_status") {
        const total = Number(data.total || 150);
        const current = Number(data.progress || 0);
        const percent = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
        setProgress({
          visible: true,
          status: data.status || "Pending...",
          percent,
        });
      }

      if (data.type === "new_image" && data.data?.type === "angle") {
        setHistorySource((prev) => {
          if (prev.find((item) => item.timestamp === data.data.timestamp)) return prev;
          return [data.data, ...prev];
        });
        setHistoryItems((prev) => {
          if (prev.find((item) => item.timestamp === data.data.timestamp)) return prev;
          return [data.data, ...prev];
        });
      }
    };

    window.addEventListener("studio_ws_message", handler);
    return () => window.removeEventListener("studio_ws_message", handler);
  }, []);

  const hasMore = currentIndex < historySource.length;

  return (
    <div className="a-page">
      <div className="a-header">
        <div className="a-header-title">
          <h1>ANGLE CONTROL<span>®</span></h1>
          <p>Camera & Perspective Control</p>
        </div>
      </div>

      <main className="a-main-content">
        {/* Row 1: Upload and Controls */}
        <div className="a-row">
          <AngleUploadPanel previewUrl={previewUrl} onSelectFile={handleSelectFile} />
          <AngleControls
            engine={engine}
            onEngineChange={setEngine}
            prompt={prompt}
            onPromptChange={setPrompt}
            rotateH={rotateH}
            rotateV={rotateV}
            distance={distance}
            onRotateHChange={setRotateH}
            onRotateVChange={setRotateV}
            onDistanceChange={setDistance}
            onGenerate={handleGenerate}
            rendering={rendering}
            progress={progress}
            previewUrl={previewUrl}
          />
        </div>

        {/* Row 2: Result */}
        <div className="a-result-section">
          <h3 className="a-section-title">04. Result Preview</h3>
          <div className="a-result-frame">
            {!rendering && !currentResult?.images?.[0] && (
              <div className="a-empty-state">
                <Camera size={48} strokeWidth={1} />
                <p>Canvas Ready</p>
              </div>
            )}

            {rendering && (
              <div className="a-loading-state">
                <div className="a-loading-box"></div>
                <p>Processing...</p>
                {progress.visible && (
                  <div className="a-progress-container">
                    <div className="a-progress-info">
                      <span>{progress.status}</span>
                      <span>{progress.percent}%</span>
                    </div>
                    <div className="a-progress-track">
                      <div className="a-progress-bar" style={{ width: `${progress.percent}%` }}></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!rendering && currentResult?.images?.[0] && (
              <>
                <img
                  src={currentResult.images[0]}
                  alt="angle-result"
                  className="a-result-img"
                  onClick={() => setPreviewItem(currentResult)}
                />
                <a
                  href={currentResult.images[0]}
                  download={`Angle-${Date.now()}.png`}
                  className="a-download-btn"
                >
                  <Download size={20} />
                </a>
              </>
            )}
          </div>
        </div>
      </main>

      <section className="a-history-section">
        <div className="a-history-header">
          <h2>Archive</h2>
          <div className="a-history-divider"></div>
        </div>
        <AngleHistoryGrid
          items={historyItems}
          onOpen={setPreviewItem}
          onLoadMore={() => appendPage(historySource, currentIndex)}
          hasMore={hasMore}
        />
      </section>

      <AngleLightbox item={previewItem} onClose={() => setPreviewItem(null)} />
    </div>
  );
};

export default AnglePage;
