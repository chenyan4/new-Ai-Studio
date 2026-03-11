import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import StudioShellPage from "@/pages/StudioShellPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { useEffect, useState } from "react";

// 简单的鉴权组件
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("is_logged_in") === "true"
  );
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("is_logged_in") === "true");
  }, [location]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      {/* 先进入登录 / 注册 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 登录后的主应用放在 /app 下，由 PrivateRoute 保护 */}
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <StudioShellPage />
          </PrivateRoute>
        }
      />

      {/* 默认和其他路径一律跳到登录页，避免未登录直接进主页面触发 401 */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

