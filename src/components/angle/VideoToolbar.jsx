const VideoToolbar = ({
  feature,
  prompt,
  onPromptChange,
  engine,
  onEngineChange,
  loading,
  onRender,
  queueStatusText,
  t2vLocalModel,
  t2vLocalSize,
  onT2vLocalSizeChange,
  t2vLocalFrames,
  onT2vLocalFramesChange,
  t2vLocalFps,
  onT2vLocalFpsChange,
  t2vCloudModel,
  onT2vCloudModelChange,
  t2vCloudRatio,
  onT2vCloudRatioChange,
  t2vCloudResolution,
  onT2vCloudResolutionChange,
  t2vCloudDuration,
  onT2vCloudDurationChange,
  t2vCloudModelOptions = [],
  aspectRatioOptions = [],
  resolutionOptions = [],
  durationOptions = [],
}) => {
  const isT2V = feature === "文生视频";

  const renderT2VOptions = () => {
    if (!isT2V) return null;

    if (engine === "local") {
      const parts = (t2vLocalSize || "").split("x").map((n) => n.trim());
      const width = parts[0] ?? "";
      const height = parts[1] ?? "";
      const setSize = (newW, newH) => onT2vLocalSizeChange?.(`${newW}x${newH}`);

      return (
        <div className="k-options-row">
          <div className="k-model-select">
            <div className="k-model-label">MODEL</div>
            <select value={t2vLocalModel} disabled aria-label="本地模型">
              <option value={t2vLocalModel}>{t2vLocalModel}</option>
            </select>
          </div>
          <div className="k-model-select k-model-select--input">
            <div className="k-model-label">尺寸</div>
            <div className="k-size-inputs">
              <input
                type="number"
                value={width}
                onChange={(e) => setSize(e.target.value, height)}
                min={1}
                aria-label="宽"
              />
              <span>×</span>
              <input
                type="number"
                value={height}
                onChange={(e) => setSize(width, e.target.value)}
                min={1}
                aria-label="高"
              />
            </div>
          </div>
          <div className="k-model-select k-model-select--input">
            <div className="k-model-label">帧数</div>
            <input
              type="number"
              className="k-size-input k-size-input--short"
              value={t2vLocalFrames ?? ""}
              onChange={(e) => onT2vLocalFramesChange?.(e.target.value)}
              min={1}
              aria-label="帧数"
            />
          </div>
          <div className="k-model-select k-model-select--input">
            <div className="k-model-label">帧率</div>
            <input
              type="number"
              className="k-size-input k-size-input--short"
              value={t2vLocalFps ?? ""}
              onChange={(e) => onT2vLocalFpsChange?.(e.target.value)}
              min={1}
              aria-label="帧率"
            />
          </div>
        </div>
      );
    }

    if (engine === "cloud") {
      return (
        <div className="k-options-row">
          <div className="k-model-select">
            <div className="k-model-label">MODEL</div>
            <select
              value={t2vCloudModel ?? ""}
              onChange={(e) => onT2vCloudModelChange?.(e.target.value)}
              aria-label="云模型"
            >
              {(t2vCloudModelOptions || []).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="k-model-select">
            <div className="k-model-label">宽高比</div>
            <select
              value={t2vCloudRatio ?? ""}
              onChange={(e) => onT2vCloudRatioChange?.(e.target.value)}
              aria-label="宽高比"
            >
              {(aspectRatioOptions || []).map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="k-model-select">
            <div className="k-model-label">分辨率</div>
            <select
              value={t2vCloudResolution ?? ""}
              onChange={(e) => onT2vCloudResolutionChange?.(e.target.value)}
              aria-label="分辨率"
            >
              {(resolutionOptions || []).map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="k-model-select">
            <div className="k-model-label">秒数</div>
            <select
              value={t2vCloudDuration ?? ""}
              onChange={(e) => onT2vCloudDurationChange?.(Number(e.target.value))}
              aria-label="秒数"
            >
              {(durationOptions || []).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="z-console">
      <div className="z-console-head">
        <span>Video Console · {feature}</span>
        <span className="z-status">{queueStatusText}</span>
      </div>

      <div className="z-prompt-wrap">
        {renderT2VOptions()}
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange?.(e.target.value)}
          rows={2}
          placeholder="Describe your vision..."
        />
      </div>

      <div className="z-console-foot">
        <div className="z-controls">
          <div className="z-engine">
            <button
              type="button"
              className={engine === "local" ? "active" : ""}
              onClick={() => onEngineChange?.("local")}
            >
              Local
            </button>
            <button
              type="button"
              className={engine === "cloud" ? "active" : ""}
              onClick={() => onEngineChange?.("cloud")}
            >
              Cloud
            </button>
          </div>
        </div>

        <button type="button" className="z-render-btn" onClick={onRender} disabled={loading}>
          {loading ? "Processing..." : `Render Art (${engine?.toUpperCase() ?? "LOCAL"})`}
        </button>
      </div>
    </section>
  );
};

export default VideoToolbar;
