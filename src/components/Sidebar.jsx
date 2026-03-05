const NAV_ITEMS = [
  { id: "zimage", label: "文生图" },
  { id: "enhance", label: "图片&视频预处理" },
  { id: "klein", label: "图片编辑" },
  { id: "angle", label: "角度控制" },
];

const Sidebar = ({ activeTab, onTabChange, onTokenClick }) => {
  return (
    <aside className="sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="logo-ring">
        <div className="logo-dot" />
      </div>

      <nav className="nav-list">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => onTabChange(item.id)}
          >
            <span className="nav-text">{item.label}</span>
          </button>
        ))}
      </nav>

      <button type="button" className="token-btn" onClick={onTokenClick}>
        API Token
      </button>

      <button
        type="button"
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem('is_logged_in');
          window.location.href = '/login';
        }}
      >
        退出登录
      </button>
    </aside>
  );
};

export default Sidebar;

