import { useEffect, useState } from "react";

const ZImageHistoryCard = ({ item, onOpen, onDelete }) => {
  const [imageSize, setImageSize] = useState(null);
  const imageUrl = item.images?.[0];
  const width = item?.params?.width;
  const height = item?.params?.height;
  const promptText = (item?.prompt || "").trim();

  useEffect(() => {
    if (typeof width === "number" && typeof height === "number") {
      setImageSize(`${width}×${height}`);
      return;
    }
    if (!imageUrl) return;
    const img = new Image();
    img.onload = () => {
      setImageSize(`${img.naturalWidth}×${img.naturalHeight}`);
    };
    img.src = imageUrl;
  }, [imageUrl, width, height]);

  return (
    <div className="z-card" onClick={() => onOpen(item)} onKeyDown={(e) => e.key === "Enter" && onOpen(item)} role="button" tabIndex={0}>
      {imageUrl ? <img src={imageUrl} alt={item.prompt || "history"} loading="lazy" /> : <div className="z-card-empty">No Image</div>}
      {item.type === "cloud" ? <span className="z-card-badge">Cloud</span> : <span className="z-card-badge z-card-badge-local">Local</span>}
      {(imageSize || promptText) ? (
        <div className="z-card-meta" aria-hidden="true">
          {imageSize ? <div className="z-card-meta-size">{imageSize}</div> : null}
          {promptText ? <div className="z-card-meta-prompt">{promptText}</div> : null}
        </div>
      ) : null}
      <button
        type="button"
        className="z-card-delete"
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

export default ZImageHistoryCard;

