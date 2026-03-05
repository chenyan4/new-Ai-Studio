import { useEffect, useState } from "react";
import { getUserToken, saveUserToken } from "@/api/system";

const TokenModal = ({ open, onClose }) => {
  const [personalToken, setPersonalToken] = useState("");

  useEffect(() => {
    if (!open) return;
    getUserToken()
      .then((res) => {
        const token = res?.api_token || "";
        setPersonalToken(token);
        localStorage.setItem("modelscope_api_token", token);
      })
      .catch(() => {
        setPersonalToken(localStorage.getItem("modelscope_api_token") || "");
      });
  }, [open]);

  if (!open) return null;

  const savePersonal = async () => {
    if (!personalToken.trim()) {
      alert("请输入 Token");
      return;
    }
    try {
      await saveUserToken(personalToken.trim());
      localStorage.setItem("modelscope_api_token", personalToken.trim());
      alert("个人 Token 已保存到数据库");
      onClose();
    } catch (e) {
      alert("保存失败: " + e.message);
    }
  };

  const removePersonal = async () => {
    if (!window.confirm("确定要删除个人 Token 吗？")) return;
    try {
      await saveUserToken("");
      localStorage.removeItem("modelscope_api_token");
      setPersonalToken("");
      alert("个人 Token 已删除");
    } catch (e) {
      alert("删除失败: " + e.message);
    }
  };

  return (
    <div className="token-modal-mask" onClick={onClose}>
      <div
        className="token-modal-card"
        onClick={(event) => event.stopPropagation()}
      >
        <h3>API Token 配置</h3>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "16px" }}>
          使用 Cloud 模式必须配置此 Token。
        </p>
        <div className="token-panel">
          <input
            type="password"
            value={personalToken}
            onChange={(event) => setPersonalToken(event.target.value)}
            placeholder="请输入您的 T8star API Token"
          />
          <div className="token-actions">
            <button type="button" onClick={savePersonal}>
              保存
            </button>
            <button type="button" className="danger" onClick={removePersonal}>
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;

