const SIZE_MODE_OPTIONS = [
  { label: "Match Image_1 (Smart Crop)", value: "Match Image_1 (Smart Crop)" },
  { label: "Keep Model Output", value: "Keep Model Output" },
  { label: "Custom Size", value: "Custom Size" },
];

const KleinControls = ({
  prompt,
  onPromptChange,
  modelVersion,
  modelOptions,
  onModelVersionChange,
  sizeMode,
  onSizeModeChange,
  customWidth,
  customHeight,
  onCustomWidthChange,
  onCustomHeightChange,
  rendering,
  onGenerate,
  extraOptions,
  belowOptions,
}) => {
  const optionsRowClass = belowOptions ? "k-options-row k-options-row-primary" : "k-options-row";
  return (
    <div className="k-controls">
      <div className="k-prompt-wrap">
        <textarea
          rows={3}
          placeholder="Describe your vision..."
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
        />
        <div className={optionsRowClass}>
          <div className="k-model-select">
            <div className="k-model-label">MODEL</div>
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
          <div className="k-model-select">
            <div className="k-model-label">SIZE</div>
            <select
              value={sizeMode}
              onChange={(e) => onSizeModeChange?.(e.target.value)}
              aria-label="尺寸模式"
            >
              {SIZE_MODE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {sizeMode === "Custom Size" && (
            <div className="k-size-inputs">
              <input
                type="number"
                value={customWidth}
                onChange={(e) => onCustomWidthChange?.(Number(e.target.value))}
                placeholder="宽"
                min={64}
                max={4096}
              />
              <span>×</span>
              <input
                type="number"
                value={customHeight}
                onChange={(e) => onCustomHeightChange?.(Number(e.target.value))}
                placeholder="高"
                min={64}
                max={4096}
              />
            </div>
          )}
          {extraOptions}
        </div>
        {belowOptions && (
          <div className="k-options-row-secondary">
            {belowOptions}
          </div>
        )}
      </div>
      <div className="k-controls-foot">
        <span className="k-cloud-badge">Cloud</span>
        <button className="k-generate-btn" type="button" onClick={onGenerate} disabled={rendering}>
          {rendering ? "Synthesizing..." : "Execute Synthesis"}
        </button>
      </div>
    </div>
  );
};

export default KleinControls;

