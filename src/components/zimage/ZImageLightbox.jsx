const ZImageLightbox = ({ item, onClose, onReplicate }) => {
  if (!item) return null;

  const imageUrl = item.images?.[0];

  return (
    <div className="z-lightbox-mask" onClick={onClose}>
      <div className="z-lightbox-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="z-lightbox-close" onClick={onClose}>
          x
        </button>
        <img src={imageUrl} alt={item.prompt || "preview"} />
        <div className="z-lightbox-foot">
          <p>{item.prompt || "-"}</p>
          <button type="button" onClick={() => onReplicate(item.prompt || "")}>
            做同款
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZImageLightbox;

