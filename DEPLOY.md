# 4i.codes 文档站部署说明

本文档站基于 **VuePress 2 + vuepress-theme-hope**，克隆自 `1198722360/rcdoc`，
已完成品牌替换到 4i.codes。

## 目录

- [本地开发](#本地开发)
- [构建产物](#构建产物)
- [部署到 4i.codes/doc](#部署到-4icodesdoc)
- [nginx 配置示例](#nginx-配置示例)
- [目录结构](#目录结构)

---

## 本地开发

首次装依赖(项目锁定 yarn 4.12,若无 yarn 用 npm 也可)：

```bash
# 用 yarn (推荐, 遵循 yarn.lock)
yarn install

# 或用 npm
npm install
```

启动 dev 服务器：

```bash
yarn docs:dev
# 或: npm run docs:dev
```

默认在 `http://localhost:8080/doc/` 打开(因为 `config.ts` 里 `base: "/doc/"`)。

## 构建产物

```bash
yarn docs:build
# 或: npm run docs:build
```

产物在 `src/.vuepress/dist/`,是一个纯静态目录,可直接 nginx 分发。

如果你用 **Cloudflare Pages** 或类似托管:

```bash
yarn docs:build:cf
# 产物在 src/.vuepress/output/docs/
```

这个变体会额外把 dist 移到 `output/docs/`,方便反代到 `/doc/*`。

## 部署到 4i.codes/doc

### 单机 nginx 部署

1. 在服务器上 `git pull` 或 `scp` 上传本项目
2. 服务器上执行 `yarn install && yarn docs:build`
3. 把 `src/.vuepress/dist/` 拷贝到 web root,比如 `/var/www/4icode-docs/`
4. 配置 nginx(见下)
5. `nginx -s reload`

### 与首页 / 联系 / 关于共存

你的域名 4i.codes 上还挂着首页项目(index.html / contact.html / about.html)。
nginx location 分发即可:

```nginx
server {
    listen 443 ssl http2;
    server_name 4i.codes;

    ssl_certificate     /etc/letsencrypt/live/4i.codes/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/4i.codes/privkey.pem;

    root /var/www/4icode-site;
    index index.html;

    # 首页(纯静态项目)
    location = /              { try_files /index.html =404; }
    location = /contact       { try_files /contact.html =404; }
    location = /about         { try_files /about.html =404; }

    # 首页项目的资源(logo/字体/视频等)
    location /assets/ { }

    # ==== 文档站 ====
    location /doc/ {
        alias /var/www/4icode-docs/;
        try_files $uri $uri/ $uri.html /doc/index.html;
    }

    # 状态页 - 独立项目, 反代到内网端口
    location /status {
        proxy_pass http://127.0.0.1:3001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # API 网关 - 反代到实际 API 服务
    location /v1/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # SSE 流式必须
        proxy_buffering off;
        proxy_cache off;
    }
}
```

## 目录结构

```
docs/                              # VuePress 项目根
├── package.json
├── tsconfig.json
├── yarn.lock
├── src/
│   ├── README.md                 # 文档站首页 (Hero + Features)
│   ├── docs/                     # 所有文档
│   │   ├── quick_start/          # 快速开始 (原 rc_quick_start)
│   │   ├── cli_config/           # CLI 配置 (原 rc_cli_config)
│   │   ├── draw/                 # 画图接口 (原 rc_draw)
│   │   ├── extension/            # 第三方使用 (原 rc_extension)
│   │   └── questions/            # 常见问题 (原 rc_questions)
│   └── .vuepress/
│       ├── config.ts             # VuePress 主配置 (base=/doc/)
│       ├── theme.ts              # hope 主题配置 (navbar 已禁用)
│       ├── sidebar.ts            # 左侧栏结构
│       ├── client.ts             # 全局注入自定义 TopBar
│       ├── components/
│       │   ├── TopBar.vue        # 4i.codes 胶囊顶栏
│       │   ├── ApiTester.vue     # (原项目自带) API 测试组件
│       │   ├── CodexDownload.vue # (原项目自带)
│       │   └── ModelsPlaza.vue   # (原项目自带) 模型广场
│       ├── styles/
│       │   ├── palette.scss      # 主题色 (改为墨色调)
│       │   ├── config.scss
│       │   └── index.scss        # 全局 CSS (改为米黄墨调 + 本地字体)
│       └── public/
│           ├── logo.png                        # 4i.codes logo
│           ├── HarmonyOS_SansSC_Regular.ttf    # 中文字体
│           ├── JetBrainsMono-Regular.ttf       # 英文/等宽字体
│           ├── favicon.ico
│           └── (原项目自带的 1024.webp/logo.webp 保留)
```

## 与首页项目的关系

| 项目 | 位置 | 用途 |
|---|---|---|
| 首页项目 | `G:\TOKEN\4icode\1\` | index.html / contact.html / about.html 三个静态页 |
| 文档项目 | `G:\TOKEN\4icode\docs\` | VuePress 生成的 /doc 路由 |

两者相互独立,通过 nginx location 前缀汇聚到同一域名 4i.codes。

## 开发注意

1. **不要修改** `.vuepress/public/` 里的 `1024.webp` / `logo.webp` / `logo.svg` — 原项目 README 可能引用,虽然已改到 `/doc/logo.png` 但保留作后备
2. 修改文档: 直接编辑 `src/docs/**/*.md`,dev 会热更新
3. 修改侧栏: 编辑 `.vuepress/sidebar.ts`
4. 修改顶栏: 编辑 `.vuepress/components/TopBar.vue`
5. 主题色和字体: 编辑 `.vuepress/styles/palette.scss` 和 `index.scss`

## 常见问题

**Q: dev 访问 `http://localhost:8080` 打开是空白?**
A: 因为设了 `base: "/doc/"`,访问 `http://localhost:8080/doc/`。

**Q: 顶栏胶囊没显示?**
A: 检查 `.vuepress/client.ts` 是否存在, `TopBar.vue` 里的 `<img src="/doc/logo.png">` 路径是否对应 base。

**Q: build 后部署到别的路径不是 /doc/ 怎么改?**
A: 修改 `config.ts` 里的 `base: "/xxx/"`,同时 `TopBar.vue` 里的 `href="/doc/"` 也要同步改。

**Q: 国内 install 慢/超时?**
A: 使用镜像:
```bash
# 配 npm/yarn registry
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com

# 二进制资源(sass-embedded / node-sass 等)
export SASS_BINARY_SITE=https://npmmirror.com/mirrors/sass-embedded
export SASS_EMBEDDED_BINARY_SITE=https://npmmirror.com/mirrors/sass-embedded

# 然后重新装
rm -rf node_modules yarn.lock package-lock.json
yarn install
```

**Q: yarn 报 `packageManager` 冲突?**
A: 原项目锁 `yarn@4.12.0`, 如果本地是 yarn 1.x, 用如下方式绕过:
```bash
# 方法 A: 用 corepack 装 yarn 4
corepack enable
corepack prepare yarn@4.12.0 --activate

# 方法 B: 临时移除 packageManager 字段, 用 yarn 1.x 或 npm 装
node -e "const p=require('./package.json'); delete p.packageManager; require('fs').writeFileSync('package.json',JSON.stringify(p,null,2))"
yarn install
```

**Q: build 时 sass-embedded 报错?**
A: 通常是 Windows 下 dart 二进制无法下载。
- 先按上面 Q 配 `SASS_EMBEDDED_BINARY_SITE`
- 或改用 `sass` 替代 `sass-embedded`(在 package.json 里换即可)

**Q: 部署到子路径, 首页 hero 的图链接怎么办?**
A: `src/README.md` 里的 `<img src="/doc/logo.png">` 用了 base 前缀,
如果部署路径不同, 需要把这里的 `/doc/` 换成实际 base。
