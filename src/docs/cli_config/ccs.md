---
title: 使用CC-Switch配置
icon: hugeicons:configuration-01
order: 1
footer: false
---

## 什么是 CC-Switch？

**使用 CC-Switch，您可以：**

![](/assets/image/quick_start/rc-0.webp)

- 一键切换 API 配置 - 在多个 API 提供商之间快速切换
- 可视化配置管理 - 通过图形界面轻松管理所有配置
- MCP 服务器管理 - 管理 Model Context Protocol 服务器
- 系统托盘快捷操作 - 通过托盘菜单快速切换
- 本地代理 - 支持热切换CC、CX、Gemini的供应商
- 故障转移 - 全自动渠道故障转移

### 软件下载

访问 [CC-Switch 官网](https://ccswitch.io/zh/download) 下载并安装最新版本。也可以前往 [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) 下载。

![](/assets/image/quick_start/rc-9.webp)

### 一键接入 4i.codes

#### 第一步：安装并启动 CC-Switch

完成安装后启动 CC-Switch。后续导入会通过浏览器直接唤起软件，不需要在 CC-Switch 中手动新建 4i.codes 供应商。

#### 第二步：创建 API Key

登录 4i.codes，进入 [API Key 管理](https://4i.codes/console/keys)，点击 `创建新 Key`。

填写 Key 名称并选择需要使用的服务分组，然后完成创建。还不了解 Key 权限时，可以先阅读 [ApiKey 管理](/docs/quick_start/apikey.html)。

#### 第三步：一键导入到 CC-Switch

1. 在 API Key 列表中找到刚创建的 Key。
2. 点击该 Key 右侧的 `导入 CCS` 按钮。
3. 浏览器询问是否打开 CC-Switch 时，选择允许。
4. 在 CC-Switch 弹出的导入页面中确认配置，并选择 `启用该供应商`。

::: tip
导入时不需要手动填写 Base URL 或 API Key。4i.codes 会根据 Key 所属的服务分组自动生成对应的供应商配置。
:::

#### 第四步：重启并测试

关闭并重新打开对应的 Codex、Claude Code 或 Gemini CLI，然后发送一条简单消息。如果能够正常返回内容，说明配置已经生效。

### 导入规则与特殊情况

- OpenAI 分组会导入到 Codex。
- Claude 分组会导入到 Claude Code。
- Gemini 分组会导入到 Gemini CLI。
- Antigravity 分组导入时，需要选择使用 Claude Code 还是 Gemini CLI。
- 如果需要在 Claude Code 中调用 GPT 模型，还需要在 CC-Switch 中开启 `路由` 功能，将 Claude Code 的请求转发到对应的 GPT 模型。

::: warning
API Key 相当于账号调用凭证。不要把完整 Key 发送给他人，也不要提交到公开代码仓库。
:::
