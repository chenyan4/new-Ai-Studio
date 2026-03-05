import { useEffect, useState } from "react";

const MODEL_LABELS = {
  "gemini-3.1-flash-image-preview": "Gemini 3.1 Pro",
  "gemini-3-pro-image-preview": "Gemini 3 Pro",
  "nano-banana-2-4k": "Nano Banana 2",
  "gpt-4o-image":"GPT-4o-Image",
};

const KleinHistoryCard = ({ item, onOpen, onDelete }) => {
  const [imageSize, setImageSize] = useState(null);
  const imageUrl = item.images?.[0];
  const modelKey = item.model || item.params?.model;
  const modelLabel = MODEL_LABELS[modelKey] || modelKey || "Cloud";
  const promptText = (item.prompt || "").trim();

  useEffect(() => {
    if (!imageUrl) return;
    const width = item.size?.width || item.params?.width;
    const height = item.size?.height || item.params?.height;
    if (width && height) {
      setImageSize(`${width}×${height}`);
      return;
    }
    const img = new Image();
    img.onload = () => {
      setImageSize(`${img.naturalWidth}×${img.naturalHeight}`);
    };
    img.src = imageUrl;
  }, [imageUrl, item.size, item.params]);

  return (
    <div
      className="k-history-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(event) => event.key === "Enter" && onOpen(item)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={item.prompt || "klein"} loading="lazy" />
      ) : (
        <div className="k-card-empty">No Image</div>
      )}
      <span className="k-card-badge">{modelLabel}</span>
      {(imageSize || promptText) && (
        <div className="k-card-meta">
          {imageSize && <div className="k-card-meta-size">{imageSize}</div>}
          {promptText && <div className="k-card-meta-prompt">{promptText}</div>}
        </div>
      )}
      <button
        type="button"
        className="k-history-delete"
        onClick={(event) => {
          event.stopPropagation();
          onDelete(item.timestamp);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const KleinHistoryGrid = ({ items, onOpen, onDelete, onLoadMore, hasMore, loading }) => {
  return (
    <div className="k-history-wrap">
      <div className="k-history-grid">
        {items.map((item) => (
          <KleinHistoryCard
            key={item.timestamp}
            item={item}
            onOpen={onOpen}
            onDelete={onDelete}
          />
        ))}
      </div>
      {hasMore ? (
        <div className="k-load-more-wrap">
          <button type="button" className="k-load-more" onClick={onLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More Archive"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default KleinHistoryGrid;

