#!/bin/bash

# Ai-Studio 一键启动脚本（前端 + 后端）
# 用法: ./start.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "========================================"
echo "  Ai-Studio 启动脚本"
echo "========================================"
echo ""

# 用于存储子进程 PID
BACKEND_PID=""
FRONTEND_PID=""

# 清理函数：Ctrl+C 时停止所有服务
cleanup() {
  echo ""
  echo "正在停止服务..."
  if [ -n "$BACKEND_PID" ]; then
    kill $BACKEND_PID 2>/dev/null || true
    echo "  后端已停止"
  fi
  if [ -n "$FRONTEND_PID" ]; then
    kill $FRONTEND_PID 2>/dev/null || true
    echo "  前端已停止"
  fi
  exit 0
}

trap cleanup SIGINT SIGTERM

# ========== 启动后端 ==========
echo -e "${YELLOW}[1/2] 启动后端服务...${NC}"

# 使用 conda 环境运行 uvicorn
# 直接通过 uvicorn 命令启动 FastAPI 应用，不再需要外层的 app.py
conda run -n Cheny uvicorn server.app:app --host 0.0.0.0 --port 7860 &
BACKEND_PID=$!
echo -e "${GREEN}✓ 后端已启动 (PID: $BACKEND_PID) - http://localhost:7860${NC}"

# 等待后端就绪
sleep 2

# ========== 启动前端 ==========
echo ""
echo -e "${YELLOW}[2/2] 启动前端服务...${NC}"

if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}安装前端依赖...${NC}"
  npm install
fi

# 启动 Vite 开发服务器
npm run dev &
FRONTEND_PID=$!

echo ""
echo "========================================"
echo "  服务已就绪"
echo "========================================"
echo "  前端(热更新): http://localhost:5173"
echo "  后端(API服务): http://localhost:7860"
echo "========================================"
echo "  按 Ctrl+C 停止所有服务"
echo ""

# 等待任一进程退出
wait
