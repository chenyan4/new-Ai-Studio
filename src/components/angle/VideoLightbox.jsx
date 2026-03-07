import { useState, useCallback } from "react";

const isVideoMedia = (url, type) =>
  url && (type === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(String(url)));

const VideoLightbox = ({ item, onClose, onReplicate }) => {
  const [videoSize, setVideoSize] = useState({ w: 0, h: 0 });

  const mediaUrl = item?.images?.[0] ?? item?.video_url ?? item?.videos?.[0];
  const imageUrl = isVideoMedia(mediaUrl, item?.type) ? null : mediaUrl;
  const videoUrl = isVideoMedia(mediaUrl, item?.type) ? mediaUrl : (item?.video_url ?? item?.videos?.[0]);

  const onVideoLoadedMetadata = useCallback((e) => {
    const v = e.target;
    if (v.videoWidth && v.videoHeight) setVideoSize({ w: v.videoWidth, h: v.videoHeight });
  }, []);

  if (!item) return null;

  const { w, h } = videoSize;
  const aspectRatio = w && h ? w / h : 16 / 9;
  const maxW = typeof window !== "undefined" ? Math.min(900, window.innerWidth * 0.9) : 900;
  const maxH = typeof window !== "undefined" ? window.innerHeight * 0.8 : 0.8 * 600;
  let fitW = maxW;
  let fitH = maxW / aspectRatio;
  if (fitH > maxH) {
    fitH = maxH;
    fitW = maxH * aspectRatio;
  }

  return (
    <div className="k-lightbox-mask" onClick={onClose}>
      <div
        className="k-lightbox-card k-lightbox-card--video"
        onClick={(e) => e.stopPropagation()}
        style={
          videoUrl && w && h
            ? { width: fitW, maxWidth: "90vw", maxHeight: "80vh" }
            : undefined
        }
      >
        <button type="button" className="k-lightbox-close" onClick={onClose}>
          ×
        </button>
        {videoUrl ? (
          <div
            className="k-lightbox-video-wrap"
            style={
              w && h
                ? { width: fitW, height: fitH, maxWidth: "90vw", maxHeight: "80vh" }
                : { maxWidth: "100%", maxHeight: "80vh" }
            }
          >
            <video
              src={videoUrl}
              poster={imageUrl}
              controls
              autoPlay
              onLoadedMetadata={onVideoLoadedMetadata}
              style={{
                width: w && h ? fitW : "100%",
                height: w && h ? fitH : "auto",
                maxWidth: "100%",
                maxHeight: "80vh",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        ) : (
          mediaUrl && <img src={mediaUrl} alt={item.prompt || "preview"} /> 
        )}
        <div className="k-lightbox-foot">
          <p>{item.prompt || "-"}</p>
          <div className="k-lightbox-btns">
            {videoUrl && (
              <a
                href={videoUrl}
                download={`video-${item.timestamp || Date.now()}.mp4`}
              >
                下载
              </a>
            )}
            {onReplicate && (
              <button type="button" onClick={() => onReplicate(item.prompt || "")}>
                做同款
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
