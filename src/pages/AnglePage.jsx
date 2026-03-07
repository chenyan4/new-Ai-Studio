import { useEffect, useMemo, useState } from "react";
import { deleteHistory, getHistory } from "@/api/history";
import { generateVeoSeedanceVideo, generateWanVaceT2VVideo } from "@/api/generation";
import VideoToolbar from "@/components/angle/VideoToolbar";
import VideoHistoryGrid from "@/components/angle/VideoHistoryGrid";
import VideoLightbox from "@/components/angle/VideoLightbox";
import VideoI2VView from "@/components/angle/VideoI2VView";
import VideoFirstEndView from "@/components/angle/VideoFirstEndView";
import VideoExpandView from "@/components/angle/VideoExpandView";
import VideoPersonChangeOneView from "@/components/angle/VideoPersonChangeOneView";
import VideoPersonChangeMixView from "@/components/angle/VideoPersonChangeMixView";
import VideoPoseChangeView from "@/components/angle/VideoPoseChangeView";

const PAGE_SIZE = 15;
const VIDEO_FEATURE_KEY = "angle_video_feature";
const VIDEO_ENGINE_KEY = "angle_video_engine";
const T2V_LOCAL_SIZE_KEY = "angle_t2v_local_size";
const T2V_LOCAL_FRAMES_KEY = "angle_t2v_local_frames";
const T2V_LOCAL_FPS_KEY = "angle_t2v_local_fps";
const T2V_CLOUD_MODEL_KEY = "angle_t2v_cloud_model";
const T2V_CLOUD_RATIO_KEY = "angle_t2v_cloud_ratio";
const T2V_CLOUD_RESOLUTION_KEY = "angle_t2v_cloud_resolution";
const T2V_CLOUD_DURATION_KEY = "angle_t2v_cloud_duration";

const T2V_LOCAL_MODEL = "Wan2.2 Vace";
const T2V_CLOUD_MODELS = [
  { label: "veo 3.1 Fast", value: "veo3.1-fast" },
  { label: "seedance 1.5 pro", value: "doubao-seedance-1-5-pro-251215" },
];
const ASPECT_RATIOS = ["16:9", "9:16"];
const RESOLUTIONS = ["480p", "720p", "1080p"];
const DURATIONS = [5, 10];

const FEATURES = [
  "文生视频",
  "图生视频",
  "首尾帧 生成",
  "视频扩图",
  "视频替换 （单人）",
  "视频替换 （多人）",
  "动作迁移",
];

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

