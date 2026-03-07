import { useEffect, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateVeoSeedanceI2VVideo, generateWanVaceI2VVideo } from "@/api/generation";
import VideoHistoryGrid from "./VideoHistoryGrid";
import VideoLightbox from "./VideoLightbox";

const PAGE_SIZE = 15;
const I2V_ENGINE_KEY = "angle_i2v_engine";
const I2V_FRAMES_KEY = "angle_i2v_frames";
const I2V_FPS_KEY = "angle_i2v_fps";
const I2V_CLOUD_MODEL_KEY = "angle_i2v_cloud_model";
const I2V_CLOUD_RATIO_KEY = "angle_i2v_cloud_ratio";
const I2V_CLOUD_RESOLUTION_KEY = "angle_i2v_cloud_resolution";
const I2V_CLOUD_DURATION_KEY = "angle_i2v_cloud_duration";

const I2V_LOCAL_MODEL = "Wan2.2 Vace";
const I2V_CLOUD_MODELS = [
  { label: "veo 3.1 Fast", value: "veo3.1-fast" },
  { label: "seedance 1.5 pro", value: "doubao-seedance-1-5-pro-251215" },
];
const ASPECT_RATIOS = ["16:9", "9:16"];
const RESOLUTIONS = ["480p", "720p", "1080p"];
const DURATIONS = [5, 10];

