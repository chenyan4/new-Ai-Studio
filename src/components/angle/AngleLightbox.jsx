import React from "react";
import { X, Save } from "lucide-react";

const AngleLightbox = ({ item, onClose }) => {
  if (!item) return null;

  const imgUrl = item.images?.[0];
  if (!imgUrl) return null;

  return (
    <div className="a-lightbox-mask" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="a-lightbox-close" onClick={onClose}>
        <X size={24} />
      </button>

      <div className="a-lightbox-content">
        <div className="a-lightbox-img-wrapper">
          <img src={imgUrl} alt="lightbox-preview" />
        </div>
        
        <div className="a-lightbox-actions">
          <a
            href={imgUrl}
            download={`Angle-Master-${Date.now()}.png`}
            className="a-lightbox-download"
          >
            <Save size={16} />
            <span>Save Master</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AngleLightbox;
