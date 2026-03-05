const EnhanceControls = ({
  queueStatusText,
  isImage,
  // image tools
  brushSize,
  onBrushSizeChange,
  masking,
  onToggleMasking,
  onClearMask,
  onUndoMask,
  onRedoMask,
  canUndoMask,
  canRedoMask,
  cropMode,
  onToggleCrop,
  onApplyCrop,
  scale,
  rotation,
  onScaleChange,
  onRotationChange,
  onResetTransform,
  imageSize,
  onExportImage,
  onExportMask,
  // video tools
  trimStart,
  trimEnd,
  onTrimStartChange,
  onTrimEndChange,
  onTrimVideo,
  fps,
  onFpsChange,
  onExtractFrames,
  rendering,
}) => {
  return (
    <div className="e-controls">
      <div className="e-controls-top">
        <span>Preprocess Console</span>
        <span className="e-status">{queueStatusText}</span>
      </div>

      {isImage ? (
        <>
          <div className="e-row">
            <label>当前尺寸</label>
            <div className="e-inline">
              <span style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>
                {imageSize ? `${imageSize.w} × ${imageSize.h} px` : "--"}
              </span>
            </div>
          </div>

          <div className="e-row">
            <label>涂抹遮罩</label>
            <div className="e-inline">
              <button type="button" className="e-generate-btn" onClick={onToggleMasking}>
                打开遮罩弹窗
              </button>
            </div>
          </div>

          <div className="e-row" style={{ alignItems: "flex-start" }}>
            <label style={{ marginTop: "4px" }}>缩放与旋转</label>
            <div className="e-col">
              <div className="e-slider-wrap">
                <span>缩放 ({scale.toFixed(2)}x)</span>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.01"
                  value={scale}
                  onChange={(e) => onScaleChange(Number(e.target.value))}
                />
              </div>
              <div className="e-slider-wrap">
                <span>旋转 ({rotation}°)</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={rotation}
                  onChange={(e) => onRotationChange(Number(e.target.value))}
                />
                <button
                  type="button"
                  onClick={onResetTransform}
                  style={{
                    marginLeft: 8,
                    padding: "4px 10px",
                    fontSize: 12,
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  重置
                </button>
              </div>
            </div>
          </div>

          <div className="e-row">
            <label>裁剪</label>
            <div className="e-inline">
              <button type="button" className="e-generate-btn" onClick={onToggleCrop}>
                打开裁剪弹窗
              </button>
            </div>
          </div>

          <div className="e-row">
            <label>导出</label>
            <div className="e-inline">
              <button type="button" className="e-generate-btn" onClick={onExportImage} disabled={rendering}>
                导出图片
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="e-row">
            <label>分段裁剪</label>
            <div className="e-inline">
              <input
                type="number"
                className="e-num-input"
                min="0"
                step="0.1"
                value={trimStart}
                onChange={(event) => onTrimStartChange(event.target.value)}
              />
              <span>~</span>
              <input
                type="number"
                className="e-num-input"
                min="0"
                step="0.1"
                value={trimEnd}
                onChange={(event) => onTrimEndChange(event.target.value)}
              />
              <button type="button" className="e-action-btn" onClick={onTrimVideo} disabled={rendering}>
                裁剪并导出
              </button>
            </div>
          </div>

          <div className="e-row">
            <label>帧分离</label>
            <div className="e-inline">
              <input
                type="number"
                className="e-num-input"
                min="0.1"
                step="0.1"
                value={fps}
                onChange={(event) => onFpsChange(event.target.value)}
              />
              <span>帧/秒</span>
              <button type="button" className="e-action-btn" onClick={onExtractFrames} disabled={rendering}>
                抽帧导出
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnhanceControls;

