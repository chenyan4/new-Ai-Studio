import React, { useEffect, useState } from "react";
import { Cloud } from "lucide-react";

const AngleHistoryCard = ({ item, onOpen }) => {
  const [imageSize, setImageSize] = useState(null);
  const imgUrl = item.images?.[0];
  const isCloud = item.is_cloud || imgUrl?.includes("cloud_angle");

  useEffect(() => {
    if (!imgUrl) return;
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
    img.src = imgUrl;
  }, [imgUrl, item.size, item.params]);

  if (!imgUrl) return null;

  return (
    <div className="a-masonry-item group" onClick={() => onOpen(item)}>
      <img src={imgUrl} alt="history" />
      {isCloud && (
        <div className="a-cloud-badge">
          <Cloud size={14} color="#fff" />
        </div>
      )}
      <div className="a-masonry-overlay">
        {imageSize && <div className="a-masonry-size">{imageSize}</div>}
        <p>{item.prompt || "Angle Control"}</p>
      </div>
    </div>
  );
};

const AngleHistoryGrid = ({ items, onOpen, onLoadMore, hasMore }) => {
  return (
    <>
      <div className="a-masonry-grid">
        {items.map((item, idx) => (
          <AngleHistoryCard
            key={`${item.timestamp}-${idx}`}
            item={item}
            onOpen={onOpen}
          />
        ))}
      </div>
      <div className="a-load-more-wrap">
        {hasMore ? (
          <button className="a-load-more" onClick={onLoadMore}>
            Load More
          </button>
        ) : (
          <div className="a-end-archive">End of Archive</div>
        )}
      </div>
    </>
  );
};

export default AngleHistoryGrid;
