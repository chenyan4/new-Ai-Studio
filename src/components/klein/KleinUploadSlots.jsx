const SLOT_LABELS = {
  1: "主图",
  2: "参考图 A",
  3: "参考图 B",
};

const KleinUploadSlots = ({ slots, onSelectFile, onClearSlot }) => {
  return (
    <div className="k-slots">
      {[1, 2, 3].map((slotId) => (
        <label key={slotId} className="k-slot">
          {slots[slotId]?.preview ? (
            <img src={slots[slotId].preview} alt={`slot-${slotId}`} />
          ) : (
            <div className="k-slot-empty">
              <strong>{SLOT_LABELS[slotId]}</strong>
              <span>点击上传图片</span>
            </div>
          )}

          <input type="file" accept="image/*" onChange={(event) => onSelectFile(slotId, event.target.files?.[0])} />

          {slots[slotId]?.preview ? (
            <button
              type="button"
              className="k-slot-clear"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onClearSlot(slotId);
              }}
            >
              x
            </button>
          ) : null}
        </label>
      ))}
    </div>
  );
};

export default KleinUploadSlots;

