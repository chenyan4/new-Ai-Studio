const KleinLightbox = ({ item, onClose, onApplySameStyle }) => {
  if (!item) return null;

  const imgUrl = item.images?.[0];

  return (
    <div className="k-lightbox-mask" onClick={onClose}>
      <div className="k-lightbox-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="k-lightbox-close" onClick={onClose}>
          ×
        </button>
        <img src={imgUrl} alt={item.prompt || "preview"} />
        <div className="k-lightbox-foot">
          <p>{item.prompt || "-"}</p>
          {onApplySameStyle && (
            <div className="k-lightbox-btns">
              <button type="button" onClick={() => onApplySameStyle(item)}>
                做同款
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KleinLightbox;

