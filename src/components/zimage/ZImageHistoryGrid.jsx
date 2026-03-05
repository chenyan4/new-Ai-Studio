import ZImageHistoryCard from "./ZImageHistoryCard";

const ZImageHistoryGrid = ({ items, onOpenItem, onDeleteItem, onLoadMore, hasMore, loading }) => {
  return (
    <section className="z-history">
      <div className="z-grid">
        {items.map((item) => (
          <ZImageHistoryCard key={item.timestamp} item={item} onOpen={onOpenItem} onDelete={onDeleteItem} />
        ))}
      </div>
      {hasMore ? (
        <div className="z-load-more-wrap">
          <button type="button" className="z-load-more" onClick={onLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More Archive"}
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default ZImageHistoryGrid;

