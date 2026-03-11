# new-Ai-Studio 云服务器部署与环境配置

本文档说明在云服务器上部署 new-Ai-Studio 所需的环境与配置步骤。

---

## 一、环境要求

| 项目 | 要求 |
|------|------|
| 操作系统 | Linux（推荐 Ubuntu 20.04+ / CentOS 7+） |
| Python | 3.10 或以上 |
| Node.js | 20.19+ 或 22.12+（Vite 要求，用于前端构建） |
| 算法侧服务 | 与 `ALGO_SIDE_BASE_URL` 对应，如 ComfyUI 算法路由（默认端口 9001） |
| ComfyUI（可选） | 文生图等本地推理，默认 8188 端口 |

---

## 二、后端环境配置

### 2.1 创建 Python 虚拟环境（推荐）

```bash
cd /path/to/new-Ai-Studio
python3 -m venv venv
source venv/bin/activate   # Linux/Mac
# Windows: venv\Scripts\activate
```

### 2.2 安装后端依赖

```bash
pip install -r requirements.txt
```

若使用 Conda，可先创建环境再安装：

```bash
conda create -n Cheny python=3.10 -y
conda activate Cheny
pip install -r requirements.txt
```

### 2.3 环境变量

复制示例并编辑：

```bash
cp .env.example .env
vim .env   # 或 nano / 其他编辑器
```

**必须修改的项：**

- **`JWT_SECRET_KEY`**：生产环境务必改为随机长字符串，用于登录 Token 签名。
- **`ALGO_SIDE_BASE_URL`**：算法侧服务地址。  
  - 本机：`http://127.0.0.1:9001`  
  - 另一台机器：`http://算法机IP:9001`

**按需修改：**

- **`BACKEND_HOST` / `BACKEND_PORT`**：后端监听地址与端口（默认 `0.0.0.0:7860`）。
- **`COMFYUI_INSTANCES`**：ComfyUI 地址，多个用逗号分隔，如 `127.0.0.1:8188`。
- **`VIDEO_UPLOAD_DIR`**：视频上传目录；算法侧需能读此目录，同机可留空用默认。
- **`DATABASE_URL`**：数据库连接；留空则使用项目内 SQLite。

**启动前加载 .env：**

```bash
# 方式一：当前 shell 导出后启动
set -a && source .env && set +a && ./start.sh

# 方式二：先导出再启动
export $(grep -v '^#' .env | xargs)
./start.sh
```

---

## 三、前端环境配置

### 3.0 安装 Node.js 和 npm（若无系统包时）

需满足 **Node.js 20.19+ 或 22.12+**（Vite 要求）。

**方式一：系统包（有 root 时推荐）**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y nodejs npm
# 若版本过低，可用 NodeSource 安装 Node 22：
# curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
# sudo apt install -y nodejs
```

**方式二：本机预编译包（无需 root，当前环境已用此方式）**

若无法使用 `apt`，可将 Node.js 解压到 `/data` 后使用：

```bash
cd /data
curl -fsSL https://nodejs.org/dist/v22.22.0/node-v22.22.0-linux-x64.tar.xz -o node.tar.xz
tar -xJf node.tar.xz  # 解压时若有 ownership 警告可忽略
rm node.tar.xz
export PATH="/data/node-v22.22.0-linux-x64/bin:$PATH"
node -v   # 应显示 v22.22.0
npm -v
```

在项目目录下使用 Node/npm 前先执行一次：

```bash
source ./use-node.sh
```

或把 `export PATH="/data/node-v22.22.0-linux-x64/bin:$PATH"` 加入 `~/.bashrc`。

### 3.1 安装 Node 依赖并构建

```bash
# 若使用本机安装的 Node，先： source ./use-node.sh 或 export PATH="/data/node-v22.22.0-linux-x64/bin:$PATH"
npm install
npm run build
```

构建产物在 `static/react/`，由后端 FastAPI 直接托管，无需单独跑前端 dev server。

### 3.2 开发时（可选）

若在服务器上做前端开发，可同时跑：

- 后端：`uvicorn server.app:app --host 0.0.0.0 --port 7860`
- 前端：`npm run dev`（如 5173 端口，需通过 Nginx 或本机访问）

生产部署建议只使用 **后端 + 已构建的静态文件**。

---

## 四、生产环境启动方式

### 4.1 仅后端（前端已构建）

```bash
# 加载环境变量后启动
set -a && source .env && set +a
uvicorn server.app:app --host 0.0.0.0 --port 7860
```

若使用虚拟环境，先 `source venv/bin/activate`；若用 Conda，先 `conda activate Cheny`。

### 4.2 使用项目自带 start.sh（开发/简单部署）

`start.sh` 会同时启动后端和前端 dev server。若希望用环境变量控制端口，需要先改 `start.sh` 中的 `--port` 或在本机用 `.env` 中的 `BACKEND_PORT` 等（当前脚本写死 7860）。生产更推荐上面 4.1 的单一 uvicorn 方式。

### 4.3 使用 systemd 守护（推荐）

创建服务文件，例如 `/etc/systemd/system/ai-studio.service`：

```ini
[Unit]
Description=new-Ai-Studio Backend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/new-Ai-Studio
EnvironmentFile=/path/to/new-Ai-Studio/.env
ExecStart=/path/to/new-Ai-Studio/venv/bin/uvicorn server.app:app --host 0.0.0.0 --port 7860
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

