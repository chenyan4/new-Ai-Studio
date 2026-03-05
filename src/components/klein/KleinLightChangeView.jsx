import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateLightChangeLocal } from "@/api/generation";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";

const PAGE_SIZE = 24;
const MODEL_VERSION_KEY = "klein_lightchange_model";

const KleinLightChangeView = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "qwen_edit_2509"
  );
  const [prompt, setPrompt] = useState("");
  const [rendering, setRendering] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem(MODEL_VERSION_KEY, modelVersion);
  }, [modelVersion]);

  const modelOptions = useMemo(
    () => [
      { label: "Qwen Edit 2509", value: "qwen_edit_2509" },
      { label: "Flux2 Klein", value: "flux2_klein" },
    ],
    []
  );

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("lightchange");
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

    setRendering(true);
    try {
      const result = await generateLightChangeLocal({
        imageFile,
        maskDataUrl: null,
        model: modelVersion,
        prompt,
      });

      if (!result?.images?.length) {
        throw new Error("生成失败，未返回图片");
      }

      await loadHistory();
    } catch (error) {
      alert(error.message || "生成失败");
    } finally {
      setRendering(false);
    }
  };

  const handleDelete = async (timestamp) => {
    const ok = window.confirm("Delete this archive?");
    if (!ok) return;
    const resultDelete = await deleteHistory(timestamp);
    if (!resultDelete?.success) return;
    setHistorySource((prev) => prev.filter((item) => item.timestamp !== timestamp));
    setHistoryItems((prev) => prev.filter((item) => item.timestamp !== timestamp));
    if (previewItem?.timestamp === timestamp) setPreviewItem(null);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const message = event?.detail;
      if (!message?.type) return;
      if (message.type === "new_image" && message.data?.type === "lightchange") {
        setHistorySource((prev) => {
          if (prev.find((item) => item.timestamp === message.data.timestamp)) return prev;
          return [message.data, ...prev];
        });
        setHistoryItems((prev) => {
          if (prev.find((item) => item.timestamp === message.data.timestamp)) return prev;
          return [message.data, ...prev];
        });
      }
    };

    window.addEventListener("studio_ws_message", handler);
    return () => window.removeEventListener("studio_ws_message", handler);
  }, []);

  const hasMore = currentIndex < historySource.length;

  return (
    <div className="k-top-section">
      <div className="k-top">
        <div className="k-slots k-slots-1">
          {/* 图片上传 */}
          <label className="k-slot">
            {imagePreview ? (
              <img src={imagePreview} alt="source" />
            ) : (
              <div className="k-slot-empty">
                <strong>原始图片</strong>
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
                x
              </button>
            )}
          </label>
        </div>

        <div className="k-controls">
          <div className="k-prompt-wrap">
            <textarea
              className="k-prompt-input"
              placeholder="请输入光影效果描述，例如：暖色调阳光、冷色调月光..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="k-options-row">
              <div className="k-model-select">
                <div className="k-model-label">MODEL</div>
                <select
                  value={modelVersion}
                  onChange={(e) => setModelVersion(e.target.value)}
                  aria-label="模型版本"
                >
                  {modelOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="k-controls-foot">
            <span className="k-local-badge">Local</span>
            <button
              className="k-generate-btn"
              type="button"
              onClick={handleGenerate}
              disabled={rendering}
            >
              {rendering ? "Processing..." : "Execute Light Change"}
            </button>
          </div>
        </div>
      </div>

      <KleinHistoryGrid
        items={historyItems}
        onOpen={setPreviewItem}
        onDelete={handleDelete}
        onLoadMore={loadMore}
        hasMore={hasMore}
        loading={loadingHistory}
      />

      <KleinLightbox
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
};

export default KleinLightChangeView;
