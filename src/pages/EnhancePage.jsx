import { useEffect, useRef, useState, useMemo } from "react";
import EnhanceUploadPanel from "@/components/enhance/EnhanceUploadPanel";
import EnhanceControls from "@/components/enhance/EnhanceControls";
import EnhanceResultPanel from "@/components/enhance/EnhanceResultPanel";
import EnhanceLightbox from "@/components/enhance/EnhanceLightbox";

const EnhancePage = () => {
  const [mode, setMode] = useState("image");
  const [previewUrl, setPreviewUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [imageResultUrl, setImageResultUrl] = useState("");
  const [maskResultUrl, setMaskResultUrl] = useState("");
  const [videoResultUrl, setVideoResultUrl] = useState("");
  const [frameResults, setFrameResults] = useState([]);
  const [queueStatusText] = useState("Local Ready");
  const [previewItem, setPreviewItem] = useState(null);

  // image tools
  const [masking, setMasking] = useState(false);
  const [brushSize, setBrushSize] = useState(18);
  const [brushColor, setBrushColor] = useState("white");
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cropMode, setCropMode] = useState(false);
  const [cropRect, setCropRect] = useState(null);
  const [maskUndoStack, setMaskUndoStack] = useState([]);
  const [maskRedoStack, setMaskRedoStack] = useState([]);
  const [maskModalOpen, setMaskModalOpen] = useState(false);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
  const [displayScale, setDisplayScale] = useState(1);

  // video tools
  const [trimStart, setTrimStart] = useState("0");
  const [trimEnd, setTrimEnd] = useState("");
  const [fps, setFps] = useState("1");

  const imageRef = useRef(null);
  const baseCanvasRef = useRef(null);
  const maskCanvasRef = useRef(null);
  const editorWrapRef = useRef(null);
  const imageStageRef = useRef(null);
  const isDrawingRef = useRef(false);
  const cropStartRef = useRef(null);
  const transformDragRef = useRef(null);

  const videoRef = useRef(null);
  const frameCanvasRef = useRef(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (videoUrl) URL.revokeObjectURL(videoUrl);
    };
  }, [videoUrl]);

  useEffect(() => {
    setPreviewUrl("");
    setVideoUrl("");
    setImageResultUrl("");
    setMaskResultUrl("");
    setVideoResultUrl("");
    setFrameResults([]);
    setPreviewItem(null);
    setCropRect(null);
    setMasking(false);
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setTrimStart("0");
    setTrimEnd("");
  }, [mode]);

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

  const drawBaseImage = (withMask = true) => {
    const img = imageRef.current;
    const canvas = baseCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!img || !canvas) return;

    // Limit canvas size to fit within modal (max 90vw x 65vh)
    const maxW = Math.min(window.innerWidth * 0.9 - 40, 1100);
    const maxH = window.innerHeight * 0.65;

    let targetW = img.width;
    let targetH = img.height;
    let dScale = 1;

    // Scale down if image is too large
    if (targetW > maxW) {
      dScale = maxW / targetW;
      targetH = targetH * dScale;
      targetW = maxW;
    }
    if (targetH > maxH) {
      const s2 = maxH / targetH;
      dScale = dScale * s2;
      targetW = targetW * s2;
      targetH = maxH;
    }

    targetW = Math.round(targetW);
    targetH = Math.round(targetH);
    setDisplayScale(dScale);

    canvas.width = targetW;
    canvas.height = targetH;
    if (withMask && maskCanvas) {
      maskCanvas.width = targetW;
      maskCanvas.height = targetH;
    }
    setCanvasSize({ w: targetW, h: targetH });

    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(targetW / 2, targetH / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.drawImage(img, -targetW / 2, -targetH / 2, targetW, targetH);
    if (withMask && maskCanvas) {
      resetMask();
    }
  };

  const handleWheel = (event) => {
    if (mode !== "image" || !previewUrl) return;
    event.preventDefault();
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    setScale((prev) => {
      const next = prev * delta;
      return Math.min(3, Math.max(0.2, Number(next.toFixed(3))));
    });
  };

  const handleTransformStart = (type, targetRef) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    const target = targetRef?.current || imageStageRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    transformDragRef.current = {
      type,
      targetRef,
      startScale: scale,
      startRotation: rotation,
      startPosition: { ...position },
      startX: event.clientX,
      startY: event.clientY,
      startAngle: Math.atan2(dy, dx),
      startDistance: Math.hypot(dx, dy) || 1,
    };
  };

  useEffect(() => {
    const handleMove = (event) => {
      const drag = transformDragRef.current;
      if (!drag) return;
      const target = drag.targetRef?.current || imageStageRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      if (drag.type === "scale") {
        const dist = Math.hypot(dx, dy) || 1;
        const next = (drag.startScale * dist) / drag.startDistance;
        const clamped = Math.min(3, Math.max(0.2, Number(next.toFixed(3))));
        setScale(clamped);
      } else if (drag.type === "rotate") {
        const angle = Math.atan2(dy, dx);
        const delta = ((angle - drag.startAngle) * 180) / Math.PI;
        setRotation(Math.round(drag.startRotation + delta));
      } else if (drag.type === "pan") {
        const panDx = event.clientX - drag.startX;
        const panDy = event.clientY - drag.startY;
        setPosition({
          x: drag.startPosition.x + panDx,
          y: drag.startPosition.y + panDy,
        });
      }
    };
    const handleUp = () => {
      transformDragRef.current = null;
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      drawBaseImage();
    }
    // 变换后遮罩失真，清空重新绘制
    if (maskCanvasRef.current) resetMask();
  }, [scale, rotation]);

  useEffect(() => {
    if (!previewUrl) return;
    if (!maskModalOpen && !cropModalOpen) return;
    // 等弹窗中的 canvas 完成挂载后再绘制
    const timer = window.requestAnimationFrame(() => {
      if (maskModalOpen) {
        drawBaseImage(true);
      } else if (cropModalOpen) {
        drawBaseImage(false);
      }
    });
    return () => window.cancelAnimationFrame(timer);
  }, [maskModalOpen, cropModalOpen, previewUrl]);

  const handleFileSelect = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      if (mode === "image") {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setVideoUrl("");
        const img = new Image();
        img.onload = () => {
          imageRef.current = img;
          setScale(1);
          setRotation(0);
          setCropRect(null);
          drawBaseImage();
        };
        img.src = url;
      } else {
        const url = URL.createObjectURL(file);
        setVideoUrl(url);
        setPreviewUrl("");
        setVideoResultUrl("");
        setFrameResults([]);
        setTrimStart("0");
      }
    } catch (error) {
      alert(error.message || "上传失败");
    } finally {
      setUploading(false);
    }
  };

  const handleVideoLoaded = () => {
    const video = videoRef.current;
    if (!video) return;
    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    setTrimEnd(duration ? duration.toFixed(1) : "");
  };

  const exportImage = () => {
    const canvas = baseCanvasRef.current;
    if (!canvas) return alert("请先上传图片");
    const url = canvas.toDataURL("image/png");
    setImageResultUrl(url);
  };

  const exportMask = () => {
    const canvas = maskCanvasRef.current;
    const img = imageRef.current;
    if (!canvas) return alert("请先上传图片");

    // Create final mask with black background (transparent -> black)
    const origW = img ? img.width : canvas.width;
    const origH = img ? img.height : canvas.height;
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = origW;
    finalCanvas.height = origH;
    const finalCtx = finalCanvas.getContext("2d");
    // Fill with black first (areas not painted)
    finalCtx.fillStyle = "#000";
    finalCtx.fillRect(0, 0, origW, origH);
    // Draw the mask (white painted areas) on top
    finalCtx.drawImage(canvas, 0, 0, origW, origH);
    const url = finalCanvas.toDataURL("image/png");

    setMaskResultUrl(url);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mask_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const applyCrop = () => {
    const rect = cropRect;
    const baseCanvas = baseCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!rect || !baseCanvas) return;
    const { x, y, w, h } = rect;
    if (w < 5 || h < 5) return;

    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = w;
    croppedCanvas.height = h;
    const ctx = croppedCanvas.getContext("2d");
    ctx.drawImage(baseCanvas, x, y, w, h, 0, 0, w, h);

    let maskCropped = null;
    if (maskCanvas) {
      maskCropped = document.createElement("canvas");
      maskCropped.width = w;
      maskCropped.height = h;
      const maskCtx = maskCropped.getContext("2d");
      maskCtx.drawImage(maskCanvas, x, y, w, h, 0, 0, w, h);
    }

    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      setPreviewUrl(img.src);
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
      setCropRect(null);
      baseCanvas.width = w;
      baseCanvas.height = h;
      if (maskCanvas) {
        maskCanvas.width = w;
        maskCanvas.height = h;
      }
      const baseCtx = baseCanvas.getContext("2d");
      baseCtx.drawImage(img, 0, 0);
      if (maskCanvas && maskCropped) {
        const finalMaskCtx = maskCanvas.getContext("2d");
        finalMaskCtx.drawImage(maskCropped, 0, 0);
      }
    };
    img.src = croppedCanvas.toDataURL("image/png");
  };

  const handlePointerDown = (event) => {
    if (!masking && !cropMode) return;
    if (transformDragRef.current) return;
    const canvas = baseCanvasRef.current;
    const wrapper = editorWrapRef.current;
    if (!canvas || !wrapper) return;
    const wrapRect = wrapper.getBoundingClientRect();
    const stageRect = canvas.getBoundingClientRect();
    const offsetX = stageRect.left - wrapRect.left + wrapper.scrollLeft;
    const offsetY = stageRect.top - wrapRect.top + wrapper.scrollTop;
    const x = event.clientX - wrapRect.left + wrapper.scrollLeft - offsetX;
    const y = event.clientY - wrapRect.top + wrapper.scrollTop - offsetY;

    if (masking) {
      isDrawingRef.current = true;
      const ctx = maskCanvasRef.current.getContext("2d");
      snapshotMask();
      ctx.strokeStyle = brushColor === "black" ? "#000" : "#fff";
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (cropMode) {
      cropStartRef.current = { x, y };
      setCropRect({ x, y, w: 0, h: 0 });
    }
  };

  const handlePointerMove = (event) => {
    const canvas = baseCanvasRef.current;
    const wrapper = editorWrapRef.current;
    if (!canvas || !wrapper) return;
    if (transformDragRef.current) return;
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

    if (cropMode && cropStartRef.current) {
      const start = cropStartRef.current;
      setCropRect({
        x: Math.min(start.x, x),
        y: Math.min(start.y, y),
        w: Math.abs(x - start.x),
        h: Math.abs(y - start.y),
      });
    }

    // 边缘自动滚动
    const edge = 60;
    const speed = 5;
    if (event.clientX - wrapRect.left < edge) wrapper.scrollLeft -= speed;
    if (wrapRect.right - event.clientX < edge) wrapper.scrollLeft += speed;
    if (event.clientY - wrapRect.top < edge) wrapper.scrollTop -= speed;
    if (wrapRect.bottom - event.clientY < edge) wrapper.scrollTop += speed;
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    cropStartRef.current = null;
  };

  const trimVideo = async () => {
    const video = videoRef.current;
    if (!video) return alert("请先上传视频");
    const start = Number(trimStart) || 0;
    const end = trimEnd ? Number(trimEnd) : video.duration;
    if (!Number.isFinite(end) || end <= start) {
      alert("裁剪范围不合法");
      return;
    }
    if (!video.captureStream) {
      alert("当前浏览器不支持视频裁剪");
      return;
    }
    setRendering(true);
    try {
      const stream = video.captureStream();
      const mimeType = MediaRecorder.isTypeSupported("video/mp4")
        ? "video/mp4"
        : "";
      if (!mimeType) {
        alert("当前浏览器不支持 MP4 导出");
        setRendering(false);
        return;
      }
      const recorder = new MediaRecorder(stream, { mimeType });
      const chunks = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      const recorded = new Promise((resolve) => {
        recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));
      });

      await new Promise((resolve) => {
        const handler = () => {
          video.removeEventListener("seeked", handler);
          resolve();
        };
        video.addEventListener("seeked", handler);
        video.currentTime = start;
      });

      recorder.start();
      await video.play();
      const stopTimer = setInterval(() => {
        if (video.currentTime >= end) {
          video.pause();
          recorder.stop();
          clearInterval(stopTimer);
        }
      }, 80);

      const blob = await recorded;
      const url = URL.createObjectURL(blob);
      setVideoResultUrl(url);
    } catch (error) {
      alert(error.message || "裁剪失败");
    } finally {
      setRendering(false);
    }
  };

  const extractFrames = async () => {
    const video = videoRef.current;
    if (!video) return alert("请先上传视频");
    const framesPerSec = Math.max(0.1, Number(fps) || 1);
    const interval = 1 / framesPerSec;
    const canvas = frameCanvasRef.current || document.createElement("canvas");
    frameCanvasRef.current = canvas;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    const results = [];
    setRendering(true);
    try {
      const duration = video.duration || 0;
      for (let t = 0; t <= duration; t += interval) {
        await new Promise((resolve) => {
          const handler = () => {
            video.removeEventListener("seeked", handler);
            resolve();
          };
          video.addEventListener("seeked", handler);
          video.currentTime = t;
        });
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        results.push(canvas.toDataURL("image/png"));
      }
      setFrameResults(results);
    } catch (error) {
      alert(error.message || "抽帧失败");
    } finally {
      setRendering(false);
    }
  };

  const currentImageSize = useMemo(() => {
    if (!imageRef.current || !previewUrl) return null;
    const w = imageRef.current.width;
    const h = imageRef.current.height;
    const rad = (rotation * Math.PI) / 180;
    const cos = Math.abs(Math.cos(rad));
    const sin = Math.abs(Math.sin(rad));
    const rotW = w * cos + h * sin;
    const rotH = w * sin + h * cos;
    return {
      w: Math.round(rotW * scale),
      h: Math.round(rotH * scale),
    };
  }, [previewUrl, scale, rotation, cropRect]);

  return (
    <div className="e-page">
      <div className="e-page-head">
        <div className="e-page-tabs">
          <button
            type="button"
            className={mode === "image" ? "active" : ""}
            onClick={() => setMode("image")}
          >
            图片预处理
          </button>
          <button
            type="button"
            className={mode === "video" ? "active" : ""}
            onClick={() => setMode("video")}
          >
            视频预处理
          </button>
        </div>
      </div>
      <div className="e-main">
        <EnhanceUploadPanel
          mode={mode}
          previewUrl={previewUrl}
          videoUrl={videoUrl}
          uploading={uploading}
          onFileSelect={handleFileSelect}
          videoRef={videoRef}
          onVideoLoaded={handleVideoLoaded}
          onPanStart={handleTransformStart("pan", imageStageRef)}
          onWheelZoom={handleWheel}
          imageStageRef={imageStageRef}
          scale={scale}
          rotation={rotation}
          position={position}
        />
        <EnhanceControls
          queueStatusText={queueStatusText}
          isImage={mode === "image"}
          brushSize={brushSize}
          onBrushSizeChange={setBrushSize}
          masking={masking}
          onToggleMasking={() => {
            if (!previewUrl) return alert("请先上传图片");
            setMaskModalOpen(true);
            setMasking(true);
            drawBaseImage(true);
          }}
          onUndoMask={undoMask}
          onRedoMask={redoMask}
          canUndoMask={maskUndoStack.length > 0}
          canRedoMask={maskRedoStack.length > 0}
          onClearMask={resetMask}
          cropMode={cropMode}
          onToggleCrop={() => {
            if (!previewUrl) return alert("请先上传图片");
            setCropModalOpen(true);
            setCropMode(true);
            drawBaseImage(false);
          }}
          onApplyCrop={() => {
            applyCrop();
            setCropModalOpen(false);
            setCropMode(false);
          }}
          scale={scale}
          rotation={rotation}
          onScaleChange={setScale}
          onRotationChange={setRotation}
          onResetTransform={() => {
            setScale(1);
            setRotation(0);
            setPosition({ x: 0, y: 0 });
          }}
          imageSize={currentImageSize}
          onExportImage={exportImage}
          onExportMask={exportMask}
          trimStart={trimStart}
          trimEnd={trimEnd}
          onTrimStartChange={setTrimStart}
          onTrimEndChange={setTrimEnd}
          onTrimVideo={trimVideo}
          fps={fps}
          onFpsChange={setFps}
          onExtractFrames={extractFrames}
          rendering={rendering}
        />
      </div>

      <EnhanceResultPanel
        mode={mode}
        imageResultUrl={imageResultUrl}
        maskResultUrl={maskResultUrl}
        videoResultUrl={videoResultUrl}
        frameResults={frameResults}
        loading={rendering}
        onOpenPreview={(url) =>
          setPreviewItem({
            images: [url || imageResultUrl].filter(Boolean),
          })
        }
      />

      <EnhanceLightbox item={previewItem} onClose={() => setPreviewItem(null)} />

      {maskModalOpen ? (
        <div className="e-modal">
          <div className="e-modal-card">
            <div className="e-modal-head">
              <span>涂抹遮罩</span>
              <button
                type="button"
                onClick={() => {
                  setMaskModalOpen(false);
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
                {cursorPos.visible ? (
                <div
                  className="e-brush-cursor"
                  style={{
                    width: brushSize,
                    height: brushSize,
                    left: cursorPos.x,
                    top: cursorPos.y,
                  }}
                />
                ) : null}
              </div>
              {cursorPos.visible ? (
                null
              ) : null}
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
              <button type="button" onClick={() => setMasking((prev) => !prev)}>
                {masking ? "停止涂抹" : "开始涂抹"}
              </button>
              <button type="button" onClick={exportMask} disabled={rendering}>
                导出遮罩
              </button>
              <button type="button" onClick={resetMask}>
                清空遮罩
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {cropModalOpen ? (
        <div className="e-modal">
          <div className="e-modal-card">
            <div className="e-modal-head">
              <span>图片裁剪</span>
              <button
                type="button"
                onClick={() => {
                  setCropModalOpen(false);
                  setCropMode(false);
                  setCropRect(null);
                }}
              >
                关闭
              </button>
            </div>
            <div
              className="e-canvas-wrap is-crop"
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
                {cropRect ? (
                  <div
                    className="e-crop-rect"
                    style={{
                      left: `${(cropRect.x / baseCanvasRef.current?.width) * 100 || 0}%`,
                      top: `${(cropRect.y / baseCanvasRef.current?.height) * 100 || 0}%`,
                      width: `${(cropRect.w / baseCanvasRef.current?.width) * 100 || 0}%`,
                      height: `${(cropRect.h / baseCanvasRef.current?.height) * 100 || 0}%`,
                    }}
                  />
                ) : null}
              </div>
              {cropRect ? (
                null
              ) : null}
            </div>
            <div className="e-modal-actions">
              <button
                type="button"
                onClick={() => {
                  applyCrop();
                  setCropModalOpen(false);
                  setCropMode(false);
                }}
              >
                应用裁剪
              </button>
              <button type="button" onClick={() => setCropRect(null)}>
                清除选区
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EnhancePage;

