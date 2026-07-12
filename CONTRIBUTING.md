# 4i.codes 文档站开发指南

面向后续维护此项目的**开发者/AI Agent**。想改文档、改样式、加页面、调侧栏,读这份即可。

---

## 目录

- [项目定位](#项目定位)
- [目录结构与职责](#目录结构与职责)
- [常见改动怎么做](#常见改动怎么做)
  - [改文档正文](#改文档正文)
  - [新增一篇文档](#新增一篇文档)
  - [调整侧栏顺序/图标](#调整侧栏顺序图标)
  - [改顶栏导航/logo/主题色](#改顶栏导航logo主题色)
  - [改字体](#改字体)
  - [替换/新增图片](#替换新增图片)
  - [加下载按钮/文件](#加下载按钮文件)
  - [改页脚版权/致谢](#改页脚版权致谢)
  - [处理暗色模式](#处理暗色模式)
- [路径规则(重要)](#路径规则重要)
- [本地开发](#本地开发)
- [构建与部署](#构建与部署)
- [已知坑](#已知坑)
- [约定](#约定)

---

## 项目定位

- **框架**:VuePress 2 (`2.0.0-rc.26`) + `vuepress-theme-hope` (`2.0.0-rc.102`)
- **来源**:fork 自 [`1198722360/rcdoc`](https://github.com/1198722360/rcdoc),完成品牌替换到 4i.codes
- **部署路径**:`4i.codes/doc/*`(`config.ts` 里 `base: "/doc/"`)
- **主色**:米黄墨调(paper `#efe8df` / ink `#161311`),不再是原 rcdoc 的橙色
- **字体**:JetBrains Mono(英文/代码)+ HarmonyOS Sans SC(中文),本地加载
- **暗色模式**:已禁用(`darkmode: "disable"`)。顶栏那个太阳图标仅做占位

---

## 目录结构与职责

```
docs/
├── package.json                    # yarn 4 锁定, 本地无 yarn 就删 packageManager 字段跑 yarn 1.x
├── DEPLOY.md                       # 部署到 4i.codes/doc 的说明
├── CONTRIBUTING.md                 # 本文件
├── src/
│   ├── README.md                   # 文档站首页 (Hero + Features + Integration)
│   ├── docs/                       # 所有文档正文, 侧栏结构由 sidebar.ts 定
│   │   ├── quick_start/
│   │   │   ├── intro.md            # 简介 + 独家优势 + 联系我们(6 张卡)
│   │   │   ├── recharge.md
│   │   │   ├── apikey.md
│   │   │   ├── models.md
│   │   │   └── normal.md
│   │   ├── cli_config/
│   │   │   ├── ccs.md              # CC-Switch 配置
│   │   │   ├── claudecode.md
│   │   │   ├── codex.md
│   │   │   ├── gemini.md
│   │   │   └── wsl.md
│   │   ├── draw/
│   │   │   ├── README.md
│   │   │   ├── images-generations.md
│   │   │   ├── gemini.md
│   │   │   └── tasks.md
│   │   ├── extension/
│   │   │   ├── cherrystudio.md
│   │   │   ├── curl.md
│   │   │   ├── hermes.md
│   │   │   └── opencode.md
│   │   └── questions/
│   │       └── codex.md            # Codex 常见问题 + 下载按钮
│   └── .vuepress/
│       ├── config.ts               # ★ VuePress 主配置 (base、title、head、bundler proxy)
│       ├── theme.ts                # ★ hope 主题配置 (logo/navbar 禁用/footer/暗色禁用)
│       ├── sidebar.ts              # ★ 左侧栏 5 大分类结构
│       ├── client.ts               # 全站全局注入 <TopBar />
│       ├── components/
│       │   ├── TopBar.vue          # ★ 4i.codes 胶囊顶栏 (每一页都有)
│       │   ├── ApiTester.vue       # 内嵌 API 测试 (原 rcdoc 组件, 未大动)
│       │   ├── CodexDownload.vue   # Codex zip 下载卡片
│       │   └── ModelsPlaza.vue     # 模型广场卡片
│       ├── styles/
│       │   ├── palette.scss        # 主题色 $theme-color = #2a221a (墨)
│       │   ├── config.scss         # 同 palette, hope 主题另一个入口
│       │   └── index.scss          # ★ 全局 CSS: 本地字体 + 变量 + 覆盖胶囊 UI
│       └── public/                 # 静态资源, 部署后带 /doc/ 前缀
│           ├── logo.png            # 品牌 logo (4i.codes)
│           ├── favicon.png         # 与 logo 一致
│           ├── favicon.ico         # 老 rcdoc 遗留
│           ├── HarmonyOS_SansSC_Regular.ttf
│           ├── JetBrainsMono-Regular.ttf
│           ├── wsl2-logo.svg       # WSL 教程用
│           └── assets/
│               ├── file/           # 可下载文件 (zip 等)
│               ├── icon/           # 组件用小图标
│               └── image/          # md 里引用的教程截图, 按 5 大分类分子目录
```

`★` 是**高频修改点**,改这些里面的东西要清楚它们的作用域。

---

## 常见改动怎么做

### 改文档正文

- 直接编辑 `src/docs/**/*.md`,支持标准 GFM + hope 扩展(alert、tabs、tasklist、包含文件等)
- **不用**改 sidebar.ts(除非新增或改路径)
- **frontmatter 常用键**:
  ```yaml
  ---
  title: 页面标题             # 会覆盖 sidebar 里的 text
  icon: iconify-set:name      # iconify 图标, 默认 prefix 是 fa6-solid
  order: 1                    # 同级排序权重
  footer: false               # 禁用页脚
  ---
  ```

### 新增一篇文档

**假设**:在快速开始里加一篇 `billing.md`(账单说明)。

**3 步**:

1. 建文件 `src/docs/quick_start/billing.md`,写 frontmatter + 内容
2. 打开 `src/.vuepress/sidebar.ts`,在 `quick_start` 那一组的 `children` 里加:
   ```ts
   {
     text: "账单说明",
     icon: "mdi:receipt-text",
     link: "billing.md",
   },
   ```
3. 存盘,dev 会热更新;`yarn docs:build` 输出到 dist

### 调整侧栏顺序/图标

只编辑 `src/.vuepress/sidebar.ts`。
- 顶层 5 组:`text` `icon` `prefix` `children`(子页数组)。**不要**动 `prefix`,那是文件系统的目录名
- 每个子页:`text` `icon` `link`(文件名相对 prefix)
- 图标搜索:https://icones.js.org(默认 prefix 是 `fa6-solid`,想用别的集就写 `mdi:xxx` 全名)

### 改顶栏导航/logo/主题色

- **顶栏 5 个 tab / logo / 高亮 / 主题按钮**:编辑 `src/.vuepress/components/TopBar.vue`
  - tab 是 `<a>` 硬编码;`.is-active` 类高亮当前所在
  - logo 图 `<img src="/doc/logo.png">` — **必须**带 `/doc/` 前缀(base)
  - 想加/删导航项直接改模板 + 记得 `.is-active` 逻辑同步
- **主色**:
  - hope 主题色:`src/.vuepress/styles/palette.scss` 的 `$theme-color`
  - 我们自定义米黄墨调:`src/.vuepress/styles/index.scss` 里 `:root { --paper --ink --rc-brand ... }`
  - **不要**改 `--rc-brand-*` 变量名(原 rcdoc 组件 CodexDownload/ApiTester/ModelsPlaza 依赖)

### 改字体

- 字体文件放 `public/`,已有 `HarmonyOS_SansSC_Regular.ttf` `JetBrainsMono-Regular.ttf`
- 声明在 `styles/index.scss` 顶部的 `@font-face`,注意 `url("/doc/xxx.ttf")` **必须**带 base
- body 用:`--font-family-body`
- 代码块用:`--font-family-code`

### 替换/新增图片

**放在**:`src/.vuepress/public/assets/image/<分类>/xxx.webp`(**分类目录名必须**和 sidebar 分类一致:`quick_start` `cli_config` `draw` `extension` `questions`)

**在 md 里引用**:

- **markdown 语法(推荐)**:
  ```markdown
  ![](/assets/image/cli_config/rc-1.webp)
  ```
  VuePress 自动补 base,渲染成 `/doc/assets/...` — **不用**手动加 `/doc/`

- **HTML 标签(需要控制 width 时)**:
  ```html
  <img src="/doc/assets/image/cli_config/rc-1.webp" width="600" />
  ```
  ★ **必须**手动加 `/doc/`,VuePress 不处理原生 HTML 的路径

**警告**:如果只见到 markdown `![](...)` 忘了带 `/doc/`,能正常显示;如果是 `<img src="/assets/...">`(HTML),部署后 404。全项目已修好,以后**新加 HTML img 别忘了 /doc/**。

### 加下载按钮/文件

**文件**放 `src/.vuepress/public/assets/file/<主题>/xxx.zip`

**使用现成组件**(推荐):

```md
<CodexDownload
  version="26.5707.31428"
  summary="已适配最新的 GPT-5.6 系列模型"
  fileName="vscode-codex-replace.zip"
  downloadUrl="/doc/assets/file/codex/vscode-codex-replace.zip"
/>

<script setup>
import CodexDownload from "@source/.vuepress/components/CodexDownload.vue";
</script>
```

★ `downloadUrl` **必须**带 `/doc/` 前缀。Vue 组件的 prop 默认值不走 VuePress base 补齐。

**简单版**:直接 markdown 链接
```md
[点此下载 vscode-codex-replace.zip](/doc/assets/file/codex/vscode-codex-replace.zip)
```

### 改页脚版权/致谢

编辑 `src/.vuepress/theme.ts` 里的 `footer` 字段(支持 HTML):

```ts
footer:
  'Copyright © 2026 4i.codes · Docs built on <a href="https://github.com/1198722360/rcdoc" target="_blank" rel="noopener">rcdoc</a>',
displayFooter: true,
```

### 处理暗色模式

**目前禁用**(`theme.ts` 里 `darkmode: "disable"`)。
- 想启用:把 `"disable"` 改成 `"toggle"` 或 `"auto"`
- 然后 `TopBar.vue` 里 `toggleTheme` 那个 no-op 恢复成读写 `document.documentElement.setAttribute('data-theme', ...)` 的实现
- 各 md/组件里已有的 `[data-theme="dark"]` CSS 会立即生效(它们一直在,只是没触发)

---

## 路径规则(重要)

VuePress `base: "/doc/"` 意味着:

| 场景 | 是否自动补 /doc/ | 示例 |
|---|---|---|
| markdown `![](/x)` | ✅ 补 | 写 `/logo.png` → 部署后 `/doc/logo.png` |
| markdown `[链接](/x)` | ✅ 补 | 同上 |
| HTML `<img src="/x">` | ❌ 不补 | **必须**手写 `/doc/x` |
| HTML `<a href="/x">` | ❌ 不补 | 同上 |
| Vue 组件的 prop 默认值 | ❌ 不补 | 同上 |
| SCSS `url("/x")` | ❌ 不补 | 同上 |
| 外站链接 `https://...` | ✅ 无关 | 保留 |
| 顶栏跳到主域名 `/contact` 等 | 手动写全 | `href="https://4i.codes/contact"` |

**判断题**:凡是**原生 HTML 属性**或 **JS 字符串字面量**里的路径,**手写 `/doc/`**。

---

## 本地开发

```bash
cd docs
yarn install         # 或 npm install (如果没 yarn)
yarn docs:dev        # 起本地服务
# 打开 http://localhost:8080/doc/
```

**国内加速**(如果依赖装得慢):

```bash
yarn config set registry https://registry.npmmirror.com
export SASS_EMBEDDED_BINARY_SITE=https://npmmirror.com/mirrors/sass-embedded
yarn install
```

**yarn 版本冲突**(项目锁 yarn 4,本地是 yarn 1):

```bash
node -e "const p=require('./package.json'); delete p.packageManager; require('fs').writeFileSync('package.json',JSON.stringify(p,null,2))"
yarn install
```

---

## 构建与部署

```bash
yarn docs:build
# 产物: src/.vuepress/dist/
```

产物是纯静态文件,直接 nginx / Cloudflare Pages / Vercel 皆可。

**nginx 挂载到 4i.codes/doc**:见 `DEPLOY.md`。

**Cloudflare Pages**:

```bash
yarn docs:build:cf
# 产物: src/.vuepress/output/docs/ (自动移到 /docs/ 子目录方便反代)
```

---

## 已知坑

1. **HTML `<img>` / Vue prop 里路径不带 base** — 部署后 404。全项目已排查修好,新加时注意
2. **sass-embedded Windows 上装不下来** — 用国内镜像 `SASS_EMBEDDED_BINARY_SITE` 或换成 `sass`(纯 JS 慢但能跑)
3. **hope 主题的 rc 版本不稳** — 不要贸然升到 `rc-999`,可能破坏 config API。升级前看 changelog
4. **iconify 图标名写错** — 部分图标要装对应集才能显示,dev 里看不到时优先怀疑名字
5. **CSS 变量 `--rc-brand-*` 保留** — 值已换成墨色,但**变量名不能改**,原 rcdoc 组件靠这些名字
6. **`config.ts` 里 `base` 改动** — 改了以后所有硬编码 `/doc/xxx` 都要同步改(TopBar.vue、CodexDownload.vue、@font-face、wsl.md 里 13 处 img)

---

## 约定

- **不用 emoji**,能用 SVG 就用 SVG。TopBar/intro/首页已全部 SVG 化
- **只保留浅色主题**,不做暗色(节省维护)
- **改动之前**:先在本地 `yarn docs:dev` 跑起来确认无 build 报错、路径没 404
- **改动之后**:全项目 grep 一次 `/assets/` 看有没有漏加 `/doc/` 的 HTML/prop
- **文档新增**:图片先放 public,md 里 markdown 语法引用(免补 base 烦恼)
- **联系方式集中在**:`docs/quick_start/intro.md` "联系我们"六卡。改一处即可
- **原仓库致谢**:在 footer 中长期保留,不要删

---

## 快速排错

**改完文档看不到变化?**

```bash
# 清 vuepress 缓存
rm -rf src/.vuepress/.cache src/.vuepress/.temp
yarn docs:dev
```

**图片 404?**

- HTML `<img>` 忘了 `/doc/` 前缀 → 加上
- 图片文件不在 public 里 → 放进对应分类目录
- 分类目录名和 md 引用路径不一致(比如 `quick_start` 写成 `quickstart`)→ 校正

**顶栏消失了?**

- 检查 `.vuepress/client.ts` 存在且注册了 TopBar
- 检查浏览器控制台报错(通常是 TopBar.vue 语法错)

**下载按钮 404?**

- CodexDownload 的 `downloadUrl` prop 忘了 `/doc/` → 加上
- zip 文件不在 `public/assets/file/xxx/` → 放进去

**部署后样式全乱?**

- `base` 和 nginx location 不匹配。`config.ts` 里 `base: "/doc/"` 对应 nginx `location /doc/`
- 改一处必须同步改另一处

---

**最后**:改动前先看一遍这份指南 + `DEPLOY.md`,能避开 80% 的坑。