然后：

```bash
sudo systemctl daemon-reload
sudo systemctl enable ai-studio
sudo systemctl start ai-studio
sudo systemctl status ai-studio
```

注意将 `WorkingDirectory`、`EnvironmentFile`、`ExecStart` 中的路径和 `User` 改为实际值；若用 Conda，`ExecStart` 可改为 `conda run -n Cheny uvicorn ...` 或写完整 Python 路径。

---

## 五、Nginx 反向代理（可选）

对外提供 80/443 时，可用 Nginx 反代到本机 7860：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:7860;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    location /ws {
        proxy_pass http://127.0.0.1:7860;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

如需 HTTPS，可使用 `certbot` 等配置 SSL。

---

## 六、与算法侧 / ComfyUI 的配合

- **算法侧（视频、图生等）**：必须单独部署并启动，保证 `ALGO_SIDE_BASE_URL` 可访问（如 `http://IP:9001`）。本后端会向该地址发请求。
- **ComfyUI**：文生图等依赖 ComfyUI 的接口，需保证 `COMFYUI_INSTANCES` 中的地址可访问。
- **视频上传目录**：若算法侧和本后端在同一台机器，可把 `VIDEO_UPLOAD_DIR` 设为算法侧能读的目录，或留空使用项目默认目录；若在不同机器，需通过共享存储或算法侧支持 URL 等方式对接。

---

## 七、环境变量速查

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `BACKEND_HOST` | 后端监听地址 | 脚本中多为 0.0.0.0 |
| `BACKEND_PORT` | 后端端口 | 7860 |
| `ALGO_SIDE_BASE_URL` | 算法侧 API 根地址 | http://127.0.0.1:9001 |
| `COMFYUI_INSTANCES` | ComfyUI 实例列表（逗号分隔） | 127.0.0.1:8188 |
| `VIDEO_UPLOAD_DIR` | 视频上传目录 | 项目 output/uploaded_video |
| `DATABASE_URL` | 数据库连接串 | 项目内 SQLite |
| `JWT_SECRET_KEY` | JWT 密钥 | 需在生产环境修改 |

---

## 八、常见问题

1. **前端打开是 “Frontend build missing”**  
   执行一次 `npm run build`，保证 `static/react/index.html` 存在。

2. **视频/图生接口 404 或连不上**  
   检查算法侧服务是否启动，以及 `ALGO_SIDE_BASE_URL` 是否可从运行后端的机器访问。

3. **登录或鉴权异常**  
   确认 `JWT_SECRET_KEY` 与当前环境一致，且未泄露；修改后需重启后端。

4. **上传或生成的文件找不到**  
   查看 `server/config.py` 中 `OUTPUT_DIR`、`VIDEO_UPLOAD_DIR` 的实际取值，并保证进程有读写权限。

5. **网页访问很慢**  
   若使用 `./start.sh` 会同时开 Vite 开发服务器（5173），开发模式未压缩、按需编译，会较慢。**生产访问建议**：先执行 `npm run build`，再用 **`./start-prod.sh`** 仅启动后端，只通过 **7860** 访问。后端会直接托管已构建的静态文件，首屏与资源加载会快很多。

完成以上配置后，在云服务器上即可通过 `http://服务器IP:7860`（或 Nginx 配置的域名）访问 new-Ai-Studio。
