#!/bin/bash
# 将本机安装的 Node.js 加入当前 shell 的 PATH，便于使用 npm / node
# 使用: source ./use-node.sh  或  . ./use-node.sh
if [ -d "/data/node-v22.22.0-linux-x64/bin" ]; then
  export PATH="/data/node-v22.22.0-linux-x64/bin:$PATH"
  echo "已使用 Node $(node -v) / npm $(npm -v)"
else
  echo "未找到 /data/node-v22.22.0-linux-x64，请先安装 Node.js"
  return 1 2>/dev/null || exit 1
fi
