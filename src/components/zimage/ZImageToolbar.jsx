const ZImageToolbar = ({
  prompt,
  onPromptChange,
  width,
  height,
  onWidthChange,
  onHeightChange,
  engine,
  onEngineChange,
  modelVersion,
  modelOptions,
  onModelVersionChange,
  loading,
  onRender,
  queueStatusText,
}) => {
  return (
    <section className="z-console">
      <div className="z-console-head">
        <span>Unified Art Console</span>
        <span className="z-status">{queueStatusText}</span>
      </div>

      <div className="z-prompt-wrap">
        <div className="z-model-select">
          <div className="z-model-label">MODEL</div>
          <select
            value={modelVersion}
            onChange={(e) => onModelVersionChange?.(e.target.value)}
            aria-label="模型版本"
          >
            {(modelOptions || []).map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
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
              onClick={() => onEngineChange("local")}
            >
              Local
            </button>
            <button
              type="button"
              className={engine === "cloud" ? "active" : ""}
              onClick={() => onEngineChange("cloud")}
            >
              Cloud
            </button>
          </div>

          <div className="z-dimensions">
            <input
              type="number"
              value={width}
              onChange={(event) => onWidthChange(event.target.value)}
            />
            <span>x</span>
            <input
              type="number"
              value={height}
              onChange={(event) => onHeightChange(event.target.value)}
            />
          </div>
        </div>

        <button type="button" className="z-render-btn" onClick={onRender} disabled={loading}>
          {loading ? "Processing..." : `Render Art (${engine.toUpperCase()})`}
        </button>
      </div>
    </section>
  );
};

export default ZImageToolbar;

