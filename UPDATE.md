# 4icode-docs 更新部署指南

## 项目概况

- **项目类型**: VuePress 2 静态文档站
- **部署路径**: `/opt/1panel/www/sites/4i.codes/doc/`
- **公网访问**: https://4i.codes/doc/
- **构建产物**: `.vuepress/dist/` 目录

## 快速更新流程

```bash
cd /root/4icode-docs

# 1. 拉取最新代码
git pull origin main

# 2. 构建静态站点
npm run build

# 3. 部署到 nginx 目录
rm -rf /opt/1panel/www/sites/4i.codes/doc/*
cp -r .vuepress/dist/* /opt/1panel/www/sites/4i.codes/doc/

# 4. 验证部署
ls -lh /opt/1panel/www/sites/4i.codes/doc/ | head -10
curl -sI https://4i.codes/doc/ | head -5
```

## 详细说明

### 1. 拉取代码

```bash
cd /root/4icode-docs
git pull origin main
```

检查是否有新 commit:
```bash
git log -1 --oneline
```

### 2. 构建文档

```bash
npm run build
```

- 构建时间: ~30秒
- 构建产物: `.vuepress/dist/` 包含完整静态站点
- 页面数量: 通常 45-50 页
- 产物大小: 约 20MB

构建成功会显示:
```
✓ built in XXXms
✓ generated XXX files
```

### 3. 部署文件

```bash
# 清空旧版本
rm -rf /opt/1panel/www/sites/4i.codes/doc/*

# 复制新构建
cp -r .vuepress/dist/* /opt/1panel/www/sites/4i.codes/doc/

# 验证文件时间戳(应该是刚刚)
ls -lh /opt/1panel/www/sites/4i.codes/doc/ | head -10
```

### 4. 验证访问

```bash
# 测试首页
curl -sI https://4i.codes/doc/ | head -8

# 测试具体页面(示例)
curl -sI https://4i.codes/doc/docs/getting-started.html

# 测试新增内容(根据实际修改)
curl -s https://4i.codes/doc/ | grep "新关键词"
```

### 5. Cloudflare CDN 缓存

如果更新后浏览器仍显示旧内容:

1. 访问 https://dash.cloudflare.com
2. 选择 `4i.codes` 域名
3. **Caching** → **Configuration** → **Purge Everything**
4. 等待 30 秒后刷新浏览器

或使用 API 清除(需要 API Token):
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

## 常见问题

### 构建失败

```bash
# 清理依赖重试
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 部署后 404

检查 nginx 配置:
```bash
cat /opt/1panel/www/conf.d/4i.codes.conf | grep -A 15 "location /doc/"
```

关键配置:
```nginx
location /doc/ {
    root /www/sites/4i.codes;
    index index.html;
    try_files $uri $uri.html $uri/ /doc/index.html;
    expires 7d;
}
```

### 图片不显示

确认图片路径:
```bash
# 检查图片是否存在
ls -lh /opt/1panel/www/sites/4i.codes/doc/images/
```

清除 Cloudflare CDN 缓存(见上)。

## 开发调试

本地预览:
```bash
npm run dev
# 访问 http://localhost:8080
```

本地构建测试:
```bash
npm run build
cd .vuepress/dist
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 注意事项

1. **不重启 nginx**: 静态文件更新不需要重启 nginx
2. **保留旧版本**: 可选择先备份 `cp -r /opt/.../doc /opt/.../doc.bak`
3. **构建环境**: 需要 Node.js ≥ 18,已安装依赖 `node_modules/`
4. **权限问题**: 确保对 `/opt/1panel/www/sites/4i.codes/` 有写权限
5. **CDN 缓存**: 重大更新后记得清除 Cloudflare 缓存

## 自动化脚本

可创建 `/root/update-docs.sh`:

```bash
#!/bin/bash
set -e

cd /root/4icode-docs

echo "=== Pulling latest changes ==="
git pull origin main

echo "=== Building documentation ==="
npm run build

echo "=== Deploying to nginx ==="
rm -rf /opt/1panel/www/sites/4i.codes/doc/*
cp -r .vuepress/dist/* /opt/1panel/www/sites/4i.codes/doc/

echo "=== Verification ==="
ls -lh /opt/1panel/www/sites/4i.codes/doc/ | head -5
curl -sI https://4i.codes/doc/ | head -5

echo "✅ Documentation updated successfully!"
echo "⚠️  Remember to purge Cloudflare cache if needed."
```

使用方式:
```bash
chmod +x /root/update-docs.sh
/root/update-docs.sh
```
