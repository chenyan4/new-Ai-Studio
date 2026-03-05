const EnhanceResultPanel = ({
  mode,
  imageResultUrl,
  maskResultUrl,
  videoResultUrl,
  frameResults,
  loading,
  onOpenPreview,
}) => {
  const isImage = mode === "image";
  return (
    <div className="e-result-panel">
      {loading ? (
        <div className="e-loading">处理中...</div>
      ) : isImage ? (
        imageResultUrl ? (
          <div className="e-result-wrap">
            <img src={imageResultUrl} alt="result" onClick={onOpenPreview} />
            <div className="e-result-actions">
              <a href={imageResultUrl} download className="e-download-btn">
                下载图片
              </a>
              {maskResultUrl ? (
                <a href={maskResultUrl} download className="e-download-btn ghost">
                  下载遮罩
                </a>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="e-empty">上传图片后开始预处理</div>
        )
      ) : videoResultUrl || (frameResults && frameResults.length > 0) ? (
        <div className="e-result-wrap">
          {videoResultUrl ? (
            <div className="e-result-video-wrap">
              <video src={videoResultUrl} controls className="e-result-video" />
              <a href={videoResultUrl} download="trimmed_video.mp4" className="e-video-download" onClick={(e) => e.stopPropagation()}>
                save
              </a>
            </div>
          ) : null}
          {frameResults && frameResults.length > 0 ? (
            <div className="e-frames">
              {frameResults.map((url, idx) => (
                <div key={`${url}-${idx}`} className="e-frame-item">
                  <img src={url} alt={`frame-${idx + 1}`} onClick={() => onOpenPreview(url)} />
                  <a href={url} download={`frame_${idx + 1}.png`} className="e-frame-download" onClick={(e) => e.stopPropagation()}>
                    save
                  </a>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="e-empty">上传视频后开始预处理</div>
      )}
    </div>
  );
};

export default EnhanceResultPanel;

