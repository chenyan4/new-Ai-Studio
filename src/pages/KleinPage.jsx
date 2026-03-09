import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateKleinCloud } from "@/api/generation";
import KleinUploadSlots from "@/components/klein/KleinUploadSlots";
import KleinControls from "@/components/klein/KleinControls";
import KleinHistoryGrid from "@/components/klein/KleinHistoryGrid";
import KleinLightbox from "@/components/klein/KleinLightbox";
import KleinAngleView from "@/components/klein/KleinAngleView";
import KleinFaceSwapView from "@/components/klein/KleinFaceSwapView";
import KleinChangeBgView from "@/components/klein/KleinChangeBgView";
import KleinClearPersonView from "@/components/klein/KleinClearPersonView";
import KleinPersonTransferView from "@/components/klein/KleinPersonTransferView";
import KleinLightChangeView from "@/components/klein/KleinLightChangeView";
import KleinEcomView from "@/components/klein/KleinEcomView";

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });

const PAGE_SIZE = 24;

const emptySlots = {
  1: { file: null, preview: "" },
  2: { file: null, preview: "" },
  3: { file: null, preview: "" },
};

const MODEL_VERSION_KEY = "klein_model_version";
const SIZE_MODE_KEY = "klein_size_mode";

const FEATURES = ["万能改图", "AI 换脸", "AI 换背景", "AI 消除人物","AI 人物迁移","AI 光影重组","AI 电商图", "角度控制"];

const GEMINI_DEFAULT = "gemini-3.1-flash-image-preview";
const normalizeGeminiModel = (v) =>
  v && v.startsWith("ggemini") ? "gemini" + v.slice(7) : v;

const KleinPage = () => {
  const [slots, setSlots] = useState(emptySlots);
  const [prompt, setPrompt] = useState("");
  const [modelVersion, setModelVersion] = useState(
    normalizeGeminiModel(localStorage.getItem(MODEL_VERSION_KEY)) || GEMINI_DEFAULT
  );
  const [sizeMode, setSizeMode] = useState(
    localStorage.getItem(SIZE_MODE_KEY) || "Match Image_1 (Smart Crop)"
  );
  const [customWidth, setCustomWidth] = useState(1024);
  const [customHeight, setCustomHeight] = useState(1024);
  const [feature, setFeature] = useState("万能改图");
  const [rendering, setRendering] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem(MODEL_VERSION_KEY, modelVersion);
  }, [modelVersion]);

  useEffect(() => {
    localStorage.setItem(SIZE_MODE_KEY, sizeMode);
  }, [sizeMode]);

  const modelOptions = useMemo(
    () => [
      { label: "Gemini 3.1 Pro", value: "gemini-3.1-flash-image-preview" },
      { label: "Nano Banana 2", value: "nano-banana-2-4k" },
      { label: "Gemini 3 Pro", value: "gemini-3-pro-image-preview" },
      { label: "GPT-4o-Image", value: "gpt-4o-image" },
    ],
    []
  );

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("klein");
      setHistorySource(data || []);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(data || [], 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectFile = async (slotId, file) => {
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setSlots((prev) => ({
      ...prev,
      [slotId]: {
        file,
        preview,
      },
    }));
  };

  const handleClearSlot = (slotId) => {
    setSlots((prev) => ({
      ...prev,
      [slotId]: { file: null, preview: "" },
    }));
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("请输入提示词");
      return;
    }

    const apiKey = localStorage.getItem("modelscope_api_token");
    if (!apiKey) {
      alert("请先在侧边栏设置个人 API Token 以使用 Cloud 模式。");
      return;
    }

    setRendering(true);
    try {
      const image1 = slots[1].file ? await fileToBase64(slots[1].file) : null;
      const image2 = slots[2].file ? await fileToBase64(slots[2].file) : null;
      const image3 = slots[3].file ? await fileToBase64(slots[3].file) : null;

      const generated = await generateKleinCloud({
        prompt,
        image1,
        image2,
        image3,
        apiKey,
        model: modelVersion,
        sizeMode,
        width: customWidth,
        height: customHeight,
      });

      if (!generated?.url) {
        throw new Error("生成失败，未返回图片");
      }

      await loadHistory();
    } catch (error) {
      alert(error.message || "生成失败");
    } finally {
      setRendering(false);
    }
  };

  const applySameStyle = (item) => {
    setPrompt(item.prompt || "");
    setPreviewItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (timestamp) => {
    const ok = window.confirm("Delete this archive?");
    if (!ok) return;
    const resultDelete = await deleteHistory(timestamp);
    if (!resultDelete?.success) return;
    setHistorySource((prev) => prev.filter((item) => item.timestamp !== timestamp));
    setHistoryItems((prev) => prev.filter((item) => item.timestamp !== timestamp));
    if (previewItem?.timestamp === timestamp) setPreviewItem(null);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const message = event?.detail;
      if (!message?.type) return;
      if (message.type === "new_image" && message.data?.type === "klein") {
        setHistorySource((prev) => {
          if (prev.find((item) => item.timestamp === message.data.timestamp)) return prev;
          return [message.data, ...prev];
        });
        setHistoryItems((prev) => {
          if (prev.find((item) => item.timestamp === message.data.timestamp)) return prev;
          return [message.data, ...prev];
        });
      }
    };

    window.addEventListener("studio_ws_message", handler);
    return () => window.removeEventListener("studio_ws_message", handler);
  }, []);

  const hasMore = currentIndex < historySource.length;

  if (feature === "角度控制") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinAngleView />
      </div>
    );
  }

  if (feature === "AI 换脸") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinFaceSwapView />
      </div>
    );
  }

  if (feature === "AI 换背景") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinChangeBgView />
      </div>
    );
  }

  if (feature === "AI 消除人物") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinClearPersonView />
      </div>
    );
  }

  if (feature === "AI 人物迁移") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinPersonTransferView />
      </div>
    );
  }

  if (feature === "AI 光影重组") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinLightChangeView />
      </div>
    );
  }

  if (feature === "AI 电商图") {
    return (
      <div className="k-page">
        <div className="k-header">
          <select 
            className="k-feature-select" 
            value={feature} 
            onChange={(e) => setFeature(e.target.value)}
          >
            {FEATURES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <KleinEcomView />
      </div>
    );
  }

  return (
    <div className="k-page">
      <div className="k-header">
        <select 
          className="k-feature-select" 
          value={feature} 
          onChange={(e) => setFeature(e.target.value)}
        >
          {FEATURES.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="k-top">
        <KleinUploadSlots slots={slots} onSelectFile={handleSelectFile} onClearSlot={handleClearSlot} />
        <KleinControls 
          prompt={prompt} 
          onPromptChange={setPrompt} 
          modelVersion={modelVersion}
          modelOptions={modelOptions}
          onModelVersionChange={setModelVersion}
          sizeMode={sizeMode}
          onSizeModeChange={setSizeMode}
          customWidth={customWidth}
          customHeight={customHeight}
          onCustomWidthChange={setCustomWidth}
          onCustomHeightChange={setCustomHeight}
          rendering={rendering} 
          onGenerate={handleGenerate} 
        />
      </div>


      <KleinHistoryGrid
        items={historyItems}
        onOpen={setPreviewItem}
        onDelete={handleDelete}
        onLoadMore={loadMore}
        hasMore={hasMore}
        loading={loadingHistory}
      />

      <KleinLightbox item={previewItem} onClose={() => setPreviewItem(null)} onApplySameStyle={applySameStyle} />
    </div>
  );
};

export default KleinPage;

