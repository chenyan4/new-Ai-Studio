import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateKleinCloud } from "@/api/generation";
import KleinControls from "./KleinControls";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";

const PAGE_SIZE = 24;
const MODEL_VERSION_KEY = "klein_ecom_model";
const SIZE_MODE_KEY = "klein_ecom_size_mode";
const normalizeGeminiModel = (v) => (v && v.startsWith("ggemini") ? "gemini" + v.slice(7) : v);

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

const KleinEcomView = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [prompt, setPrompt] = useState("");
  const [modelVersion, setModelVersion] = useState(
    normalizeGeminiModel(localStorage.getItem(MODEL_VERSION_KEY)) || "gemini-3.1-flash-image-preview"
  );
  const [sizeMode, setSizeMode] = useState(
    localStorage.getItem(SIZE_MODE_KEY) || "Match Image_1 (Smart Crop)"
  );
  const [customWidth, setCustomWidth] = useState(1024);
  const [customHeight, setCustomHeight] = useState(1024);

  const [productCategory, setProductCategory] = useState("");
  const [style, setStyle] = useState("科技感");
  const [scene, setScene] = useState("混合（以使用场景为主）");
  const [language, setLanguage] = useState("中文 (Chinese)");

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
      // AI 电商图使用独立的历史类型 klein_ecom
      const data = await getHistory("klein_ecom");
      const list = data || [];
      setHistorySource(list);
      setHistoryItems([]);
      setCurrentIndex(0);
      appendPage(list, 0);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadMore = () => appendPage(historySource, currentIndex);

  const handleSelectImage = (file) => {
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClearImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const handleGenerate = async () => {
    if (!imageFile) {
      alert("请先上传电商图片");
      return;
    }
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
      const image1 = await fileToBase64(imageFile);

      const generated = await generateKleinCloud({
        prompt,
        image1,
        image2: null,
        image3: null,
        apiKey,
        model: modelVersion,
        sizeMode,
        width: customWidth,
        height: customHeight,
        feature: "ecom",
        productCategory,
        style,
        scene,
        language,
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
      if (message.type === "new_image" && message.data?.type === "klein_ecom") {
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

  return (
    <div className="k-page">
      <div className="k-top">
        {/* 左侧：单图上传，样式参考万能改图 */}
        <div className="k-slots">
          <label className="k-slot">
            {imagePreview ? (
              <img src={imagePreview} alt="ecom-source" />
            ) : (
              <div className="k-slot-empty">
                <strong>电商图片</strong>
                <span>点击上传图片</span>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleSelectImage(event.target.files?.[0])}
            />

            {imagePreview && (
              <button
                type="button"
                className="k-slot-clear"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleClearImage();
                }}
              >
                x
              </button>
            )}
          </label>
        </div>

        {/* 右侧：提示词 + 模型 + 尺寸控制，沿用万能改图样式 */}
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
          extraOptions={
            <>
              {/* 第一行：PRODUCT / STYLE */}
              <div className="k-model-select">
                <div className="k-model-label">PRODUCT</div>
                <input
                  type="text"
                  className="k-size-input"
                  placeholder="例如：耳机"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </div>

              <div className="k-model-select">
                <div className="k-model-label">STYLE</div>
                <select value={style} onChange={(e) => setStyle(e.target.value)}>
                  <option value="科技感">科技感</option>
                  <option value="简约 Ins 风">简约 Ins 风</option>
                  <option value="高级奢华">高级奢华</option>
                  <option value="清新自然">清新自然</option>
                  <option value="国潮风">国潮风</option>
                  <option value="活泼撞色">活泼撞色</option>
                  <option value="极简工业风">极简工业风</option>
                  <option value="梦幻唯美">梦幻唯美</option>
                  <option value="亚马逊风格">亚马逊风格</option>
                </select>
              </div>
            </>
          }
          belowOptions={
            <>
              <div className="k-model-select">
                <div className="k-model-label">SCENE</div>
                <select value={scene} onChange={(e) => setScene(e.target.value)}>
                  <option value="混合（以使用场景为主）">混合（以使用场景为主）</option>
                  <option value="生活方式使用场景（人物/手部交互）">
                    生活方式使用场景（人物/手部交互）
                  </option>
                  <option value="棚拍干净背景（不复刻参考图背景）">
                    棚拍干净背景（不复刻参考图背景）
                  </option>
                </select>
              </div>

              <div className="k-model-select">
                <div className="k-model-label">LANG</div>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="中文 (Chinese)">中文 (Chinese)</option>
                  <option value="English">English</option>
                  <option value="自动检测 (Auto)">自动检测 (Auto)</option>
                </select>
              </div>
            </>
          }
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

      <KleinLightbox
        item={previewItem}
        onClose={() => setPreviewItem(null)}
        onApplySameStyle={applySameStyle}
      />
    </div>
  );
};

export default KleinEcomView;

