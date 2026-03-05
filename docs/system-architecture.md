# Ai-Studio 系统架构设计文档

## 1. 架构概述

Ai-Studio 采用了经典的前后端分离架构，整体由 **React (Vite) 前端** 和 **FastAPI 后端** 组成。
系统支持本地集群（ComfyUI）和云端（ModelScope）双引擎执行 AI 图像生成任务，并提供了实时队列状态监控、任务记录管理、用户认证及 WebSocket 双向通信。

### 核心技术栈
- **前端**: React 18, React Router, Vite, 原生 CSS, Three.js (3D 预览)
- **后端**: FastAPI, Uvicorn, SQLAlchemy, HTTPX (异步请求), Pydantic
- **认证**: JWT (python-jose), bcrypt (passlib)
- **数据库**: SQLite (可切换 PostgreSQL)
- **通信**: RESTful API, WebSocket (状态与进度广播)
- **依赖服务**: 本地 ComfyUI 节点集群 (多卡负载均衡), ModelScope API (云端)

---

## 2. 前端架构 (`src/`)

前端为单页应用（SPA），按照功能模块进行组件化拆分，包含完整的用户认证流程。

### 2.1 目录结构
```text
src/
├── api/                # API 请求封装
│   ├── auth.js         # 用户认证 (登录/注册/获取当前用户)
│   ├── client.js       # 基础请求封装
│   ├── generation.js   # 图像生成相关请求
│   ├── history.js      # 历史记录管理
│   └── system.js       # 系统配置
├── components/         # UI 组件
│   ├── angle/          # 角度控制面板组件
│   │   ├── AngleControls.jsx     # 相机参数控制器
│   │   ├── AngleHistoryGrid.jsx  # 历史网格
│   │   ├── AngleLightbox.jsx     # 图片灯箱预览
│   │   ├── AngleThreeView.jsx    # Three.js 3D 相机预览
│   │   └── AngleUploadPanel.jsx  # 图片上传面板
│   ├── enhance/        # 细节增强面板组件
│   │   ├── EnhanceControls.jsx
│   │   ├── EnhanceHistoryGrid.jsx
│   │   ├── EnhanceLightbox.jsx
│   │   ├── EnhanceResultPanel.jsx
│   │   └── EnhanceUploadPanel.jsx
│   ├── klein/          # 图片编辑面板组件
│   │   ├── KleinControls.jsx
│   │   ├── KleinHistoryGrid.jsx
│   │   ├── KleinLightbox.jsx
│   │   ├── KleinResultPanel.jsx
│   │   └── KleinUploadSlots.jsx
│   ├── zimage/         # 文生图面板组件
│   │   ├── ZImageHistoryCard.jsx
│   │   ├── ZImageHistoryGrid.jsx
│   │   ├── ZImageLightbox.jsx
│   │   └── ZImageToolbar.jsx
│   ├── NanoMonitor.jsx # 侧边栏微型监控器组件
│   ├── Sidebar.jsx     # 全局侧边栏导航 (含退出登录)
│   └── TokenModal.jsx  # 全局 Token 设置弹窗
├── pages/              # 路由页面
│   ├── LoginPage.jsx       # 登录页 (Canvas 粒子动画)
│   ├── RegisterPage.jsx    # 注册页 (Canvas 粒子动画)
│   ├── StudioShellPage.jsx # 应用壳层及路由分发
│   ├── AnglePage.jsx       # 角度生成页面
│   ├── EnhancePage.jsx     # 增强生成页面
│   ├── KleinPage.jsx       # 图片编辑页面
│   └── ZImagePage.jsx      # 文生图页面
├── styles/             # 样式文件
│   ├── index.css       # 主应用样式
│   └── login.css       # 登录/注册页专属样式
├── App.jsx             # 主路由配置 (含 PrivateRoute 鉴权)
└── main.jsx            # React 入口
```

### 2.2 核心机制