const AnglePage = () => {
  const [feature, setFeature] = useState(
    () => localStorage.getItem(VIDEO_FEATURE_KEY) || FEATURES[0]
  );
  const [engine, setEngine] = useState(
    () => localStorage.getItem(VIDEO_ENGINE_KEY) || "local"
  );
  const [prompt, setPrompt] = useState("");
  // 文生视频 Local
  const [t2vLocalSize, setT2vLocalSize] = useState(() => localStorage.getItem(T2V_LOCAL_SIZE_KEY) || "1024x576");
  const [t2vLocalFrames, setT2vLocalFrames] = useState(() => localStorage.getItem(T2V_LOCAL_FRAMES_KEY) || "81");
  const [t2vLocalFps, setT2vLocalFps] = useState(() => localStorage.getItem(T2V_LOCAL_FPS_KEY) || "24");
  // 文生视频 Cloud
  const [t2vCloudModel, setT2vCloudModel] = useState(() => localStorage.getItem(T2V_CLOUD_MODEL_KEY) || T2V_CLOUD_MODELS[0].value);
  const [t2vCloudRatio, setT2vCloudRatio] = useState(() => localStorage.getItem(T2V_CLOUD_RATIO_KEY) || ASPECT_RATIOS[0]);
  const [t2vCloudResolution, setT2vCloudResolution] = useState(() => localStorage.getItem(T2V_CLOUD_RESOLUTION_KEY) || RESOLUTIONS[0]);
  const [t2vCloudDuration, setT2vCloudDuration] = useState(() => {
    const saved = localStorage.getItem(T2V_CLOUD_DURATION_KEY);
    if (saved !== null) {
      const n = parseInt(saved, 10);
      if (Number.isInteger(n)) return n;
    }
    return DURATIONS[0];
  });
  const [rendering, setRendering] = useState(false);
  const [queueStatusText, setQueueStatusText] = useState("System Ready");
  const [historySource, setHistorySource] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);

  const clientId = useMemo(() => ensureClientId(), []);

  useEffect(() => {
    localStorage.setItem(VIDEO_FEATURE_KEY, feature);
  }, [feature]);

  useEffect(() => {
    localStorage.setItem(VIDEO_ENGINE_KEY, engine);
  }, [engine]);

  useEffect(() => {
    if (t2vLocalSize) localStorage.setItem(T2V_LOCAL_SIZE_KEY, t2vLocalSize);
  }, [t2vLocalSize]);
  useEffect(() => {
    if (t2vLocalFrames) localStorage.setItem(T2V_LOCAL_FRAMES_KEY, t2vLocalFrames);
  }, [t2vLocalFrames]);
  useEffect(() => {
    if (t2vLocalFps) localStorage.setItem(T2V_LOCAL_FPS_KEY, t2vLocalFps);
  }, [t2vLocalFps]);
  useEffect(() => {
    if (t2vCloudModel) localStorage.setItem(T2V_CLOUD_MODEL_KEY, t2vCloudModel);
  }, [t2vCloudModel]);
  useEffect(() => {
    if (t2vCloudRatio) localStorage.setItem(T2V_CLOUD_RATIO_KEY, t2vCloudRatio);
  }, [t2vCloudRatio]);
  useEffect(() => {
    if (t2vCloudResolution) localStorage.setItem(T2V_CLOUD_RESOLUTION_KEY, t2vCloudResolution);
  }, [t2vCloudResolution]);
  useEffect(() => {
    if (Number.isInteger(t2vCloudDuration)) localStorage.setItem(T2V_CLOUD_DURATION_KEY, String(t2vCloudDuration));
  }, [t2vCloudDuration]);

  const appendPage = (source, startIndex) => {
    const chunk = source.slice(startIndex, startIndex + PAGE_SIZE);
    setHistoryItems((prev) => [...prev, ...chunk]);
    setCurrentIndex(startIndex + chunk.length);
  };

  const loadHistory = async () => {
    setHistoryLoading(true);
    try {
      const data = await getHistory("video");
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
      await loadHistory();
      if (previewItem?.timestamp === timestamp) setPreviewItem(null);
    } catch (error) {
      alert(error.message || "删除失败");
    }
  };

  const handleReplicate = (text) => {
    setPrompt(text || "");
    setPreviewItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRender = async () => {
    if (!prompt.trim()) {
      alert("请输入提示词");
      return;
    }
    if (feature === "文生视频" && engine === "cloud") {
      const apiKey = localStorage.getItem("modelscope_api_token");
      if (!apiKey?.trim()) {
        alert("请先在侧边栏设置 API Token 以使用 Cloud 模式。");
        return;
      }
      setRendering(true);
      try {
        await generateVeoSeedanceVideo({
          prompt,
          apiKey,
          modelSelect: t2vCloudModel,
          aspectRatio: t2vCloudRatio,
          resolution: t2vCloudResolution,
          duration: t2vCloudDuration,
        });
        await loadHistory();
      } catch (error) {
        alert(error?.message || "生成失败");
      } finally {
        setRendering(false);
      }
      return;
    }
    if (feature === "文生视频" && engine === "local") {
      const [w, h] = (t2vLocalSize || "1024x576").split("x").map((n) => parseInt(String(n).trim(), 10) || 0);
      const width = w > 0 ? w : 1024;
      const height = h > 0 ? h : 576;
      setRendering(true);
      try {
        await generateWanVaceT2VVideo({
          prompt,
          width,
          height,
          numFrames: t2vLocalFrames || 81,
          fps: t2vLocalFps || 24,
        });
        await loadHistory();
      } catch (error) {
        alert(error?.message || "生成失败");
      } finally {
        setRendering(false);
      }
      return;
    }
    setRendering(true);
    try {
      // TODO: 其他 feature 接入对应 API
      await loadHistory();
    } catch (error) {
      alert(error?.message || "生成失败");
    } finally {
      setRendering(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const hasMore = currentIndex < historySource.length;

  const isI2V = feature === "图生视频";
  const isFirstEnd = feature === "首尾帧 生成";
  const isVideoExpand = feature === "视频扩图";
  const isPersonChangeOne = feature === "视频替换 （单人）";
  const isPersonChangeMix = feature === "视频替换 （多人）";
  const isPoseChange = feature === "动作迁移";

  return (
    <div className="z-page">
      <div className="k-header">
        <select
          className="k-feature-select"
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
        >
          {FEATURES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {isPersonChangeOne ? (
        <VideoPersonChangeOneView />
      ) : isPersonChangeMix ? (
        <VideoPersonChangeMixView />
      ) : isPoseChange ? (
        <VideoPoseChangeView />
      ) : isVideoExpand ? (
        <VideoExpandView />
      ) : isFirstEnd ? (
        <VideoFirstEndView />
      ) : isI2V ? (
        <VideoI2VView />
      ) : (
        <>
          <VideoToolbar
            feature={feature}
            prompt={prompt}
            onPromptChange={setPrompt}
            engine={engine}
            onEngineChange={setEngine}
            loading={rendering}
            onRender={handleRender}
            queueStatusText={queueStatusText}
            t2vLocalModel={T2V_LOCAL_MODEL}
            t2vLocalSize={t2vLocalSize}
            onT2vLocalSizeChange={setT2vLocalSize}
            t2vLocalFrames={t2vLocalFrames}
            onT2vLocalFramesChange={setT2vLocalFrames}
            t2vLocalFps={t2vLocalFps}
            onT2vLocalFpsChange={setT2vLocalFps}
            t2vCloudModel={t2vCloudModel}
            onT2vCloudModelChange={setT2vCloudModel}
            t2vCloudRatio={t2vCloudRatio}
            onT2vCloudRatioChange={setT2vCloudRatio}
            t2vCloudResolution={t2vCloudResolution}
            onT2vCloudResolutionChange={setT2vCloudResolution}
            t2vCloudDuration={t2vCloudDuration}
            onT2vCloudDurationChange={setT2vCloudDuration}
            t2vCloudModelOptions={T2V_CLOUD_MODELS}
            aspectRatioOptions={ASPECT_RATIOS}
            resolutionOptions={RESOLUTIONS}
            durationOptions={DURATIONS}
          />

          <VideoHistoryGrid
            items={historyItems}
            onOpenItem={setPreviewItem}
            onDeleteItem={handleDelete}
            onLoadMore={loadMore}
            hasMore={hasMore}
            loading={historyLoading}
          />

          <VideoLightbox
            item={previewItem}
            onClose={() => setPreviewItem(null)}
            onReplicate={handleReplicate}
          />
        </>
      )}
    </div>
  );
};

export default AnglePage;
