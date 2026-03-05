import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

const AngleUploadPanel = ({ previewUrl, onSelectFile }) => {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onSelectFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="a-upload-section">
      <h3 className="a-section-title">01. Input Source</h3>
      <div
        className={`a-upload-dropzone ${isDragOver ? "drag-over" : ""} ${previewUrl ? "has-preview" : ""}`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => onSelectFile(e.target.files?.[0])}
        />

        {previewUrl && (
          <img src={previewUrl} alt="preview" className="a-upload-img" />
        )}

        <div className={`a-upload-hint ${previewUrl ? "a-upload-hint--over" : ""}`}>
          <div className="a-upload-icon-box">
            <UploadCloud size={20} />
          </div>
          <p>{previewUrl ? "Click or drop to replace" : "Drop image here"}</p>
        </div>
      </div>
    </div>
  );
};

export default AngleUploadPanel;
