#!/bin/bash

# 本地开发快速启动脚本
# 使用方法: ./quick-start.sh

echo "🚀 Portfolio 本地开发快速启动脚本"
echo "=================================="
echo ""

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null
then
    echo "❌ 错误：Node.js 未安装"
    echo "请访问 https://nodejs.org/ 下载并安装 Node.js"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"

# 检查 npm 是否安装
if ! command -v npm &> /dev/null
then
    echo "❌ 错误：npm 未安装"
    exit 1
fi

echo "✅ npm 版本: $(npm --version)"
echo ""

# 检查 node_modules 是否存在
if [ ! -d "node_modules" ]; then
    echo "📦 首次运行，正在安装依赖..."
    echo "这可能需要几分钟时间，请耐心等待..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo "✅ 依赖安装完成！"
    else
        echo "❌ 依赖安装失败，请检查网络连接"
        exit 1
    fi
else
    echo "✅ 依赖已安装"
fi

echo ""
echo "🎨 正在启动开发服务器..."
echo "请稍候，首次编译可能需要 30-60 秒..."
echo ""
echo "服务器启动后，浏览器会自动打开"
echo "如果没有自动打开，请访问："
echo "  👉 http://localhost:3000/devportfolio.github.io"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# 启动开发服务器
npm start
