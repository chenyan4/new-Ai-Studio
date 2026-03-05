import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateClearPersonLocal } from "@/api/generation";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";

const PAGE_SIZE = 24;
const MODEL_VERSION_KEY = "klein_clearperson_model";

const KleinClearPersonView = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [maskDataUrl, setMaskDataUrl] = useState("");
  const [resultPreview, setResultPreview] = useState("");

  const [showMaskEditor, setShowMaskEditor] = useState(false);
  const baseCanvasRef = useRef(null);
  const maskCanvasRef = useRef(null);
  const editorWrapRef = useRef(null);
  const imageRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [brushSize, setBrushSize] = useState(30);
  const [brushColor, setBrushColor] = useState("white");
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const [masking, setMasking] = useState(true);
  const [maskUndoStack, setMaskUndoStack] = useState([]);
  const [maskRedoStack, setMaskRedoStack] = useState([]);

  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "qwen_edit_2509"
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
      const data = await getHistory("clearperson");
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
    const url = URL.createObjectURL(file);
    setImagePreview(url);
    setMaskDataUrl("");
    setResultPreview("");

    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
    };
    img.src = url;
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
    setMaskDataUrl("");
    setResultPreview("");
    imageRef.current = null;
  };

  const resetMask = () => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;
    const ctx = maskCanvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
    ctx.restore();
    setMaskUndoStack([]);
    setMaskRedoStack([]);
  };

  const snapshotMask = () => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;
    const ctx = maskCanvas.getContext("2d");
    const imgData = ctx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
    setMaskUndoStack((prev) => [...prev, imgData]);
    setMaskRedoStack([]);
  };

  const undoMask = () => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;
    setMaskUndoStack((prev) => {
      if (prev.length === 0) return prev;
      const ctx = maskCanvas.getContext("2d");
      const last = prev[prev.length - 1];
      const current = ctx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
      ctx.putImageData(last, 0, 0);
      setMaskRedoStack((redoPrev) => [...redoPrev, current]);
      return prev.slice(0, -1);
    });
  };

  const redoMask = () => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;
    setMaskRedoStack((prev) => {
      if (prev.length === 0) return prev;
      const ctx = maskCanvas.getContext("2d");
      const last = prev[prev.length - 1];
      const current = ctx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
      ctx.putImageData(last, 0, 0);
      setMaskUndoStack((undoPrev) => [...undoPrev, current]);
      return prev.slice(0, -1);
    });
  };

  const drawBaseImage = useCallback(() => {
    const img = imageRef.current;
    const canvas = baseCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!img || !canvas) return;

    // Limit canvas size to fit within modal (max 90vw x 65vh)
    const maxW = Math.min(window.innerWidth * 0.9 - 40, 1100);
    const maxH = window.innerHeight * 0.65;

    let targetW = img.width;
    let targetH = img.height;

    // Scale down if image is too large
    if (targetW > maxW) {
      targetH = (targetH * maxW) / targetW;
      targetW = maxW;
    }
    if (targetH > maxH) {
      targetW = (targetW * maxH) / targetH;
      targetH = maxH;
    }

    targetW = Math.round(targetW);
    targetH = Math.round(targetH);

    canvas.width = targetW;
    canvas.height = targetH;
    if (maskCanvas) {
      maskCanvas.width = targetW;
      maskCanvas.height = targetH;
    }
    setCanvasSize({ w: targetW, h: targetH });

    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, targetW, targetH);
    resetMask();
  }, []);

  const openMaskEditor = () => {
    if (!imagePreview) {
      alert("请先上传图片");
      return;
    }
    setShowMaskEditor(true);
    setMasking(true);
  };

  useEffect(() => {
    if (showMaskEditor && imageRef.current) {
      const timer = window.requestAnimationFrame(() => {
        drawBaseImage();
      });
      return () => window.cancelAnimationFrame(timer);
    }
  }, [showMaskEditor, drawBaseImage]);

  const handlePointerDown = (event) => {
    if (!masking) return;
    const canvas = baseCanvasRef.current;
    const wrapper = editorWrapRef.current;
    if (!canvas || !wrapper) return;
    const wrapRect = wrapper.getBoundingClientRect();
    const stageRect = canvas.getBoundingClientRect();
    const offsetX = stageRect.left - wrapRect.left + wrapper.scrollLeft;
    const offsetY = stageRect.top - wrapRect.top + wrapper.scrollTop;
    const x = event.clientX - wrapRect.left + wrapper.scrollLeft - offsetX;
    const y = event.clientY - wrapRect.top + wrapper.scrollTop - offsetY;

    isDrawingRef.current = true;
    const ctx = maskCanvasRef.current.getContext("2d");
    snapshotMask();
    ctx.strokeStyle = brushColor === "black" ? "#000" : "#fff";
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handlePointerMove = (event) => {
    const canvas = baseCanvasRef.current;
    const wrapper = editorWrapRef.current;
    if (!canvas || !wrapper) return;
    const wrapRect = wrapper.getBoundingClientRect();
    const stageRect = canvas.getBoundingClientRect();
    const offsetX = stageRect.left - wrapRect.left + wrapper.scrollLeft;
    const offsetY = stageRect.top - wrapRect.top + wrapper.scrollTop;
    const x = event.clientX - wrapRect.left + wrapper.scrollLeft - offsetX;
    const y = event.clientY - wrapRect.top + wrapper.scrollTop - offsetY;
    setCursorPos({
      x,
      y,
      visible: masking,
    });

    if (masking && isDrawingRef.current) {
      const ctx = maskCanvasRef.current.getContext("2d");
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  const saveMask = () => {
    const maskCanvas = maskCanvasRef.current;
    const img = imageRef.current;
    if (!maskCanvas || !img) return;

    // Scale mask back to original image size with black background
    const origW = img.width;
    const origH = img.height;
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = origW;
    finalCanvas.height = origH;
    const finalCtx = finalCanvas.getContext("2d");
    // Fill with black first (areas not painted)
    finalCtx.fillStyle = "#000";
    finalCtx.fillRect(0, 0, origW, origH);
    // Draw the mask (white painted areas) on top
    finalCtx.drawImage(maskCanvas, 0, 0, origW, origH);

    const dataUrl = finalCanvas.toDataURL("image/png");
    setMaskDataUrl(dataUrl);
    setShowMaskEditor(false);
  };

  // Check if current model requires mask
  const requiresMask = modelVersion === "flux2_klein";

  const handleGenerate = async () => {
    if (!imageFile) {
      alert("请上传图片");
      return;
    }
    if (requiresMask && !maskDataUrl) {
      alert("请涂抹遮罩区域");
      return;
    }

    setRendering(true);
    try {
      const result = await generateClearPersonLocal({
        imageFile,
        maskDataUrl: requiresMask ? maskDataUrl : null,
        model: modelVersion,
      });

      if (!result?.images?.length) {
        throw new Error("生成失败，未返回图片");
      }

      setResultPreview(result.images[0]);
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
      if (message.type === "new_image" && message.data?.type === "clearperson") {
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
        <div className={`k-slots ${requiresMask ? "k-slots-3" : "k-slots-1"}`}>
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

          {/* 遮罩涂抹按钮 - 仅 flux2_klein 需要 */}
          {requiresMask && (
            <div
              className="k-slot k-slot-clickable k-slot-noborder"
              onClick={openMaskEditor}
            >
              <div className="k-slot-empty">
                <div className="k-brush-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                  </svg>
                </div>
                <span style={{ marginTop: "8px", fontSize: "13px", color: "#666" }}>
                  {maskDataUrl ? "点击重新涂抹" : "点击涂抹遮罩"}
                </span>
              </div>
            </div>
          )}

          {/* 遮罩预览 - 仅 flux2_klein 需要 */}
          {requiresMask && (
            <div className="k-slot">
              {maskDataUrl ? (
                <img
                  src={maskDataUrl}
                  alt="mask"
                  className="k-mask-preview"
                />
              ) : (
                <div className="k-slot-empty">
                  <strong>遮罩预览</strong>
                  <span>涂抹后在此显示</span>
                </div>
              )}
            </div>
          )}
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
              {rendering ? "Processing..." : "Execute Clear"}
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

      {/* 复用 EnhancePage 的遮罩弹窗样式 */}
      {showMaskEditor && (
        <div className="e-modal">
          <div className="e-modal-card">
            <div className="e-modal-head">
              <span>涂抹遮罩</span>
              <button
                type="button"
                onClick={() => {
                  setShowMaskEditor(false);
                  setMasking(false);
                  setCursorPos((prev) => ({ ...prev, visible: false }));
                }}
              >
                关闭
              </button>
            </div>
            <div
              className={`e-canvas-wrap ${masking ? "is-masking" : ""}`}
              ref={editorWrapRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={() => {
                handlePointerUp();
                setCursorPos((prev) => ({ ...prev, visible: false }));
              }}
            >
              <div
                className="e-canvas-stage"
                style={{
                  width: canvasSize.w ? `${canvasSize.w}px` : "100%",
                  height: canvasSize.h ? `${canvasSize.h}px` : "100%",
                }}
              >
                <canvas ref={baseCanvasRef} className="e-canvas" />
                <canvas ref={maskCanvasRef} className="e-canvas mask" />
                {cursorPos.visible && (
                  <div
                    className="e-brush-cursor"
                    style={{
                      width: brushSize,
                      height: brushSize,
                      left: cursorPos.x,
                      top: cursorPos.y,
                    }}
                  />
                )}
              </div>
            </div>
            <div className="e-modal-actions">
              <div className="e-color-toggle">
                <button
                  type="button"
                  className={brushColor === "white" ? "active" : ""}
                  onClick={() => setBrushColor("white")}
                >
                  白色
                </button>
                <button
                  type="button"
                  className={brushColor === "black" ? "active" : ""}
                  onClick={() => setBrushColor("black")}
                >
                  黑色
                </button>
              </div>
              <div className="e-modal-slider">
                <span>画笔大小</span>
                <input
                  type="range"
                  min="4"
                  max="60"
                  value={brushSize}
                  onChange={(event) => setBrushSize(Number(event.target.value))}
                />
                <span>{brushSize}px</span>
              </div>
              <button type="button" onClick={undoMask} disabled={maskUndoStack.length === 0}>
                撤销
              </button>
              <button type="button" onClick={redoMask} disabled={maskRedoStack.length === 0}>
                重做
              </button>
              <button type="button" onClick={resetMask}>
                清空遮罩
              </button>
              <button type="button" className="e-modal-confirm" onClick={saveMask}>
                确认遮罩
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KleinClearPersonView;
