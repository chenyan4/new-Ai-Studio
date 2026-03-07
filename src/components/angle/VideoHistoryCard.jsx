import { useEffect, useState } from "react";

const isVideoUrl = (url, type) =>
  !url ? false : type === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(String(url));

const MODEL_BADGE_LABELS = {
  "veo3.1-fast": "veo 3.1 Fast",
  "doubao-seedance-1-5-pro-251215": "seedance 1.5 Pro",
  "Wan2.2 Vace": "Wan 2.2 Vace",
};

const getModelBadgeLabel = (item) => {
  const model = item?.params?.model_select;
  if (model && MODEL_BADGE_LABELS[model]) return MODEL_BADGE_LABELS[model];
  if (model) return model;
  return item?.type === "cloud" ? "Cloud" : "视频";
};

const VideoHistoryCard = ({ item, onOpen, onDelete }) => {
  const [mediaLabel, setMediaLabel] = useState("");
  const rawUrl = item.images?.[0] ?? item.video_url ?? item.videos?.[0] ?? null;
  const isVideo = isVideoUrl(rawUrl, item.type);
  const imageUrl = isVideo ? null : rawUrl;
  const videoUrl = isVideo ? rawUrl : (item.video_url ?? item.videos?.[0] ?? null);
  const promptText = (item?.prompt || "").trim();

  useEffect(() => {
    if (videoUrl || isVideo) setMediaLabel("视频");
    else if (imageUrl) setMediaLabel("封面");
    else setMediaLabel("");
  }, [imageUrl, videoUrl, isVideo]);

  const badgeLabel = getModelBadgeLabel(item);

  return (
    <div
      className="k-history-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={item.prompt || "history"} loading="lazy" />
      ) : videoUrl ? (
        <video
          src={videoUrl}
          muted
          preload="metadata"
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio: "1 / 1" }}
        />
      ) : (
        <div className="k-card-empty">无预览</div>
      )}
      <span className="k-card-badge">{badgeLabel}</span>
      {(mediaLabel || promptText) && (
        <div className="k-card-meta">
          {mediaLabel && <div className="k-card-meta-size">{mediaLabel}</div>}
          {promptText && <div className="k-card-meta-prompt">{promptText}</div>}
        </div>
      )}
      <button
        type="button"
        className="k-history-delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.timestamp);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default VideoHistoryCard;
