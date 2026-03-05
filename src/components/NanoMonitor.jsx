const NanoMonitor = ({ onlineCount, queueTotal, queuePosition, busy }) => {
  return (
    <div className={`nano-monitor ${busy ? "is-busy" : ""}`}>
      <div className="stat-group">
        <div className="pulse-dot" />
        <span className="label-nano">ONLINE</span>
        <span>{onlineCount}</span>
      </div>
      <div className="divider" />
      <div className="stat-group">
        <span className="label-nano">QUEUE</span>
        <span>{busy ? `${queuePosition}/${queueTotal}` : queueTotal}</span>
      </div>
    </div>
  );
};

export default NanoMonitor;