#### 路由与鉴权
- 使用 `react-router-dom` 进行全局路由管理
- `PrivateRoute` 组件包裹受保护路由，检查 `localStorage.is_logged_in` 状态
- 未登录用户自动重定向至 `/login`
- 登录成功后将 `access_token` 存入 LocalStorage

#### 状态同步
- 通过定时器轮询 (`/api/queue_status`) 结合 WebSocket (`/ws/stats`)，双管齐下保持客户端队列人数、在线人数和云端生成进度的实时同步
- 单页内通过状态 (`activeTab`) 切换不同功能子页面，保持 WebSocket 连接和应用状态的连续性

#### 配置隔离
- Token 区分本地缓存（LocalStorage）和全局共享（`/api/config/token`），保障灵活性

---

## 3. 后端架构 (`server/`)

后端采用分层架构设计，职责划分清晰，易于扩展。

### 3.1 目录结构
```text
server/
├── core/
│   ├── database.py       # SQLAlchemy 数据库引擎与会话管理
│   └── state.py          # 全局应用状态 (锁, 队列, 负载记录)
├── routes/               # API 路由控制层
│   ├── auth.py           # 用户认证路由 (注册/登录/获取当前用户)
│   ├── cloud.py          # ModelScope 云端调用相关路由
│   ├── common.py         # 基础路由 (首页, 上传, 队列状态, 查看图片)
│   ├── config.py         # Token 配置路由
│   ├── generation.py     # 本地 ComfyUI 生成路由
│   └── websocket.py      # WebSocket 连接端点
├── services/             # 核心业务逻辑层
│   ├── auth_service.py   # 认证服务 (密码哈希, JWT 签发/验证)
│   ├── cloud_service.py  # 云端任务分发与异步轮询机制
│   ├── comfy_service.py  # 本地 ComfyUI 交互 (动态注参, 负载均衡, 结果搬运)
│   ├── config_service.py # 配置读写管理
│   ├── history_service.py# 生成历史记录管理 (JSON)
│   └── websocket_manager.py # WebSocket 连接池管理及广播
├── app.py                # FastAPI 实例装配 (工厂模式)
├── config.py             # 环境变量与路径常量 (含 JWT/DB 配置)
├── models.py             # SQLAlchemy ORM 模型 (User)
└── schemas.py            # Pydantic 数据验证模型
```

### 3.2 核心服务设计

#### 用户认证 (`auth_service` + `routes/auth`)
- **密码存储**: 使用 bcrypt 算法对密码进行单向哈希存储
- **JWT 签发**: 登录/注册成功后签发 JWT Token，有效期 7 天（可配置）
- **Token 验证**: 通过 `HTTPBearer` 中间件提取 Token，解码后获取用户 ID
- **数据模型**: User 表包含 id (UUID)、email、username、password_hash、avatar_url、created_at

#### 统一任务队列 (`core.state`)
- 使用单一全局队列 (`state.queue`) 管理所有生成任务（本地和云端）
- 利用 `threading.Lock` 控制队列计数和本地历史文件的安全读写
- 每个任务进入队列时分配唯一 `task_id`，完成后自动移出

#### 数据库 (`core.database`)
- 使用 SQLAlchemy ORM 管理数据库连接
- 默认 SQLite（`server/database.db`），支持通过环境变量 `DATABASE_URL` 切换 PostgreSQL
- `get_db()` 依赖注入函数提供请求级别的数据库会话

#### 本地生成 (`comfy_service`)
- 默认使用单一 ComfyUI 实例（`127.0.0.1:8188`）
- 支持通过环境变量 `COMFYUI_INSTANCES` 配置多实例负载均衡

#### 云端轮询引擎 (`cloud_service`)
- 使用 `httpx` 发起异步请求
- 针对耗时较长的生成任务实施 `asyncio.sleep` 轮询策略，避免阻塞 FastAPI 主线程
- 通过 WebSocket 实时下发当前进度（如 `Progress: 10/150`）

