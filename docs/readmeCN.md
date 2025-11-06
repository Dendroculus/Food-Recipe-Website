[EN](../README.md) | CN

<h1 align="center"> 🍳 CELESTIAL — 您的现代美食与食谱网站模板 🍽️ </h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/许可证-MIT-green?style=flat-square" alt="许可证: MIT">
  <img src ="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap" alt="Bootstrap">
</p>

<p align="center">
  <em>一个简洁、轻量且现代化的起点，适用于您的美食博客或食谱收藏。灵感来源于 Jamie Oliver 网站等优雅且功能性的设计。</em>
</p>

---

## ⚠️ 免责声明

本项目中使用的一些图片来源于 Google 图片，仅用于教育和演示目的。所有权利和署名均属于其各自所有者。无意侵犯任何版权。

## 📌 关于本项目

**CELESTIAL** 是一个极简的单页网站模板，完全使用 **HTML 和 CSS** 构建。它最初是一个学习练习项目，旨在探索简洁的导航模式，并为任何想要在线分享烹饪创意的人提供一个简单而美观的基础。

无论您是分享家庭食谱的家庭厨师、记录美食冒险的美食博主，还是只需要一个简单的作品集，CELESTIAL 都提供了一个优雅的起点。它具有响应式的三栏导航栏和仅使用 CSS 实现的悬停下拉菜单——无需 JavaScript！

---

## ✨ 主要特点

-   **现代导航栏** 🧭：简洁的三栏布局（左侧链接、中间标题/Logo、右侧图标），可平滑适应不同屏幕尺寸。
-   **纯 CSS 下拉菜单** 💧：为“食谱”链接提供轻量级的悬停下拉菜单，保持快速和简单。
-   **语义化与整洁的 HTML** 📄：结构良好、易于阅读和理解的 `index.html` 文件。
-   **极简且有组织的 CSS** 🎨：单一的 `styles.css` 文件，带有清晰的注释，使自定义变得简单明了。
-   **轻量与快速** ⚡：未使用 JavaScript 或重型框架构建，以获得最佳性能。
-   **易于定制** 🔧：设计为一个灵活的基础模板，供您添加独特的风格和内容。

---

## 🚀 在线演示与预览

要在本地预览模板：
1.  克隆此仓库。
2.  直接在您的网页浏览器中打开 `index.html` 文件。

---

## ⚙️ 开始使用与本地开发

想要修改代码吗？方法如下：

1.  **克隆仓库：**
    ```bash
    git clone https://github.com/Dendroculus/Food-Recipe-Website.git
    ```
2.  **进入项目目录：**
    ```bash
    cd Food-Recipe-Website
    ```
3.  在浏览器中 **打开 `index.html`** 查看模板。

为了获得更流畅的开发体验并启用 **实时重载**（保存更改时自动更新浏览器）：

-   **使用 VS Code**：安装 "Live Server" 扩展。右键单击 `index.html` 并选择 "Open with Live Server"。
-   **使用 Python 3**：在终端中运行 `python -m http.server 8000` 并在浏览器中打开 `http://localhost:8000`。

---

## 📂 项目结构

这是一个临时结构；名称稍后可能会更改：

```
Food-Recipe-Website/
├── index.html      # 主要 HTML 结构和内容
├── styles.css      # 所有 CSS 样式
├── assets/         # 存放图片和图标的文件夹
│   └── ...
└── font/           # 存放本地字体文件的文件夹 (例如 Montserrat)
    └── ...
```

---

## 🧩 如何使用与定制

让 CELESTIAL 成为您自己的网站非常简单：

1.  **更改标题/Logo**：编辑 `index.html` 中 `<li class="celestial">...</li>` 内的文本。您可以将 `CELESTIAL 💫` 替换为您的网站名称，或使用 `<img>` 标签添加 Logo。
2.  **更新左侧导航链接**：修改 `<ul class="left">...</ul>` 中的 `<a>` 标签。
3.  **更新右侧图标/链接**：更改 `<ul class="right">...</ul>` 中的 `<img>` 标签。考虑使用内联 SVG 以获得更好的质量和样式选项。
4.  **编辑下拉菜单项**：更新 `<ul class="recipes-dropdown">...</ul>` 中的列表项 (`<li>`)。
5.  **自定义样式**：打开 `styles.css` 并调整颜色、字体、间距等。该模板在本地使用 *Montserrat* 字体——请确保它位于 `/font` 文件夹中，或通过 CSS `@import` 切换到网络字体。

---

## 🤝 如何贡献

有想法或发现错误？欢迎贡献！

1.  Fork 本仓库。
2.  创建您的功能分支 (`git checkout -b feature/AmazingFeature`)。
3.  提交您的更改 (`git commit -m "Add some AmazingFeature"`)。
4.  推送到分支 (`git push origin feature/AmazingFeature`)。
5.  创建一个 Pull Request，并清晰描述您的更改。

*如果您进行了 UI 更改，请附上截图！*

---

## 📄 许可证

本项目采用 **MIT 许可证**。详见 [LICENSE](LICENSE) 文件。

---

## 👤 贡献者

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Dendroculus">
        <img src="https://github.com/Dendroculus.png?size=100" width="100" height="100" alt="Hans 展豪" />
      </a>
      <br />
      <a href="https://github.com/Dendroculus"><strong>Hans 展豪</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Jess2Jes">
        <img src="https://github.com/Jess2Jes.png?size=100" width="100" height="100" alt="Jess2Jes" />
      </a>
      <br />
      <a href="https://github.com/Jess2Jes"><strong>Jess2Jes</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Solynixx">
        <img src="https://github.com/Solynixx.png?size=100" width="100" height="100" alt="Solynixx" />
      </a>
      <br />
      <a href="https://github.com/Solynixx"><strong>Solynixx</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/StevNard">
        <img src="https://github.com/StevNard.png?size=100" width="100" height="100" alt="StevNard" />
      </a>
      <br />
      <a href="https://github.com/StevNard"><strong>StevNard</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Milkdrinker-creator">
        <img src="https://github.com/Milkdrinker-creator.png?size=100" width="100" height="100" alt="Milkdrinker-creator" />
      </a>
      <br />
      <a href="https://github.com/Milkdrinker-creator"><strong>Milkdrinker-creator</strong></a>
    </td>
  </tr>
</table>
