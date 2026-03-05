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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <StudioShellPage />
          </PrivateRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

