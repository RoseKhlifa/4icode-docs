# 4i.codes 全站部署 (landing + docs + status)

面向单节点服务器 (Debian/Ubuntu + 1Panel/OpenResty) 从零部署 4 个项目的完整清单。

- `4i.codes/*` → landing 静态页 (index/about/contact/policy)
- `4i.codes/doc/*` → docs (VuePress 构建产物)
- `4i.codes/status/*` → status (Next.js + SQLite, 独立进程, 反代)
- `api.4i.codes/*` → API 网关 (独立于本文档)

> 各子项目独立的 DEPLOY.md 覆盖单项目细节;本文档只讲**整体协作 + nginx 配置**。

---

## 目录

- [0. 前置 (只做一次)](#0-前置-只做一次)
- [1. 部署 landing (静态)](#1-部署-landing-静态)
- [2. 部署 docs (VuePress)](#2-部署-docs-vuepress)
- [3. 部署 status (Next.js)](#3-部署-status-nextjs)
- [4. OpenResty 完整配置](#4-openresty-完整配置)
- [5. 保存 · reload · 测试清单](#5-保存--reload--测试清单)
- [6. 常见坑速查](#6-常见坑速查)
- [7. 后续更新脚本](#7-后续更新脚本)

---

## 0. 前置 (只做一次)

```bash
# Node 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 全局工具
npm install -g yarn pnpm pm2

# native 编译工具 (better-sqlite3 需要)
apt install -y python3 make g++ build-essential

# 验证
node -v && npm -v && yarn -v && pm2 -v
```

**Alpine**: `apk add --no-cache python3 make g++ libstdc++ nodejs npm`

---

## 1. 部署 landing (静态)

landing 目前不在 GitHub,直接把本地 `G:\TOKEN\4icode\1\` 打包上传。

### 1.1 本地打包

```bash
cd G:/TOKEN/4icode
tar --exclude='1/_rebrand*.py' \
    --exclude='1/.git' \
    -czf 4icode-landing.tar.gz 1/
```

### 1.2 上传解压

```bash
# 本地
scp G:/TOKEN/4icode/4icode-landing.tar.gz root@<IP>:/tmp/

# 服务器 (1Panel 建站后, 站点根目录会是这个)
cd /opt/1panel/apps/openresty/openresty/www/sites/4i.codes/index
rm -f index.html   # 清 1Panel 默认 welcome
tar -xzf /tmp/4icode-landing.tar.gz --strip-components=1
ls -la              # 应看到 index.html about.html contact.html policy.html assets/
```

### 1.3 权限

```bash
chown -R www:www /opt/1panel/apps/openresty/openresty/www/sites/4i.codes/index \
  2>/dev/null || chown -R nobody:nobody /opt/1panel/apps/openresty/openresty/www/sites/4i.codes/index
```

---

## 2. 部署 docs (VuePress)

### 2.1 clone + build

```bash
cd /root
git clone git@github.com:RoseKhlifa/4icode-docs.git docs
cd docs
yarn install         # 3-5 分钟
yarn docs:build      # 产物在 src/.vuepress/dist/
```

### 2.2 复制到 nginx 可读目录

```bash
mkdir -p /var/www/4icode-docs
rm -rf /var/www/4icode-docs/*
cp -r /root/docs/src/.vuepress/dist/* /var/www/4icode-docs/
chown -R www:www /var/www/4icode-docs 2>/dev/null || chown -R nobody:nobody /var/www/4icode-docs
chmod -R 755 /var/www/4icode-docs
```

### 2.3 更新流程

```bash
cd /root/docs
git pull
yarn install --frozen-lockfile
yarn docs:build
rm -rf /var/www/4icode-docs/*
cp -r src/.vuepress/dist/* /var/www/4icode-docs/
# 静态文件, 无需 reload nginx
```

参见 [7. 后续更新脚本](#7-后续更新脚本) 里的 `deploy-docs.sh`。

---

## 3. 部署 status (Next.js)

### 3.1 clone + build + 首启

```bash
cd /root
git clone git@github.com:RoseKhlifa/4icode-status.git status
cd status
npm install          # 3-5 分钟, 会编译 better-sqlite3

# ⚠ 关键: 反代场景下必须设 STATUS_BASE_PATH, 否则 _next/static 资源
# 打不到本进程, 页面上 CSS 和 JS 全 404 (浏览器控制台报 "Unexpected token '<'")
# 本文档假设你走 https://4i.codes/status/ 挂载, base = /status
export STATUS_BASE_PATH=/status

# build 时会读这个环境变量, 生成的 asset URL 会自动加前缀
npm run build

# pm2 起服务时也要带上, 让 next start 端也知道
STATUS_BASE_PATH=/status pm2 start "npm start" --name 4icode-status
pm2 save
pm2 startup          # 按提示复制那条 systemctl 命令跑一下, 让 pm2 开机自启
```

**如果之前起过服务,基础是没这个环境变量**:
```bash
cd /root/status
export STATUS_BASE_PATH=/status
npm run build
pm2 restart 4icode-status --update-env    # ⚠ --update-env 让 pm2 读新的 env
```

**长期方案:写到 pm2 ecosystem 或 systemd unit**
建 `/root/status/ecosystem.config.cjs`:
```js
module.exports = {
  apps: [{
    name: '4icode-status',
    script: 'npm',
    args: 'start',
    env: { STATUS_BASE_PATH: '/status' },
  }],
};
```
之后 `pm2 start ecosystem.config.cjs` + `pm2 save`。

### 3.2 抓一次性管理密码

```bash
pm2 logs 4icode-status --lines 50 --nostream
```

日志里会看到:
```
╔══════════════════════════════════════════════════════════╗
║  4i.codes status — 管理端首次启动                        ║
║  URL:      /admin/login                                  ║
║  Password: XxXxXxXxXxXx           ← 记下来!               ║
║  ⚠ 请立即登录并到设置里修改密码                          ║
╚══════════════════════════════════════════════════════════╝
```

如错过, 重置:
```bash
sqlite3 /root/status/data/status.db "DELETE FROM admin_credentials"
pm2 restart 4icode-status
pm2 logs 4icode-status --lines 30 --nostream
```

### 3.3 验证

```bash
curl -I http://127.0.0.1:8800/                      # 200
curl -I http://127.0.0.1:8800/admin/login           # 200
ss -tlnp | grep 8800                                 # 应有 node 监听
```

### 3.4 更新流程

```bash
cd /root/status
git pull
npm install          # package.json 变了才需要
npm run build
pm2 restart 4icode-status
pm2 logs 4icode-status --lines 20 --nostream         # 确认无错
```

`data/providers.json` 和 `data/status.db` 都被 `.gitignore` 保护, `git pull` 不覆盖运营数据。

---

## 4. OpenResty 完整配置

进 **1Panel** → **网站** → `4i.codes` 站点 → **配置** → **配置文件**, 把 `server { }` 内 location 部分替换成下面完整版本。

1Panel 生成的 `server { }` 头部 (listen / ssl_certificate 之类) **保留不动**, 只改内部 location。

```nginx
    # ============================================
    # [1] 4i.codes landing 静态页
    # ============================================
    location = /              { try_files /index.html =404; }
    location = /about         { try_files /about.html =404; }
    location = /contact       { try_files /contact.html =404; }
    location = /policy        { try_files /policy.html =404; }

    # landing 的静态资源 (logo / favicon / shared.css-js / 字体 / 视频)
    # 30 天缓存 + immutable, 加速二次访问
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # ============================================
    # [2] 文档站 (VuePress 静态产物)
    # ============================================
    # ⚠ alias 值末尾必须带 /
    location /doc/ {
        alias /var/www/4icode-docs/;
        # VuePress 干净 URL 支持: /doc/quick_start/intro -> /doc/quick_start/intro.html
        try_files $uri $uri.html $uri/ /doc/index.html;
    }

    # ============================================
    # [3] 状态看板 (Next.js 反代 8800)
    # ============================================
    # ⚠ 关键改动: 与 STATUS_BASE_PATH=/status 配套,
    # proxy_pass 结尾 *不带* 路径, 让 nginx 把 /status/ 完整转给 Next.js.
    # Next.js 生成的 _next/static/xxx 路径带 /status 前缀, 请求会正确回到本进程.
    #
    # 老配置 proxy_pass http://127.0.0.1:8800/;  (末尾带 /) 会剥掉前缀,
    # Next 收到 / 但 asset URL 里带 /status, 于是浏览器请求 /status/_next/xxx
    # 又打到 nginx -> 匹配到 landing 的 location / 兜底 -> 返回 index.html
    # -> 浏览器把 HTML 当 JS 解析 -> "Unexpected token '<'"
    location /status/ {
        proxy_pass http://127.0.0.1:8800;    # ← 注意结尾不带 /
        proxy_http_version 1.1;

        # 基础转发头
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # ⚠ 关键: status 后台登录 cookie 靠 Secure 标记, 需要知道是 https
        proxy_set_header X-Forwarded-Proto $scheme;

        # SSE / 流式响应, 不缓存
        proxy_buffering off;

        # WebSocket / long polling 兜底
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # 探测循环里有 45s 挑战请求, 保守 90s
        proxy_read_timeout 90s;
        proxy_send_timeout 90s;
    }

    # ============================================
    # [4] 兜底 — 其他未匹配路径, 尝试映射到文件, 找不到跳首页
    # ============================================
    # 如果希望"找不到就 404", 把 /index.html 换成 =404
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
```

### `server { }` 上下文补充 (1Panel 一般已经填了)

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name 4i.codes;

    # 1Panel 一般已经填了 SSL 证书路径
    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    # landing 站点根
    root /opt/1panel/apps/openresty/openresty/www/sites/4i.codes/index;
    index index.html;

    # 强制 http → https
    if ($scheme = http) {
        return 301 https://$host$request_uri;
    }

    # ↓↓↓ 上面 4 段 location 塞在这里 ↓↓↓
}
```

---

## 5. 保存 · reload · 测试清单

在 1Panel 里点保存, 自动 `nginx -t` + `reload`。命令行手动:

```bash
1panel-openresty reload
# 或
openresty -s reload
```

### curl 验证 (服务器本机)

```bash
curl -I http://127.0.0.1:8800/                      # status: 200
curl -I https://4i.codes/                           # landing: 200
curl -I https://4i.codes/about                      # 200
curl -I https://4i.codes/contact                    # 200
curl -I https://4i.codes/policy                     # 200
curl -I https://4i.codes/assets/logo.png            # 200
curl -I https://4i.codes/assets/favicon-96x96.png   # 200
curl -I https://4i.codes/doc/                       # 200
curl -I https://4i.codes/doc/quick_start/intro      # 200
curl -I https://4i.codes/status/                    # 200
curl -I https://4i.codes/status/admin/login         # 200
```

### 浏览器验证

| URL | 期望 |
|---|---|
| `https://4i.codes/` | landing + 首次访问弹政策 toast |
| `https://4i.codes/about` | 关于页 |
| `https://4i.codes/policy` | 政策页 (footer 有入口, 不上导航) |
| `https://4i.codes/doc/` | VuePress 首页 |
| `https://4i.codes/doc/quick_start/intro.html` | 快速开始 |
| `https://4i.codes/status/` | 状态看板 |
| `https://4i.codes/status/admin/login` | 后台登录 (用 pm2 log 里的密码) |

### 完成后要做

1. **status 后台改密码** — 右上"修改密码" (一次性密码只显示一次)
2. **加第一批 provider** — 参考 `data/providers.example.json` 字段
3. **观察监控** — 加完 provider 60 秒内看板应出卡片
4. **政策 toast** — 无痕窗口测首次弹 + 关闭后 localStorage 记住不再弹
5. **favicon** — tab 上是 4i logo

---

## 6. 常见坑速查

| 症状 | 原因 | 解决 |
|---|---|---|
| `/doc/` 404 | alias 路径少 `/` 或产物没复制 | `ls /var/www/4icode-docs/index.html`, alias 值 `/var/www/4icode-docs/` |
| `/doc/quick_start/intro` 404 但 `.html` 后缀能开 | `try_files` 缺 `$uri.html` | 用本文档给的完整 try_files |
| `/status/` 502 | pm2 没起 或 8800 没监听 | `pm2 status`, `ss -tlnp \| grep 8800` |
| `/status/` 打开是白屏, 控制台 `Unexpected token '<'` 一堆 | Next `basePath` 没设 或 nginx `proxy_pass` 有末尾 `/` 把前缀剥掉 | 1) `export STATUS_BASE_PATH=/status && npm run build`;<br/>2) `STATUS_BASE_PATH=/status pm2 restart 4icode-status --update-env`;<br/>3) nginx: `proxy_pass http://127.0.0.1:8800` (末尾**不带** `/`) |
| `/status/admin/login` 输密码没反应 | https 没配 或 X-Forwarded-Proto 没传 | 保证 `proxy_set_header X-Forwarded-Proto $scheme;` 在 nginx 配置里, 且地址必须 https |
| docs build 报 sass 错 | Node 版本旧 | Node ≥ 20 |
| status 装依赖挂 in `better-sqlite3` | 编译工具没装 | `apt install -y python3 make g++ build-essential` |
| 政策 toast 一直弹 | localStorage 没写入 | 无痕窗口 或 DevTools 里检查 `localStorage['4icode-policy-toast-seen']` |
| `/status/` 打开一直转圈, 没探测数据 | provider 配置为空 或 都 disabled | 后台加 provider, 保存后 60 秒内出卡片 |
| `pm2 startup` 后重启机器 status 没起 | `pm2 save` 没跑 | `pm2 save` + 那条 systemctl enable 命令 |

---

## 7. 后续更新脚本

### `/root/deploy-landing.sh`

```bash
#!/bin/bash
set -e
# landing 目前是本地打包上传, 没有 git; 更新流程 = 本地重新 scp 上传
echo "landing 更新: 本地重打 tar → scp 到服务器 → 解压覆盖"
echo "  scp G:/TOKEN/4icode/4icode-landing.tar.gz root@<IP>:/tmp/"
echo "  cd /opt/1panel/apps/openresty/openresty/www/sites/4i.codes/index"
echo "  tar -xzf /tmp/4icode-landing.tar.gz --strip-components=1"
```

### `/root/deploy-docs.sh`

```bash
#!/bin/bash
set -e
cd /root/docs
git pull
yarn install --frozen-lockfile
yarn docs:build
rm -rf /var/www/4icode-docs/*
cp -r src/.vuepress/dist/* /var/www/4icode-docs/
chown -R www:www /var/www/4icode-docs 2>/dev/null || true
echo "✅ docs 已更新: $(date)"
```

### `/root/deploy-status.sh`

```bash
#!/bin/bash
set -e
cd /root/status
git pull
npm install
npm run build
pm2 restart 4icode-status
sleep 2
pm2 logs 4icode-status --lines 10 --nostream
echo "✅ status 已更新: $(date)"
```

`chmod +x /root/deploy-*.sh`, 之后 `./deploy-docs.sh` / `./deploy-status.sh` 一键更新。
