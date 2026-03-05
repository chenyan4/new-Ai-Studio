import React from "react";
import {
  RotateCw,
  MoveHorizontal,
  MoveVertical,
  ZoomIn,
  TextQuote,
  Zap,
} from "lucide-react";
import AngleThreeView from "./AngleThreeView";

const MODEL_OPTIONS = [
  { label: "Qwen Edit 2511", value: "qwen_edit_2511" },
];

const AngleControls = ({
  prompt,
  onPromptChange,
  rotateH,
  rotateV,
  distance,
  onRotateHChange,
  onRotateVChange,
  onDistanceChange,
  onGenerate,
  rendering,
  previewUrl,
  modelVersion,
  onModelChange,
}) => {
  const resetControl = (type) => {
    if (type === "h") onRotateHChange(0);
    if (type === "v") onRotateVChange(0);
    if (type === "d") onDistanceChange(4.0);
  };

  return (
    <div className="a-controls-container">
      {/* 3D Viewer & Sliders */}
      <div className="a-camera-section">
        <h3 className="a-section-title">02. Camera Control</h3>
        <div className="a-camera-panel">
          <div className="a-three-view-wrapper">
            <AngleThreeView
              previewUrl={previewUrl}
              rotateH={rotateH}
              rotateV={rotateV}
              distance={distance}
            />
          </div>
          <div className="a-camera-sliders">
            {/* Horizontal */}
            <div className="a-slider-group">
              <div className="a-slider-header">
                <div className="a-slider-label">
                  <MoveHorizontal size={12} />
                  <span>Rotation</span>
                </div>
                <div className="a-slider-actions">
                  <button onClick={() => resetControl("h")} title="Reset">
                    <RotateCw size={12} />
                  </button>
                  <div className="a-val-box">
                    <input
                      type="number"
                      value={rotateH}
                      onChange={(e) => onRotateHChange(Number(e.target.value))}
                    />
                    <span>°</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="-90"
                max="90"
                value={rotateH}
                onChange={(e) => onRotateHChange(Number(e.target.value))}
              />
            </div>

            {/* Vertical */}
            <div className="a-slider-group">
              <div className="a-slider-header">
                <div className="a-slider-label">
                  <MoveVertical size={12} />
                  <span>Pitch</span>
                </div>
                <div className="a-slider-actions">
                  <button onClick={() => resetControl("v")} title="Reset">
                    <RotateCw size={12} />
                  </button>
                  <div className="a-val-box">
                    <input
                      type="number"
                      value={rotateV}
                      onChange={(e) => onRotateVChange(Number(e.target.value))}
                    />
                    <span>°</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="-90"
                max="90"
                value={rotateV}
                onChange={(e) => onRotateVChange(Number(e.target.value))}
              />
            </div>

            {/* Distance */}
            <div className="a-slider-group">
              <div className="a-slider-header">
                <div className="a-slider-label">
                  <ZoomIn size={12} />
                  <span>Distance</span>
                </div>
                <div className="a-slider-actions">
                  <button onClick={() => resetControl("d")} title="Reset">
                    <RotateCw size={12} />
                  </button>
                  <div className="a-val-box">
                    <input
                      type="number"
                      step="0.1"
                      value={distance}
                      onChange={(e) => onDistanceChange(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0.1"
                max="8"
                step="0.1"
                value={distance}
                onChange={(e) => onDistanceChange(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Parameters & Engine */}
      <div className="a-params-section">
        <h3 className="a-section-title">03. Parameters</h3>
        <div className="a-prompt-box">
          <div className="a-prompt-header">
            <TextQuote size={12} />
            <span>Prompt</span>
          </div>
          <textarea
            className="a-prompt-textarea"
            placeholder="请通过右侧控制器调整，或输入提示词"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
          />
          <div className="k-options-row">
            <div className="k-model-select">
              <div className="k-model-label">MODEL</div>
              <select
                value={modelVersion}
                onChange={(e) => onModelChange(e.target.value)}
              >
                {MODEL_OPTIONS.map((opt) => (
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
        </div>

        <button
          className="a-generate-btn"
          onClick={onGenerate}
          disabled={rendering}
        >
          <Zap size={16} className={`text-yellow-400 ${rendering ? "animate-pulse" : ""}`} />
          <span>{rendering ? "Processing..." : "Generate New Angle"}</span>
        </button>
      </div>
    </div>
  );
};

export default AngleControls;
