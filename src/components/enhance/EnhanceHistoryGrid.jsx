const EnhanceHistoryGrid = ({ items, onOpen }) => {
  return (
    <div className="e-history-grid">
      {items.map((item) => (
        <div
          key={item.timestamp}
          className="e-history-card"
          role="button"
          tabIndex={0}
          onClick={() => onOpen(item)}
          onKeyDown={(event) => event.key === "Enter" && onOpen(item)}
        >
          {item.previewUrl ? (
            <img src={item.previewUrl} alt={item.label || "preprocess"} />
          ) : item.videoUrl ? (
            <div className="e-history-video">Video</div>
          ) : (
            <div className="e-history-empty">No Preview</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EnhanceHistoryGrid;

