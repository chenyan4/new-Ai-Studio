import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateFaceSwapLocal } from "@/api/generation";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";

const PAGE_SIZE = 24;
const MODEL_VERSION_KEY = "klein_faceswap_model";

const KleinFaceSwapView = () => {
  const [faceFile, setFaceFile] = useState(null);
  const [facePreview, setFacePreview] = useState("");
  const [targetFile, setTargetFile] = useState(null);
  const [targetPreview, setTargetPreview] = useState("");

  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "InstantID"
  );
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
      { label: "InstantID", value: "InstantID" },
      { label: "Qwen Edit 2511", value: "qwen_edit_2511" },
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
      const data = await getHistory("faceswap");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectFace = (file) => {
    if (!file) return;
    setFaceFile(file);
    setFacePreview(URL.createObjectURL(file));
  };

  const handleClearFace = () => {
    setFaceFile(null);
    setFacePreview("");
  };

  const handleSelectTarget = (file) => {
    if (!file) return;
    setTargetFile(file);
    setTargetPreview(URL.createObjectURL(file));
  };

  const handleClearTarget = () => {
    setTargetFile(null);
    setTargetPreview("");
  };

  const handleGenerate = async () => {
    if (!faceFile) {
      alert("请上传人脸图片");
      return;
    }
    if (!targetFile) {
      alert("请上传目标图片");
      return;
    }

    setRendering(true);
    try {
      const result = await generateFaceSwapLocal({
        faceFile,
        targetFile,
        model: modelVersion,
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
      if (message.type === "new_image" && message.data?.type === "faceswap") {
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
        <div className="k-slots k-slots-2">
          <label className="k-slot">
            {targetPreview ? (
              <img src={targetPreview} alt="target" />
            ) : (
              <div className="k-slot-empty">
                <strong>人脸图片</strong>
                <span>点击上传图片</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectTarget(e.target.files?.[0])}
            />
            {targetPreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClearTarget();
                }}
              >
                x
              </button>
            )}
          </label>

          <label className="k-slot">
            {facePreview ? (
              <img src={facePreview} alt="face" />
            ) : (
              <div className="k-slot-empty">
                <strong>目标图片</strong>
                <span>点击上传图片</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectFace(e.target.files?.[0])}
            />
            {facePreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClearFace();
                }}
              >
                x
              </button>
            )}
          </label>
        </div>

        <div className="k-controls">
          <div className="k-prompt-wrap k-prompt-wrap-compact">
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
              {rendering ? "Synthesizing..." : "Execute Synthesis"}
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

export default KleinFaceSwapView;
