import { useRef, useMemo, useState, useEffect } from "react";

const EnhanceUploadPanel = ({
  mode,
  previewUrl,
  videoUrl,
  uploading,
  onFileSelect,
  children,
  videoRef,
  onVideoLoaded,
  onPanStart,
  onWheelZoom,
  imageStageRef,
  scale,
  rotation,
  position,
}) => {
  const inputRef = useRef(null);
  const isImage = mode === "image";
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!previewUrl) {
      setNaturalSize({ w: 0, h: 0 });
    }
  }, [previewUrl]);

  const handleImageLoad = (e) => {
    const img = e.target;
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
  };

  const stageSize = useMemo(() => {
    if (!naturalSize.w || !naturalSize.h) return null;
    const baseW = Math.min(naturalSize.w, 400);
    const baseH = (baseW / naturalSize.w) * naturalSize.h;
    const limitedH = Math.min(baseH, 350);
    const finalW = limitedH < baseH ? (limitedH / naturalSize.h) * naturalSize.w : baseW;
    const finalH = limitedH < baseH ? limitedH : baseH;

    const rad = (rotation * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const absCos = Math.abs(cos);
    const absSin = Math.abs(sin);
    const rotW = finalW * absCos + finalH * absSin;
    const rotH = finalW * absSin + finalH * absCos;
    const scaledW = rotW * scale;
    const scaledH = rotH * scale;

    const w = (finalW * scale) / 2;
    const h = (finalH * scale) / 2;

    const cx = scaledW / 2;
    const cy = scaledH / 2;

    return {
      w: Math.ceil(scaledW),
      h: Math.ceil(scaledH),
      tl: {
        x: cx + (-w * cos + h * sin),
        y: cy + (-w * sin - h * cos),
      },
      tr: {
        x: cx + (w * cos + h * sin),
        y: cy + (w * sin - h * cos),
      },
    };
  }, [naturalSize, scale, rotation]);

  const handlePick = (event) => {
    if (event?.target?.closest?.(".e-transform-handles") || event?.target?.closest?.(".e-image-stage")) return;
    inputRef.current?.click();
  };
  return (
    <div className="e-upload-panel">
      <div
        className={`e-upload-dropzone ${children || previewUrl || videoUrl ? "has-editor" : ""}`}
        onClick={!(children || previewUrl || videoUrl) ? handlePick : undefined}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => event.key === "Enter" && !(children || previewUrl || videoUrl) && handlePick(event)}
      >
        {children ? (
          children
        ) : isImage && previewUrl ? (
          <div
            className="e-image-stage"
            ref={imageStageRef}
            style={
              stageSize
                ? {
                    width: stageSize.w,
                    height: stageSize.h,
                    transform: `translate(${position?.x || 0}px, ${position?.y || 0}px)`,
                  }
                : { transform: `translate(${position?.x || 0}px, ${position?.y || 0}px)` }
            }
            onPointerDown={(e) => {
              // 只在没有点击按柄时触发拖拽
              if (!e.target.closest(".e-handle")) {
                onPanStart?.(e);
              }
            }}
            onWheel={onWheelZoom}
          >
            <img
              src={previewUrl}
              alt="uploaded"
              onLoad={handleImageLoad}
              style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
            />
          </div>
        ) : !isImage && videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            className="e-upload-video"
            onLoadedMetadata={onVideoLoaded}
          />
        ) : (
          <div className="e-upload-placeholder">
            <p>{isImage ? "点击上传或拖拽图片" : "点击上传或拖拽视频"}</p>
            <span>{isImage ? "支持常见图片格式" : "支持常见视频格式"}</span>
          </div>
        )}
        {children || previewUrl || videoUrl ? (
          <button
            type="button"
            className="e-upload-change"
            onClick={(event) => {
              event.stopPropagation();
              handlePick();
            }}
          >
            更换文件
          </button>
        ) : null}
        <input
          ref={inputRef}
          type="file"
          accept={isImage ? "image/*" : "video/*"}
          onChange={(event) => onFileSelect(event.target.files?.[0])}
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default EnhanceUploadPanel;

