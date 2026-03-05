# new-Ai-Studio
我的 AIGC 前端界面 设计

## Ai-Studio（React + FastAPI）

当前项目已完成前端组件化迁移，旧 `static/*.html` 承接层已移除。

### 目录结构

- `server/`: FastAPI 后端（路由、服务、配置）
- `src/`: React 前端（pages/components/api）
- `static/react/`: 前端构建产物（由 Vite 输出）

### 本地开发

1. 安装前端依赖

```bash
npm install
```

2. 启动后端（默认 `7860`）

```bash
python app.py
```

3. 启动前端开发服务器（默认 `5173`，已代理后端 API）

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

构建后访问后端根路径 `/`，会直接返回 `static/react/index.html`。
