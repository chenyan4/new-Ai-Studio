import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "@/styles/login.css"; // 引入专属的登录样式
import { registerUser } from "@/api/auth";

const RegisterPage = () => {
  const canvasRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [timeStr, setTimeStr] = useState("");
  const navigate = useNavigate();

  // 更新时间
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setTimeStr(now.toLocaleString("en-GB").toUpperCase());
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Canvas 动画逻辑
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    const particleCount = 4500;
    let noiseTimer = 0;
    
    const hoverRef = { current: isHovering };

    function isInsideRoundedSquare(px, py, halfSide, radius) {
      const dx = Math.abs(px - width / 2);
      const dy = Math.abs(py - height / 2);
      if (dx > halfSide || dy > halfSide) return false;
      if (dx > halfSide - radius && dy > halfSide - radius) {
        const cx = dx - (halfSide - radius);
        const cy = dy - (halfSide - radius);
        return cx * cx + cy * cy <= radius * radius;
      }
      return true;
    }

    class Particle {
      constructor() {
        this.init();
      }
      init() {
        const angle = Math.random() * Math.PI * 2;
        const r = 5 + Math.random() * 15;
        this.x = width / 2 + Math.cos(angle) * r;
        this.y = height / 2 + Math.sin(angle) * r;
        this.vx = Math.cos(angle) * 2;
        this.vy = Math.sin(angle) * 2;
        this.size = Math.random() * 1.6;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.isEscaping = false;
      }
      update(breath) {
        const dx = this.x - width / 2;
        const dy = this.y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (hoverRef.current) {
          this.vx += (Math.random() - 0.5) * 4;
          this.vy += (Math.random() - 0.5) * 4;
        } else {
          const repulsionRadius = 45;
          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            this.vx += (dx / dist) * force * 6;
            this.vy += (dy / dist) * force * 6;
          }

          const pushBase = Math.pow(breath, 5) * 14;
          const randomScatter = (Math.random() - 0.5) * pushBase * 0.5;
          this.vx += (dx / dist) * pushBase + randomScatter;
          this.vy += (dy / dist) * pushBase + randomScatter;

          if (breath > 0.88 && Math.random() > 0.98) {
            this.isEscaping = true;
          }

          const side = 180;
          const cornerR = 80;

          if (!this.isEscaping) {
            if (!isInsideRoundedSquare(this.x + this.vx, this.y + this.vy, side, cornerR)) {
              this.vx *= -0.4;
              this.vy *= -0.4;
              this.vx += (Math.random() - 0.5) * 2;
              this.vy += (Math.random() - 0.5) * 2;
            }

            const targetR = 140;
            const pull = (targetR - dist) * 0.012;
            this.vx += (dx / dist) * pull;
            this.vy += (dy / dist) * pull;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        const friction = this.isEscaping ? 0.98 : 0.86;
        this.vx *= friction;
        this.vy *= friction;

        if (dist > width * 0.6 || (this.isEscaping && Math.abs(this.vx) < 0.05)) {
          this.init();
        }
      }
      draw(breath) {
        const b = 180 + breath * 75;
        const finalAlpha = this.isEscaping ? this.alpha * 0.4 : this.alpha;
        ctx.fillStyle = `rgba(${b}, ${b}, ${b}, ${finalAlpha})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawCore = (breath) => {
      if (hoverRef.current) return;
      const size = 10 + breath * 4;
      ctx.save();
      ctx.shadowBlur = 40 * breath;
      ctx.shadowColor = "#fff";
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);

      noiseTimer += 0.04;
      const breath = Math.pow((Math.sin(noiseTimer) + 1) / 2, 2);

      particles.forEach((p) => {
        p.update(breath);
        p.draw(breath);
      });

      drawCore(breath);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    
    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const hoverRef = useRef(isHovering);
  useEffect(() => {
    hoverRef.current = isHovering;
  }, [isHovering]);

  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dx = e.clientX - width / 2;
    const dy = e.clientY - height / 2;
    const mouseThreshold = 220;
    const hovering = Math.sqrt(dx * dx + dy * dy) < mouseThreshold;
    
    if (hovering !== isHovering) {
      setIsHovering(hovering);
    }
  };

  const handleRegister = async () => {
    if (username && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("两次输入的密码不一致");
        return;
      }
      try {
        const data = await registerUser(username, password);
        if (data.access_token) {
          localStorage.setItem("is_logged_in", "true");
          localStorage.setItem("access_token", data.access_token);
          navigate("/");
        } else {
          alert("注册失败");
        }
      } catch (error) {
        alert("注册失败：" + error.message);
      }
    } else {
      alert("请填写所有字段");
    }
  };

  return (
    <div className="login-page" onMouseMove={handleMouseMove}>
      <div className="timestamp">{timeStr}</div>
      <canvas ref={canvasRef} className="sand-canvas"></canvas>

      <div className={`login-form ${isHovering ? "visible" : ""}`} style={{ padding: "35px" }}>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <div className="label">Identity (Email)</div>
          <input
            type="text"
            placeholder=" "
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <div className="label">Access Code</div>
          <input
            type="password"
            placeholder=" "
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <div className="label">Confirm Code</div>
          <input
            type="password"
            placeholder=" "
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleRegister}>
          CREATE ACCOUNT
        </button>
        <div style={{ marginTop: "16px", textAlign: "center", fontSize: "12px" }}>
          <Link to="/login" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Already have an account? Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
