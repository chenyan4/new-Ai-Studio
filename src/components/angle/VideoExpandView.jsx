import { useCallback, useEffect, useRef, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateVideoExpand } from "@/api/generation";
import VideoHistoryGrid from "./VideoHistoryGrid";
import VideoLightbox from "./VideoLightbox";

const PAGE_SIZE = 15;
const EXPAND_MODEL_KEY = "angle_video_expand_model";
const EXPAND_SIZE_KEY = "angle_video_expand_size";
const EXPAND_FPS_KEY = "angle_video_expand_fps";
const EXPAND_LEFT_KEY = "angle_video_expand_left";
const EXPAND_TOP_KEY = "angle_video_expand_top";
const EXPAND_RIGHT_KEY = "angle_video_expand_right";
const EXPAND_BOTTOM_KEY = "angle_video_expand_bottom";

const EXPAND_MODEL = "Wan2.2 Vace";
const SLIDER_MAX = 300;

const VideoExpandView = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [size, setSize] = useState(() => localStorage.getItem(EXPAND_SIZE_KEY) || "480x832");
  const [fps, setFps] = useState(() => localStorage.getItem(EXPAND_FPS_KEY) || "24");
  const [expandLeft, setExpandLeft] = useState(() => parseInt(localStorage.getItem(EXPAND_LEFT_KEY), 10) || 160);
  const [expandTop, setExpandTop] = useState(() => parseInt(localStorage.getItem(EXPAND_TOP_KEY), 10) || 0);
  const [expandRight, setExpandRight] = useState(() => parseInt(localStorage.getItem(EXPAND_RIGHT_KEY), 10) || 160);
  const [expandBottom, setExpandBottom] = useState(() => parseInt(localStorage.getItem(EXPAND_BOTTOM_KEY), 10) || 0);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvasReady, setCanvasReady] = useState(false);

  const [rendering, setRendering] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    if (size != null) localStorage.setItem(EXPAND_SIZE_KEY, String(size));
  }, [size]);
  useEffect(() => {
    if (fps != null) localStorage.setItem(EXPAND_FPS_KEY, String(fps));
  }, [fps]);
  useEffect(() => {
    localStorage.setItem(EXPAND_LEFT_KEY, String(expandLeft));
  }, [expandLeft]);
  useEffect(() => {
    localStorage.setItem(EXPAND_TOP_KEY, String(expandTop));
  }, [expandTop]);
  useEffect(() => {
    localStorage.setItem(EXPAND_RIGHT_KEY, String(expandRight));
  }, [expandRight]);
  useEffect(() => {
    localStorage.setItem(EXPAND_BOTTOM_KEY, String(expandBottom));
  }, [expandBottom]);

  const drawCanvas = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh) return;

    const totalW = vw + expandLeft + expandRight;
    const totalH = vh + expandTop + expandBottom;
    const maxSize = 400;
    const scale = Math.min(maxSize / totalW, maxSize / totalH, 1);
    const cw = Math.round(totalW * scale);
    const ch = Math.round(totalH * scale);

    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d");

    const l = (expandLeft / totalW) * cw;
    const t = (expandTop / totalH) * ch;
    const r = (expandRight / totalW) * cw;
    const b = (expandBottom / totalH) * ch;
    const imgW = (vw / totalW) * cw;
    const imgH = (vh / totalH) * ch;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cw, ch);

    ctx.fillStyle = "#000000";
    if (l > 0) ctx.fillRect(0, 0, l, ch);
    if (r > 0) ctx.fillRect(cw - r, 0, r, ch);
    if (t > 0) ctx.fillRect(l, 0, imgW, t);
    if (b > 0) ctx.fillRect(l, ch - b, imgW, b);

    ctx.drawImage(video, 0, 0, vw, vh, l, t, imgW, imgH);
    setCanvasReady(true);
  }, [expandLeft, expandTop, expandRight, expandBottom]);

  useEffect(() => {
    if (!videoPreviewUrl) {
      setCanvasReady(false);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      video.currentTime = 0;
    };
    const onSeeked = () => {
      drawCanvas();
    };
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("seeked", onSeeked);
    if (video.readyState >= 2) {
      video.currentTime = 0;
    }
    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [videoPreviewUrl, drawCanvas]);

  useEffect(() => {
    if (canvasReady && videoRef.current && canvasRef.current) {
      drawCanvas();
    }
  }, [expandLeft, expandTop, expandRight, expandBottom, canvasReady, drawCanvas]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("video_expand");
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
    setCanvasReady(false);
  };

  const handleClearVideo = () => {
    if (videoPreviewUrl) URL.revokeObjectURL(videoPreviewUrl);
    setVideoFile(null);
    setVideoPreviewUrl("");
    setCanvasReady(false);
  };

  const handleGenerate = async () => {
    if (!videoFile) {
      alert("请上传视频");
      return;
    }
    const parts = (size || "480x832").split("x").map((n) => parseInt(String(n).trim(), 10) || 0);
    const w = parts[0] > 0 ? parts[0] : 480;
    const h = parts[1] > 0 ? parts[1] : 832;
    setRendering(true);
    try {
      await generateVideoExpand({
        videoFile,
        expandLeft,
        expandTop,
        expandRight,
        expandBottom,
        width: w,
        height: h,
        fps: Number(fps) || 24,
      });
      await loadHistory();
    } catch (error) {
      alert(error?.message || "视频扩图失败");
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

  const sizeParts = (size || "480x832").split("x").map((n) => n.trim());
  const sizeWidth = sizeParts[0] ?? "";
  const sizeHeight = sizeParts[1] ?? "";
  const setSizeFromInputs = (w, h) => setSize(`${w}x${h}`);

  return (
    <div className="k-top-section">
      <div className="k-top k-top-expand">
        <div className="k-expand-row">
          <div className="k-expand-upload-half">
            <div className="k-slots k-slots-1">
            <label className="k-slot">
              {videoPreviewUrl ? (
                <video
                  ref={videoRef}
                  src={videoPreviewUrl}
                  muted
                  playsInline
                  style={{ width: "100%", height: "auto", maxHeight: "320px", objectFit: "contain" }}
                />
              ) : (
                <div className="k-slot-empty">
                  <strong>输入视频</strong>
                  <span>点击上传视频</span>
                </div>
              )}
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleSelectVideo(e.target.files?.[0])}
              />
              {videoPreviewUrl && (
                <button
                  type="button"
                  className="k-slot-clear"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClearVideo();
                  }}
                >
                  x
                </button>
              )}
            </label>
          </div>
        </div>

        <div className="k-expand-canvas-half">
          <h3 className="a-section-title">02. 首帧与扩展预览</h3>
          <div className="k-expand-panel a-camera-panel">
            <div className="k-expand-canvas-wrapper a-three-view-wrapper">
              {videoPreviewUrl ? (
                <canvas
                  ref={canvasRef}
                  className="k-expand-canvas"
                />
              ) : (
                <div className="k-expand-canvas-placeholder">
                  <span>上传视频后显示首帧</span>
                  <span className="k-expand-canvas-hint">拖动右侧滑块可预览扩展区域（灰/黑色）</span>
                </div>
              )}
            </div>
            <div className="k-expand-sliders-wrap a-camera-sliders">
              <div className="a-slider-group">
                <div className="a-slider-header">
                  <span className="a-slider-label">Expand Left</span>
                  <div className="a-val-box">
                    <input
                      type="number"
                      min={0}
                      max={SLIDER_MAX}
                      value={expandLeft}
                      onChange={(e) => setExpandLeft(Number(e.target.value))}
                    />
                    <span>px</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={SLIDER_MAX}
                  step={8}
                  value={expandLeft}
                  onChange={(e) => setExpandLeft(Number(e.target.value))}
                />
              </div>
              <div className="a-slider-group">
                <div className="a-slider-header">
                  <span className="a-slider-label">Expand Top</span>
                  <div className="a-val-box">
                    <input
                      type="number"
                      min={0}
                      max={SLIDER_MAX}
                      value={expandTop}
                      onChange={(e) => setExpandTop(Number(e.target.value))}
                    />
                    <span>px</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={SLIDER_MAX}
                  step={8}
                  value={expandTop}
                  onChange={(e) => setExpandTop(Number(e.target.value))}
                />
              </div>
              <div className="a-slider-group">
                <div className="a-slider-header">
                  <span className="a-slider-label">Expand Right</span>
                  <div className="a-val-box">
                    <input
                      type="number"
                      min={0}
                      max={SLIDER_MAX}
                      value={expandRight}
                      onChange={(e) => setExpandRight(Number(e.target.value))}
                    />
                    <span>px</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={SLIDER_MAX}
                  step={8}
                  value={expandRight}
                  onChange={(e) => setExpandRight(Number(e.target.value))}
                />
              </div>
              <div className="a-slider-group">
                <div className="a-slider-header">
                  <span className="a-slider-label">Expand Bottom</span>
                  <div className="a-val-box">
                    <input
                      type="number"
                      min={0}
                      max={SLIDER_MAX}
                      value={expandBottom}
                      onChange={(e) => setExpandBottom(Number(e.target.value))}
                    />
                    <span>px</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={SLIDER_MAX}
                  step={8}
                  value={expandBottom}
                  onChange={(e) => setExpandBottom(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="k-controls k-controls-expand">
        <div className="k-prompt-wrap k-prompt-wrap-compact">
          <div className="k-options-row">
            <div className="k-model-select">
              <div className="k-model-label">MODEL</div>
              <select value={EXPAND_MODEL} disabled aria-label="模型">
                <option value={EXPAND_MODEL}>{EXPAND_MODEL}</option>
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

      <VideoLightbox
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
};

export default VideoExpandView;
