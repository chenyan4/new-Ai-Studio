import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generatePersonTransferLocal } from "@/api/generation";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";

const PAGE_SIZE = 24;
const MODEL_VERSION_KEY = "klein_persontransfer_model";

const KleinPersonTransferView = () => {
  const [personFile, setPersonFile] = useState(null);
  const [personPreview, setPersonPreview] = useState("");
  const [bgFile, setBgFile] = useState(null);
  const [bgPreview, setBgPreview] = useState("");

  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "qwen_edit_2511"
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
      { label: "Qwen Edit 2511", value: "qwen_edit_2511" },
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
      const data = await getHistory("persontransfer");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectPerson = (file) => {
    if (!file) return;
    setPersonFile(file);
    setPersonPreview(URL.createObjectURL(file));
  };

  const handleClearPerson = () => {
    setPersonFile(null);
    setPersonPreview("");
  };

  const handleSelectBg = (file) => {
    if (!file) return;
    setBgFile(file);
    setBgPreview(URL.createObjectURL(file));
  };

  const handleClearBg = () => {
    setBgFile(null);
    setBgPreview("");
  };

  const handleGenerate = async () => {
    if (!personFile) {
      alert("请上传人物图片");
      return;
    }
    if (!bgFile) {
      alert("请上传背景图片");
      return;
    }

    setRendering(true);
    try {
      const result = await generatePersonTransferLocal({
        personFile,
        bgFile,
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
      if (message.type === "new_image" && message.data?.type === "persontransfer") {
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
            {personPreview ? (
              <img src={personPreview} alt="person" />
            ) : (
              <div className="k-slot-empty">
                <strong>人物图片</strong>
                <span>点击上传图片</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectPerson(e.target.files?.[0])}
            />
            {personPreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClearPerson();
                }}
              >
                x
              </button>
            )}
          </label>

          <label className="k-slot">
            {bgPreview ? (
              <img src={bgPreview} alt="background" />
            ) : (
              <div className="k-slot-empty">
                <strong>迁移图片</strong>
                <span>点击上传图片</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectBg(e.target.files?.[0])}
            />
            {bgPreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClearBg();
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

export default KleinPersonTransferView;