const VideoI2VView = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [engine, setEngine] = useState(() => localStorage.getItem(I2V_ENGINE_KEY) || "local");
  const [prompt, setPrompt] = useState("");
  const [frames, setFrames] = useState(() => localStorage.getItem(I2V_FRAMES_KEY) || "81");
  const [fps, setFps] = useState(() => localStorage.getItem(I2V_FPS_KEY) || "24");
  const [cloudModel, setCloudModel] = useState(() => localStorage.getItem(I2V_CLOUD_MODEL_KEY) || I2V_CLOUD_MODELS[0].value);
  const [cloudRatio, setCloudRatio] = useState(() => localStorage.getItem(I2V_CLOUD_RATIO_KEY) || ASPECT_RATIOS[0]);
  const [cloudResolution, setCloudResolution] = useState(() => localStorage.getItem(I2V_CLOUD_RESOLUTION_KEY) || RESOLUTIONS[0]);
  const [cloudDuration, setCloudDuration] = useState(() => {
    const saved = localStorage.getItem(I2V_CLOUD_DURATION_KEY);
    if (saved !== null) {
      const n = parseInt(saved, 10);
      if (Number.isInteger(n)) return n;
    }
    return DURATIONS[0];
  });
  const [rendering, setRendering] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem(I2V_ENGINE_KEY, engine);
  }, [engine]);
  useEffect(() => {
    if (frames !== undefined && frames !== null) localStorage.setItem(I2V_FRAMES_KEY, String(frames));
  }, [frames]);
  useEffect(() => {
    if (fps !== undefined && fps !== null) localStorage.setItem(I2V_FPS_KEY, String(fps));
  }, [fps]);
  useEffect(() => {
    if (cloudModel) localStorage.setItem(I2V_CLOUD_MODEL_KEY, cloudModel);
  }, [cloudModel]);
  useEffect(() => {
    if (cloudRatio) localStorage.setItem(I2V_CLOUD_RATIO_KEY, cloudRatio);
  }, [cloudRatio]);
  useEffect(() => {
    if (cloudResolution) localStorage.setItem(I2V_CLOUD_RESOLUTION_KEY, cloudResolution);
  }, [cloudResolution]);
  useEffect(() => {
    if (Number.isInteger(cloudDuration)) localStorage.setItem(I2V_CLOUD_DURATION_KEY, String(cloudDuration));
  }, [cloudDuration]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("i2v");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectImage = (file) => {
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const handleGenerate = async () => {
    if (!imageFile) {
      alert("请上传图片");
      return;
    }
    if (!prompt.trim()) {
      alert("请输入提示词");
      return;
    }
    if (engine === "cloud") {
      const apiKey = localStorage.getItem("modelscope_api_token");
      if (!apiKey?.trim()) {
        alert("Cloud 模式需要配置 ModelScope API Token（modelscope_api_token）");
        return;
      }
    }
    setRendering(true);
    try {
      if (engine === "cloud") {
        await generateVeoSeedanceI2VVideo({
          imageFile,
          prompt: prompt.trim(),
          apiKey: localStorage.getItem("modelscope_api_token") || "",
          modelSelect: cloudModel,
          aspectRatio: cloudRatio,
          resolution: cloudResolution,
          duration: cloudDuration,
        });
        await loadHistory();
      } else {
        await generateWanVaceI2VVideo({
          imageFile,
          prompt: prompt.trim(),
          numFrames: Number(frames) || 81,
          fps: Number(fps) || 24,
        });
        await loadHistory();
      }
    } catch (error) {
      alert(error?.message || "生成失败");
    } finally {
      setRendering(false);
    }
  };

  const handleDelete = async (timestamp) => {
    try {
      const result = await deleteHistory(String(timestamp));
      if (!result?.success) {
        alert(result?.message || "删除失败");
        return;
      }
      await loadHistory();
      if (previewItem?.timestamp === timestamp) setPreviewItem(null);
    } catch (error) {
      alert(error?.message || "删除失败");
    }
  };

  const handleReplicate = (text) => {
    setPrompt(text || "");
    setPreviewItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const hasMore = currentIndex < historySource.length;

  return (
    <div className="k-top-section">
      <div className="k-top">
        <div className="k-slots k-slots-1">
          <label className="k-slot">
            {imagePreview ? (
              <img src={imagePreview} alt="source" />
            ) : (
              <div className="k-slot-empty">
                <strong>输入图片</strong>
                <span>点击上传图片</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectImage(e.target.files?.[0])}
            />
            {imagePreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClearImage();
                }}
              >
                ×
              </button>
            )}
          </label>
        </div>

        <div className="k-controls">
          <div className="k-prompt-wrap">
            <textarea
              className="k-prompt-input"
              placeholder="Describe your vision..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
            />
            <div className="k-options-row">
              {engine === "local" ? (
                <>
                  <div className="k-model-select">
                    <div className="k-model-label">MODEL</div>
                    <select value={I2V_LOCAL_MODEL} disabled aria-label="模型">
                      <option value={I2V_LOCAL_MODEL}>{I2V_LOCAL_MODEL}</option>
                    </select>
                  </div>
                  <div className="k-model-select k-model-select--input">
                    <div className="k-model-label">帧数</div>
                    <input
                      type="number"
                      className="k-size-input k-size-input--short"
                      value={frames ?? ""}
                      onChange={(e) => setFrames(e.target.value)}
                      min={1}
                      aria-label="帧数"
                    />
                  </div>
                  <div className="k-model-select k-model-select--input">
                    <div className="k-model-label">帧率</div>
                    <input
                      type="number"
                      className="k-size-input k-size-input--short"
                      value={fps ?? ""}
                      onChange={(e) => setFps(e.target.value)}
                      min={1}
                      aria-label="帧率"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="k-model-select">
                    <div className="k-model-label">MODEL</div>
                    <select
                      value={cloudModel ?? ""}
                      onChange={(e) => setCloudModel(e.target.value)}
                      aria-label="云模型"
                    >
                      {I2V_CLOUD_MODELS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="k-model-select">
                    <div className="k-model-label">宽高比</div>
                    <select
                      value={cloudRatio ?? ""}
                      onChange={(e) => setCloudRatio(e.target.value)}
                      aria-label="宽高比"
                    >
                      {ASPECT_RATIOS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="k-model-select">
                    <div className="k-model-label">分辨率</div>
                    <select
                      value={cloudResolution ?? ""}
                      onChange={(e) => setCloudResolution(e.target.value)}
                      aria-label="分辨率"
                    >
                      {RESOLUTIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="k-model-select">
                    <div className="k-model-label">秒数</div>
                    <select
                      value={cloudDuration ?? ""}
                      onChange={(e) => setCloudDuration(Number(e.target.value))}
                      aria-label="秒数"
                    >
                      {DURATIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="k-controls-foot" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
            <div className="z-engine">
              <button
                type="button"
                className={engine === "local" ? "active" : ""}
                onClick={() => setEngine("local")}
              >
                Local
              </button>
              <button
                type="button"
                className={engine === "cloud" ? "active" : ""}
                onClick={() => setEngine("cloud")}
              >
                Cloud
              </button>
            </div>
            <button
              className="k-generate-btn"
              type="button"
              onClick={handleGenerate}
              disabled={rendering}
            >
              {rendering ? "Processing..." : `Execute Synthesis (${engine === "local" ? "Local" : "Cloud"})`}
            </button>
          </div>
        </div>
      </div>

      <VideoHistoryGrid
        items={historyItems}
        onOpenItem={setPreviewItem}
        onDeleteItem={handleDelete}
        onLoadMore={loadMore}
        hasMore={hasMore}
        loading={loadingHistory}
      />

      <VideoLightbox
        item={previewItem}
        onClose={() => setPreviewItem(null)}
        onReplicate={handleReplicate}
      />
    </div>
  );
};

export default VideoI2VView;
