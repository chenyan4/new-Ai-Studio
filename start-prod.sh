#!/bin/bash
# Ai-Studio 生产模式启动（仅后端 + 已构建前端，访问更快）
# 用法: ./start-prod.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "========================================"
echo "  Ai-Studio 生产模式（仅后端）"
echo "========================================"

# 加载环境变量
if [ -f ".env" ]; then
  set -a && source .env && set +a
  echo -e "${GREEN}✓ 已加载 .env${NC}"
fi

# 若无前端构建产物则先构建
if [ ! -f "static/react/index.html" ]; then
  echo -e "${YELLOW}未检测到前端构建，正在执行 npm run build ...${NC}"
  npm run build
  echo -e "${GREEN}✓ 前端构建完成${NC}"
fi

# 启动后端（同时托管前端静态资源，访问 http://IP:7860 即可看到完整页面）
echo -e "${YELLOW}启动后端 (http://0.0.0.0:7860) ...${NC}"
if [ -f "venv/bin/activate" ]; then
  . venv/bin/activate
fi

exec uvicorn server.app:app --host 0.0.0.0 --port 7860
