import VideoHistoryCard from "./VideoHistoryCard";

const VideoHistoryGrid = ({
  items,
  onOpenItem,
  onDeleteItem,
  onLoadMore,
  hasMore,
  loading,
}) => {
  return (
    <div className="k-history-wrap">
      <div className="k-history-grid">
        {items.map((item) => (
          <VideoHistoryCard
            key={item.timestamp}
            item={item}
            onOpen={onOpenItem}
            onDelete={onDeleteItem}
          />
        ))}
      </div>
      {hasMore ? (
        <div className="k-load-more-wrap">
          <button
            type="button"
            className="k-load-more"
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? "加载中..." : "加载更多"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default VideoHistoryGrid;
