import { useEffect, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateWanVacePoseChangeVideo } from "@/api/generation";
import VideoHistoryGrid from "./VideoHistoryGrid";
import VideoLightbox from "./VideoLightbox";

const PAGE_SIZE = 15;
const POSE_SIZE_KEY = "angle_pose_change_size";
const POSE_FPS_KEY = "angle_pose_change_fps";

const POSE_MODEL = "Wan2.2 Vace";

const VideoPoseChangeView = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [image1File, setImage1File] = useState(null);
  const [image1Preview, setImage1Preview] = useState("");

  const [size, setSize] = useState(() => localStorage.getItem(POSE_SIZE_KEY) || "576x1024");
  const [fps, setFps] = useState(() => localStorage.getItem(POSE_FPS_KEY) || "16");

  const [rendering, setRendering] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    if (size != null) localStorage.setItem(POSE_SIZE_KEY, String(size));
  }, [size]);
  useEffect(() => {
    if (fps != null) localStorage.setItem(POSE_FPS_KEY, String(fps));
  }, [fps]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("pose_change");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectVideo = (file) => {
    if (!file) return;
    if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl);
    setVideoFile(file);
    setVideoPreviewUrl(URL.createObjectURL(file));
  };

  const handleClearVideo = () => {
    if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl);
    setVideoFile(null);
    setVideoPreviewUrl("");
  };

  const handleSelectImage1 = (file) => {
    if (!file) return;
    setImage1File(file);
    setImage1Preview(URL.createObjectURL(file));
  };

  const handleClearImage1 = () => {
    setImage1File(null);
    setImage1Preview("");
  };

  const handleGenerate = async () => {
    if (!videoFile) {
      alert("请上传视频");
      return;
    }
    if (!image1File) {
      alert("请上传参考图");
      return;
    }
    const parts = (size || "576x1024").split("x").map((n) => parseInt(String(n).trim(), 10) || 0);
    const w = parts[0] > 0 ? parts[0] : 576;
    const h = parts[1] > 0 ? parts[1] : 1024;
    setRendering(true);
    try {
      await generateWanVacePoseChangeVideo({
        videoFile,
        image1File,
        width: w,
        height: h,
        fps: Number(fps) || 16,
      });
      await loadHistory();
    } catch (error) {
      alert(error?.message || "动作迁移失败");
    } finally {
      setRendering(false);
    }
  };

  const handleDelete = async (timestamp) => {
    try {
      const result = await deleteHistory(String(timestamp));
      if (!result?.success) return;
      setHistorySource((prev) => prev.filter((item) => item.timestamp !== timestamp));
      setHistoryItems((prev) => prev.filter((item) => item.timestamp !== timestamp));
      if (previewItem?.timestamp === timestamp) setPreviewItem(null);
    } catch (e) {
      alert(e?.message || "删除失败");
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const hasMore = currentIndex < historySource.length;

  const sizeParts = (size || "576x1024").split("x").map((n) => n.trim());
  const sizeWidth = sizeParts[0] ?? "";
  const sizeHeight = sizeParts[1] ?? "";
  const setSizeFromInputs = (w, h) => setSize(`${w}x${h}`);

  return (
    <div className="k-top-section">
      <div className="k-top k-top-expand">
        <div className="k-expand-row">
          <div className="k-slots k-slots-2 k-slots-pose-change">
            <label className="k-slot">
              {videoPreviewUrl ? (
                <video
                  src={videoPreviewUrl}
                  muted
                  playsInline
                  style={{ width: "100%", height: "auto", maxHeight: "280px", objectFit: "contain" }}
                />
              ) : (
                <div className="k-slot-empty">
                  <strong>输入视频</strong>
                  <span>点击上传</span>
                </div>
              )}
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleSelectVideo(e.target.files?.[0])}
              />
              {videoPreviewUrl && (
                <button type="button" className="k-slot-clear" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClearVideo(); }}>
                  x
                </button>
              )}
            </label>
            <label className="k-slot">
              {image1Preview ? (
                <img src={image1Preview} alt="参考图" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              ) : (
                <div className="k-slot-empty">
                  <strong>参考图</strong>
                  <span>点击上传图片</span>
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleSelectImage1(e.target.files?.[0])} />
              {image1Preview && (
                <button type="button" className="k-slot-clear" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClearImage1(); }}>
                  x
                </button>
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="k-controls k-controls-expand">
        <div className="k-prompt-wrap k-prompt-wrap-compact">
          <div className="k-options-row">
            <div className="k-model-select">
              <div className="k-model-label">MODEL</div>
              <select value={POSE_MODEL} disabled aria-label="模型">
                <option value={POSE_MODEL}>{POSE_MODEL}</option>
              </select>
            </div>
            <div className="k-model-select k-model-select--input">
              <div className="k-model-label">尺寸</div>
              <div className="k-size-inputs">
                <input
                  type="number"
                  value={sizeWidth}
                  onChange={(e) => setSizeFromInputs(e.target.value, sizeHeight)}
                  min={1}
                  aria-label="宽"
                />
                <span>×</span>
                <input
                  type="number"
                  value={sizeHeight}
                  onChange={(e) => setSizeFromInputs(sizeWidth, e.target.value)}
                  min={1}
                  aria-label="高"
                />
              </div>
            </div>
            <div className="k-model-select k-model-select--input">
              <div className="k-model-label">帧率</div>
              <input
                type="number"
                className="k-size-input k-size-input--short"
                value={fps ?? ""}
                onChange={(e) => setFps(e.target.value)}
                min={1}
                max={60}
                aria-label="帧率"
              />
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
            {rendering ? "Processing..." : "Execute Synthesis"}
          </button>
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

      <VideoLightbox item={previewItem} onClose={() => setPreviewItem(null)} />
    </div>
  );
};

export default VideoPoseChangeView;
