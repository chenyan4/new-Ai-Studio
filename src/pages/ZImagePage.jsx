import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateCloudZImage, generateLocalZImage } from "@/api/generation";
import { getQueueStatus } from "@/api/system";
import ZImageToolbar from "@/components/zimage/ZImageToolbar";
import ZImageHistoryGrid from "@/components/zimage/ZImageHistoryGrid";
import ZImageLightbox from "@/components/zimage/ZImageLightbox";

const PAGE_SIZE = 15;
const ENGINE_MODE_KEY = "zimage_engine_mode";
const TOKEN_KEY = "modelscope_api_token";
const MODEL_VERSION_KEY = "zimage_model_version";

const makeClientId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const ensureClientId = () => {
  const existing = localStorage.getItem("client_id");
  if (existing) return existing;
  const created = makeClientId();
  localStorage.setItem("client_id", created);
  return created;
};

const ZImagePage = () => {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] = useState(localStorage.getItem(ENGINE_MODE_KEY) || "local");
  const [width, setWidth] = useState("1024");
  const [height, setHeight] = useState("1024");
  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "Tongyi-MAI/Z-Image-Turbo"
  );
  const [rendering, setRendering] = useState(false);
  const [queueStatusText, setQueueStatusText] = useState("System Ready");

  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);

  const clientId = useMemo(() => ensureClientId(), []);

  useEffect(() => {
    localStorage.setItem(ENGINE_MODE_KEY, engine);
  }, [engine]);

  useEffect(() => {
    localStorage.setItem(MODEL_VERSION_KEY, modelVersion);
  }, [modelVersion]);

  const localModelOptions = useMemo(
    () => [
      { label: "Z-image-Turbo", value: "Tongyi-MAI/Z-Image-Turbo" },
    ],
    []
  );

  const cloudModelOptions = useMemo(
    () => [
      { label: "Gemini 3.1 Pro", value: "gemini-3.1-flash-image-preview" },
      { label: "Nano Banana 2", value: "nano-banana-2-4k" },
      { label: "Gemini 3 Pro", value: "gemini-3-pro-image-preview" },
      { label: "GPT-4o-Image", value: "gpt-4o-image" },
    ],
    []
  );

  const modelOptions = engine === "cloud" ? cloudModelOptions : localModelOptions;

  useEffect(() => {
    const isValid = modelOptions.some((opt) => opt.value === modelVersion);
    if (!isValid && modelOptions.length > 0) {
      setModelVersion(modelOptions[0].value);
    }
  }, [engine, modelOptions, modelVersion]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setHistoryLoading(true);
    try {
      const data = await getHistory("zimage");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setHistoryLoading(false);
    }
  };

  const loadMore = () => {
    appendPage(historySource, currentIndex);
  };

  const handleDelete = async (timestamp) => {
    try {
      const result = await deleteHistory(String(timestamp));
      if (!result?.success) {
        alert(result?.message || "删除失败");
        return;
      }
      // 以数据库为准，删除后刷新一次更可靠
      await loadHistory();
      if (previewItem?.timestamp === timestamp) setPreviewItem(null);
    } catch (error) {
      alert(error.message || "删除失败");
    }
  };

  const handleReplicate = (text) => {
    setPrompt(text);
    setPreviewItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCloud = async () => {
    let apiKey = localStorage.getItem(TOKEN_KEY);
    if (!apiKey) {
      alert("ModelScope Token Required. 请先在侧边栏设置个人 API Token 以使用 Cloud 模式。");
      return;
    }
    const data = await generateCloudZImage({
      prompt,
      apiKey,
      resolution: `${width}x${height}`,
      model: modelVersion,
    });
    if (data?.url) {
      // 历史由后端落库；这里刷新一次即可，避免出现重复记录
      await loadHistory();
    }
  };

  const renderLocal = async () => {
    const data = await generateLocalZImage({
      prompt,
      width: Number(width),
      height: Number(height),
      modelVersion,
      clientId,
    });
    if (data?.images?.length) {
      await loadHistory();
    }
  };

  const handleRender = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }
    if (!String(width).trim() || !String(height).trim()) {
      alert("请输入宽和高");
      return;
    }
    if (Number(width) <= 0 || Number(height) <= 0) {
      alert("宽高必须大于 0");
      return;
    }

    setRendering(true);
    try {
      if (engine === "cloud") await renderCloud();
      else await renderLocal();
    } catch (error) {
      alert(error.message || "Render failed");
    } finally {
      setRendering(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const data = await getQueueStatus(clientId);
        if (data.total > 0) {
          setQueueStatusText(`Queueing ${data.position}/${data.total}`);
        } else {
          setQueueStatusText("System Ready");
        }
      } catch (error) {
        // ignore
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [clientId]);

  // 不再通过 new_image 广播实时插入（广播是全局的，会混入其他用户结果）

  const hasMore = currentIndex < historySource.length;

  return (
    <div className="z-page">
      <ZImageToolbar
        prompt={prompt}
        onPromptChange={setPrompt}
        width={width}
        height={height}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
        engine={engine}
        onEngineChange={setEngine}
        modelVersion={modelVersion}
        modelOptions={modelOptions}
        onModelVersionChange={setModelVersion}
        loading={rendering}
        onRender={handleRender}
        queueStatusText={queueStatusText}
      />

      <ZImageHistoryGrid
        items={historyItems}
        onOpenItem={setPreviewItem}
        onDeleteItem={handleDelete}
        onLoadMore={loadMore}
        hasMore={hasMore}
        loading={historyLoading}
      />

      <ZImageLightbox item={previewItem} onClose={() => setPreviewItem(null)} onReplicate={handleReplicate} />
    </div>
  );
};

export default ZImagePage;

