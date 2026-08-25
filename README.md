# 李赵赫 · 个人网站（四季 · 二十四节气版）

青岛农业大学 · 农业资源与环境 · 目标保研（推免）· AI 爱好者

一个以「四季为大板块、二十四节气为小板块」设计的静态个人网站。

## 文件结构
```
portfolio/
├── index.html          首页（四季节气入口 + 三个关键词）
├── resume.html         完整交互简历（四季节气 · PPT 式，可点击展开）
├── projects.html       项目经历（待补充）
├── certificates.html   证书墙（11 项 AI 技能认证，可点击放大）
├── about.html          关于我（教育 / 特质 / AI 兴趣 / 技能 / 规划）
├── contact.html        联系我
├── assets/
│   ├── style.css       全站共享样式（四季节气设计系统）
│   └── js/main.js      全站脚本（导航 / 飘落元素 / 灯箱等）
└── 证书图片/            证书图片
```

## 本地预览
```
cd portfolio
python -m http.server 8000
```
浏览器打开 http://127.0.0.1:8000/index.html

## 发布到 GitHub Pages（无需安装 git）
1. 注册并登录 [github.com](https://github.com)（免费）
2. 右上角 + → **New repository** → 名称填 `portfolio`，选 **Public**，创建
3. 进入仓库 → **Add file → Upload files** → 把 `portfolio` 文件夹**里面的所有内容**拖进去 → Commit
4. 仓库 **Settings → Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、`/(root)` → **Save**
5. 等约 1 分钟，访问 `https://你的用户名.github.io/portfolio/`
   （若仓库名直接叫 `用户名.github.io`，则访问 `https://你的用户名.github.io/`，无需 `/portfolio/`）

## 发布到 Gitee（国内访问更快）
1. 注册并实名认证 [gitee.com](https://gitee.com)
2. 新建仓库 `portfolio`（公开）→ 上传全部文件
3. 仓库 **服务 → Gitee Pages** → 按提示部署

## 内容维护
- 各页面内容均为中文静态 HTML，直接编辑对应 `.html` 即可
- 改配色：编辑 `assets/style.css` 顶部的 `--spring / --summer / --autumn / --winter`
- 改证书：替换 `证书图片/` 下的图片，并同步修改 `certificates.html` 与 `resume.html` 中 `bai-lu` 的 `img` 路径
- 全站导航统一在顶部 `.site-nav`，增删页面后记得同步每个页面的导航

## 说明
- 项目 / 实习 / 竞赛等经历为【待补】占位，后续补充
- 四六级、绩点、排名等按实际情况更新
