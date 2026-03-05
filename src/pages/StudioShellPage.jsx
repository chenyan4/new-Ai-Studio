import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import NanoMonitor from "@/components/NanoMonitor";
import TokenModal from "@/components/TokenModal";
import { getQueueStatus } from "@/api/system";
import ZImagePage from "@/pages/ZImagePage";
import EnhancePage from "@/pages/EnhancePage";
import KleinPage from "@/pages/KleinPage";
import AnglePage from "@/pages/AnglePage";

const makeClientId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const StudioShellPage = () => {
  const [activeTab, setActiveTab] = useState("zimage");
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);
  const [queueTotal, setQueueTotal] = useState(0);
  const [queuePosition, setQueuePosition] = useState(0);

  const clientId = useMemo(() => {
    const existing = localStorage.getItem("client_id");
    if (existing) return existing;
    const created = makeClientId();
    localStorage.setItem("client_id", created);
    return created;
  }, []);

  useEffect(() => {
    window.openTokenModal = () => setShowTokenModal(true);
    return () => {
      delete window.openTokenModal;
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("modelscope_api_token")) return;
    setShowTokenModal(true);
  }, []);

  useEffect(() => {
    const syncQueue = async () => {
      try {
        const data = await getQueueStatus(clientId);
        setQueueTotal(data.total || 0);
        setQueuePosition(data.position || 0);
      } catch (error) {
        // ignore
      }
    };

    syncQueue();
    const timer = setInterval(syncQueue, 2000);
    return () => clearInterval(timer);
  }, [clientId]);

  useEffect(() => {
    const protocol = location.protocol === "https:" ? "wss" : "ws";
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws/stats?client_id=${clientId}`);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // 统一分发 WebSocket 消息，避免每个页面重复建立连接导致 ONLINE 计数偏大
        window.dispatchEvent(new CustomEvent("studio_ws_message", { detail: data }));
        if (data.type === "stats" && typeof data.online_count === "number") {
          setOnlineCount(data.online_count);
        }
      } catch (error) {
        // ignore
      }
    };

    return () => ws.close();
  }, [clientId]);

  const busy = queuePosition > 0;

  return (
    <div className="app-shell">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onTokenClick={() => setShowTokenModal(true)}
      />

      <div className="stage-wrap">
        {activeTab === "zimage" ? <ZImagePage /> : null}
        {activeTab === "enhance" ? <EnhancePage /> : null}
        {activeTab === "klein" ? <KleinPage /> : null}
        {activeTab === "angle" ? <AnglePage /> : null}
        <NanoMonitor
          onlineCount={onlineCount}
          queueTotal={queueTotal}
          queuePosition={queuePosition}
          busy={busy}
        />
      </div>

      <TokenModal open={showTokenModal} onClose={() => setShowTokenModal(false)} />
    </div>
  );
};

export default StudioShellPage;

