import { useEffect, useState, useCallback } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateAngleChangeLocal } from "@/api/generation";
import AngleUploadPanel from "@/components/angle/AngleUploadPanel";
import AngleControls from "@/components/angle/AngleControls";
import KleinHistoryGrid from "./KleinHistoryGrid";
import KleinLightbox from "./KleinLightbox";
import { Camera, Download } from "lucide-react";

const PAGE_SIZE = 30;
const MODEL_VERSION_KEY = "klein_angle_model";

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const KleinAngleView = () => {
  const [modelVersion, setModelVersion] = useState(
    localStorage.getItem(MODEL_VERSION_KEY) || "qwen_edit_2511"
  );
  const [prompt, setPrompt] = useState("");
  const [rotateH, setRotateH] = useState(0);
  const [rotateV, setRotateV] = useState(0);
  const [distance, setDistance] = useState(4);

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [rendering, setRendering] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);
  const [previewItem, setPreviewItem] = useState(null);
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem(MODEL_VERSION_KEY, modelVersion);
  }, [modelVersion]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const data = await getHistory("klein_angle");
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

  const handleDelete = async (timestamp) => {
    const ok = window.confirm("Delete this archive?");
    if (!ok) return;
    const resultDelete = await deleteHistory(timestamp);
    if (!resultDelete?.success) return;
    setHistorySource((prev) => prev.filter((item) => item.timestamp !== timestamp));
    setHistoryItems((prev) => prev.filter((item) => item.timestamp !== timestamp));
    if (previewItem?.timestamp === timestamp) setPreviewItem(null);
  };

  const applySameStyle = (item) => {
    setPrompt(item.prompt || "");
    setPreviewItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyAnglePrompt = useCallback((h, v, d) => {
    const parts = [];
    if (h !== 0) {
      parts.push(`${h > 0 ? "向右" : "向左"}旋转${Math.abs(h)}度`);
    }
    if (v !== 0) {
      parts.push(`${v > 0 ? "俯视" : "仰视"}${Math.abs(v)}度`);
    }
    let lensText = "";
    if (d > 4) lensText = "使用广角镜头";
    if (d < 4) lensText = "使用特写镜头";

    let line = "";
    if (parts.length > 0) line = `将相机${parts.join("，")}`;
    if (lensText) line += (line ? "，" : "将相机") + lensText;

    setPrompt((prevPrompt) => {
      const regex = /将相机.*?(?=(\n|$))/g;
      if (regex.test(prevPrompt)) {
        return prevPrompt.replace(regex, line);
      } else {
        return prevPrompt.trim() ? (line ? `${prevPrompt.trim()}\n${line}` : prevPrompt) : line;
      }
    });
  }, []);

  useEffect(() => {
    applyAnglePrompt(rotateH, rotateV, distance);
  }, [rotateH, rotateV, distance, applyAnglePrompt]);

  const handleSelectFile = async (file) => {
    if (!file) return;
    const dataUrl = await fileToDataUri(file);
    setPreviewUrl(dataUrl);
    setImageFile(file);
  };

  const handleGenerate = async () => {
    if (!imageFile) {
      alert("请先上传图片");
      return;
    }
    if (!prompt.trim()) {
      alert("请输入提示词");
      return;
    }

    setRendering(true);
    setCurrentResult(null);
    try {
      const data = await generateAngleChangeLocal({
        imageFile,
        prompt,
        model: modelVersion,
      });
      if (!data?.images?.length) {
        throw new Error("No images returned");
      }
      setCurrentResult(data);
      await loadHistory();
    } catch (error) {
      alert(error.message || "Generation failed");
    } finally {
      setRendering(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const data = event?.detail;
      if (!data) return;

      if (data.type === "new_image" && data.data?.type === "klein_angle") {
        setHistorySource((prev) => {
          if (prev.find((item) => item.timestamp === data.data.timestamp)) return prev;
          return [data.data, ...prev];
        });
        setHistoryItems((prev) => {
          if (prev.find((item) => item.timestamp === data.data.timestamp)) return prev;
          return [data.data, ...prev];
        });
      }
    };

    window.addEventListener("studio_ws_message", handler);
    return () => window.removeEventListener("studio_ws_message", handler);
  }, []);

  const hasMore = currentIndex < historySource.length;

  return (
    <div className="ka-view">
      <main className="a-main-content">
        <div className="a-row">
          <AngleUploadPanel previewUrl={previewUrl} onSelectFile={handleSelectFile} />
          <AngleControls
            prompt={prompt}
            onPromptChange={setPrompt}
            rotateH={rotateH}
            rotateV={rotateV}
            distance={distance}
            onRotateHChange={setRotateH}
            onRotateVChange={setRotateV}
            onDistanceChange={setDistance}
            onGenerate={handleGenerate}
            rendering={rendering}
            previewUrl={previewUrl}
            modelVersion={modelVersion}
            onModelChange={setModelVersion}
          />
        </div>

        <div className="a-result-section">
          <h3 className="a-section-title">04. Result Preview</h3>
          <div className="a-result-frame">
            {!rendering && !currentResult?.images?.[0] && (
              <div className="a-empty-state">
                <Camera size={48} strokeWidth={1} />
                <p>Canvas Ready</p>
              </div>
            )}

            {rendering && (
              <div className="a-loading-state">
                <div className="a-loading-box"></div>
                <p>Processing...</p>
              </div>
            )}

            {!rendering && currentResult?.images?.[0] && (
              <>
                <img
                  src={currentResult.images[0]}
                  alt="angle-result"
                  className="a-result-img"
                  onClick={() => setPreviewItem(currentResult)}
                />
                <a
                  href={currentResult.images[0]}
                  download={`KleinAngle-${Date.now()}.png`}
                  className="a-download-btn"
                >
                  <Download size={20} />
                </a>
              </>
            )}
          </div>
        </div>
      </main>

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

export default KleinAngleView;
