@echo off
REM 本地开发快速启动脚本 (Windows)
REM 使用方法: 双击运行或在 CMD 中执行 quick-start.bat

echo.
echo 🚀 Portfolio 本地开发快速启动脚本
echo ==================================
echo.

REM 检查 Node.js 是否安装
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 错误：Node.js 未安装
    echo 请访问 https://nodejs.org/ 下载并安装 Node.js
    pause
    exit /b 1
)

echo ✅ Node.js 已安装
node --version

REM 检查 npm 是否安装
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 错误：npm 未安装
    pause
    exit /b 1
)

echo ✅ npm 已安装
npm --version
echo.

REM 检查 node_modules 是否存在
if not exist "node_modules" (
    echo 📦 首次运行，正在安装依赖...
    echo 这可能需要几分钟时间，请耐心等待...
    call npm install
    
    if %ERRORLEVEL% EQU 0 (
        echo ✅ 依赖安装完成！
    ) else (
        echo ❌ 依赖安装失败，请检查网络连接
        pause
        exit /b 1
    )
) else (
    echo ✅ 依赖已安装
)

echo.
echo 🎨 正在启动开发服务器...
echo 请稍候，首次编译可能需要 30-60 秒...
echo.
echo 服务器启动后，浏览器会自动打开
echo 如果没有自动打开，请访问：
echo   👉 http://localhost:3000/devportfolio.github.io
echo.
echo 按 Ctrl+C 停止服务器
echo.

REM 启动开发服务器
call npm start

pause
