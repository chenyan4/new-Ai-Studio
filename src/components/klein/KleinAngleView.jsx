import { useEffect, useState, useCallback } from "react";
import { getHistory } from "@/api/history";
import { generateAngleChangeLocal } from "@/api/generation";
import AngleUploadPanel from "@/components/angle/AngleUploadPanel";
import AngleControls from "@/components/angle/AngleControls";
import AngleHistoryGrid from "@/components/angle/AngleHistoryGrid";
import AngleLightbox from "@/components/angle/AngleLightbox";
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

  useEffect(() => {
    localStorage.setItem(MODEL_VERSION_KEY, modelVersion);
  }, [modelVersion]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    const data = await getHistory("klein_angle");
    setHistorySource(data || []);
    setHistoryItems([]);
    setCurrentIndex(0);
    appendPage(data || [], 0);
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

      <section className="a-history-section">
        <div className="a-history-header">
          <h2>Archive</h2>
          <div className="a-history-divider"></div>
        </div>
        <AngleHistoryGrid
          items={historyItems}
          onOpen={setPreviewItem}
          onLoadMore={() => appendPage(historySource, currentIndex)}
          hasMore={hasMore}
        />
      </section>

      <AngleLightbox item={previewItem} onClose={() => setPreviewItem(null)} />
    </div>
  );
};

export default KleinAngleView;