#### 静态资源托管
- `/output` 挂载生成结果目录
- `/static` 挂载 React 前端构建产物

---

## 4. 关键数据流

### 4.1 用户认证数据流
1. 用户在登录/注册页输入邮箱和密码
2. 前端调用 `/api/auth/login` 或 `/api/auth/register`
3. 后端验证凭据，签发 JWT Token
4. 前端将 Token 存入 LocalStorage，设置登录状态标记
5. 后续请求在 Header 中携带 `Authorization: Bearer <token>`
6. 受保护路由通过 `get_current_user` 依赖验证身份

### 4.2 图像生成数据流
1. 前端调用 `/api/generate`，携带 Prompt、参数及所选的 `workflow_json`
2. 后端记录 Task ID 并增加全局队列计数，根据引擎类型分发任务：
   - **本地引擎**: `comfy_service` 选择最闲置的 ComfyUI 节点，注入参数后提交，轮询 `/history` 直到完成
   - **云端引擎**: `cloud_service` 调用 ModelScope API，异步轮询任务状态，通过 WebSocket 推送进度
3. 生成完成后下载图片至 `/output`，写入 `history.json`
4. 通过 WebSocket 广播 `new_image` 事件，前端实时更新历史流

---

## 5. 存储设计

### 5.1 关系型数据库 (SQLite/PostgreSQL)
- **users 表**: 存储用户账号信息
  - `id`: UUID 主键
  - `email`: 邮箱（唯一索引）
  - `password_hash`: bcrypt 哈希后的密码
  - `username`: 用户名（默认取邮箱 @ 前缀）
  - `avatar_url`: 头像地址（可选）
  - `created_at`: 创建时间

### 5.2 文件存储
- **`history.json`**: 存储所有的生成记录（包含时间戳、提示词、图片路径、引擎类型、配置参数），采用列表倒序存储，限制最大条数（5000条）
- **`global_config.json`**: 存储全局默认的 Token 等系统配置
- **`output/`**: 存储生成完毕的图片缓存
- **`workflows/`**: 存储从 ComfyUI 导出的工作流配置文件
  - `Z-Image.json`: 文生图工作流
  - `Z-Image-Enhance.json`: 细节增强工作流
  - `Flux2-Klein.json`: 图片编辑工作流
  - `upscale.json`: 超分辨率工作流

---

## 6. 配置管理

### 6.1 环境变量
| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `COMFYUI_INSTANCES` | ComfyUI 实例地址列表（逗号分隔） | `127.0.0.1:8188` |
| `DATABASE_URL` | 数据库连接字符串 | `sqlite:///server/database.db` |
| `JWT_SECRET_KEY` | JWT 签名密钥 | `your-super-secret-jwt-key` |

### 6.2 JWT 配置
- **算法**: HS256
- **有效期**: 7 天（`JWT_ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7`）

---

## 7. 安全设计

### 7.1 已实现
- **密码安全**: bcrypt 哈希存储，不可逆
- **JWT 认证**: Bearer Token 机制，支持有效期控制
- **前端路由保护**: PrivateRoute 组件拦截未授权访问

### 7.2 待改进
- 当前 JWT 密钥为硬编码默认值，生产环境应通过环境变量注入安全密钥
- 可引入 Refresh Token 机制延长会话而无需频繁重新登录
- API 端点可增加速率限制（Rate Limiting）防止暴力破解

---

## 8. 未来演进建议

1. **历史记录迁移**: 将 `history.json` 迁移至数据库，关联用户 ID，实现多用户隔离
2. **任务队列引入**: 当前使用异步 Task 轮询，对于超大规模部署，建议引入 Celery + Redis 管理生成任务队列
3. **OAuth 社交登录**: 支持 GitHub、Google 等第三方登录
4. **RBAC 权限控制**: 引入角色（管理员/普通用户）和权限体系
5. **API 文档**: 利用 FastAPI 内置的 OpenAPI 自动生成交互式 API 文档
