import { useMemo, useState } from "react";

const EnhanceLightbox = ({ item, onClose }) => {
  const [compare, setCompare] = useState(50);
  const originalUrl = useMemo(() => {
    const inputImage = item?.params?.["15"]?.image;
    if (!inputImage) return "";
    return `/api/view?filename=${encodeURIComponent(inputImage)}&type=input`;
  }, [item]);

  if (!item) return null;

  return (
    <div className="e-lightbox-mask" onClick={onClose}>
      <div className="e-lightbox-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="e-lightbox-close" onClick={onClose}>
          x
        </button>

        {originalUrl ? (
          <div className="e-compare-wrap">
            <img src={item.images?.[0]} alt="generated" className="e-compare-base" />
            <div className="e-compare-overlay" style={{ width: `${compare}%` }}>
              <img src={originalUrl} alt="original" />
            </div>
            <input
              className="e-compare-slider"
              type="range"
              min="0"
              max="100"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
            />
          </div>
        ) : (
          <img src={item.images?.[0]} alt="result" className="e-single-preview" />
        )}
      </div>
    </div>
  );
};

export default EnhanceLightbox;

