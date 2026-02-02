# 🖥️ 本地开发 - 图文教程

## 📥 步骤 1: 下载代码

### 方式 A: 使用 Git（推荐）

1. 打开终端/命令提示符
2. 运行以下命令：

```bash
git clone https://github.com/Davidsea-z/devportfolio.github.io.git
cd devportfolio.github.io
```

### 方式 B: 下载 ZIP

1. 访问 https://github.com/Davidsea-z/devportfolio.github.io
2. 点击绿色的 "Code" 按钮
3. 选择 "Download ZIP"
4. 解压到你想要的位置
5. 在终端中进入该文件夹

---

## 🚀 步骤 2: 快速启动

### Windows 用户 💻

1. 找到 `quick-start.bat` 文件
2. **双击运行**
3. 等待自动安装和启动
4. 浏览器会自动打开网站

### Mac 用户 🍎

1. 打开终端（Terminal）
2. 进入项目文件夹：
   ```bash
   cd devportfolio.github.io
   ```
3. 运行启动脚本：
   ```bash
   ./quick-start.sh
   ```
4. 浏览器会自动打开网站

### Linux 用户 🐧

同 Mac 用户步骤

---

## 🎨 步骤 3: 查看效果

启动成功后，你会看到：

```
Compiled successfully!

You can now view portfolio in the browser.

  Local:            http://localhost:3000/devportfolio.github.io
  On Your Network:  http://192.168.x.x:3000/devportfolio.github.io
```

**访问地址:** http://localhost:3000/devportfolio.github.io

---

## ✨ 你会看到什么？

### 🌊 新功能：动态海浪背景
- 平滑的缩放动画（20 秒循环）
- 优雅的波浪效果（8 秒循环）
- 深色渐变遮罩，文字清晰可读

### 💫 保留功能
- 粒子动画背景
- 个人介绍和技能展示
- 项目作品集
- 响应式设计

---

## 🛠️ 步骤 4: 修改代码

### 推荐编辑器

1. **VS Code** (推荐) 
   - 下载: https://code.visual.com/
   - 免费、轻量、插件丰富

2. **WebStorm**
   - 功能强大的 IDE
   - 学生可免费使用

3. **Sublime Text**
   - 轻量快速

### 打开项目

1. 打开你的编辑器
2. File → Open Folder
3. 选择 `devportfolio.github.io` 文件夹

### 重要文件位置

```
📁 devportfolio.github.io/
  📁 src/
    📁 components/
      📁 Home/
        📄 Home.js                  ← 首页主要内容
        📄 AnimatedBackground.js    ← 🆕 动画背景
        📄 AnimatedBackground.css   ← 🆕 背景样式
    📁 Assets/
      🖼️ ocean-waves.jpg           ← 🆕 海浪背景图
    📄 style.css                   ← 全局样式
```

---

## 🔥 热重载

**自动刷新！** 修改代码后：

1. 保存文件 (Ctrl+S / Cmd+S)
2. 浏览器会自动刷新
3. 立即看到效果

**无需重启服务器！**

---

## 🎯 常用修改

### 修改个人信息

编辑 `src/components/Home/Home.js`:

```javascript
<h1 className="heading-name">
  I'M
  <strong className="main-name"> 你的名字 </strong>
</h1>
```

### 调整背景动画速度

编辑 `src/components/Home/AnimatedBackground.css`:

```css
.animated-background-image {
  /* 改变这个数字调整速度（秒） */
  animation: slowZoom 20s ease-in-out infinite;
}
```

### 更换背景图片

1. 把新图片放到 `src/Assets/` 文件夹
2. 在 `AnimatedBackground.css` 中修改：
   ```css
   background-image: url('../../Assets/你的图片.jpg');
   ```

---

## 🛑 停止服务器

在运行服务器的终端窗口：

- Windows: 按 `Ctrl + C`
- Mac/Linux: 按 `Ctrl + C`

---

## 📦 构建生产版本

准备部署时：

```bash
npm run build
```

生成的文件在 `build/` 文件夹，可以上传到任何服务器。

---

## ❓ 遇到问题？

### 端口被占用

**错误提示：**
```
Something is already running on port 3000
```

**解决方法：**
- 输入 `Y` 使用其他端口
- 或关闭占用 3000 端口的程序

### 安装依赖失败

**解决方法：**
```bash
# 清除缓存
npm cache clean --force

# 重新安装
npm install
```

### 编译错误

**解决方法：**
```bash
# 检查 Node.js 版本
node --version  # 应该 >= 14.0.0

# 重新安装依赖
rm -rf node_modules
npm install
```

---

## 📚 更多帮助

- [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md) - 详细开发指南
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署指南
- [README.md](./README.md) - 项目说明

---

## 🎉 开始创作吧！

现在你已经准备好了：

✅ 服务器在运行  
✅ 浏览器显示网站  
✅ 代码可以随时修改  
✅ 保存即可看到效果  

**尽情创作你的作品集吧！** 🚀

---

需要帮助？查看详细文档或在 GitHub Issues 提问！
