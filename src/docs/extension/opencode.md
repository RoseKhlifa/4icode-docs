---
title: OpenCode 接入
icon: /assets/icon/opencode/opencode.jpg
order: 1
footer: false
---

## 在 OpenCode 桌面端接入 4i.codes

开始前，请先在 4i.codes 控制台创建一个 OpenAI 服务分组的 API Key。如果还没有 Key，可以参考 [ApiKey 管理](../quick_start/apikey.html)。

### 第一步：下载并打开 OpenCode

在浏览器访问 [OpenCode 下载页面](https://opencode.ai/download)，下载并安装适合你系统的桌面端。安装完成后打开 OpenCode，进入主界面。

![](/assets/image/extension/opencode/rc-01.webp)

### 第二步：添加自定义 OpenAI 兼容供应商

1. 点击输入框左下方当前使用的模型名称，打开模型选择窗口。

![](/assets/image/extension/opencode/rc-02.webp)

2. 点击模型窗口底部的 `查看另外 70 多个提供商`。

![](/assets/image/extension/opencode/rc-03.webp)

3. 在提供商列表中找到并选择 `自定义 OpenAI 兼容提供商`。

![](/assets/image/extension/opencode/rc-04.webp)

### 第三步：自定义供应商配置

按照下列内容填写自定义供应商：

- `提供商 ID`：填写 `4icodes`，只支持小写字母、数字、连字符或下划线。
- `显示名称`：可以自行填写，建议使用 `4i.codes`，方便后续识别。
- `基础 URL`：填写 `https://api.4i.codes/v1`。
- `API 密钥`：填写你在 4i.codes 控制台创建的 API Key。

![](/assets/image/extension/opencode/rc-05.webp)

继续向下滚动到 `模型` 区域，点击 `添加模型`，将模型 ID 和显示名称逐行填入。每添加一个模型，就会新增一行输入框。

| 模型 ID | 显示名称 |
|---|---|
| `gpt-5.6-sol` | `GPT-5.6 Sol` |
| `gpt-5.6-terra` | `GPT-5.6 Terra` |
| `gpt-5.6-luna` | `GPT-5.6 Luna` |
| `gpt-5.5` | `GPT-5.5` |

![](/assets/image/extension/opencode/rc-06.webp)

模型填写完成后，继续向下滚动并点击 `提交`。

### 第四步：测试是否能够正常使用模型

提交成功后，在输入框左下角选择刚刚添加的模型，并发送一条简单的测试消息。如果模型能够正常回复，即表示 4i.codes 已成功接入 OpenCode。

![](/assets/image/extension/opencode/rc-07.webp)

::: warning
API Key 相当于账号调用凭证。请勿把完整 Key 发送给他人，也不要提交到公开代码仓库。
:::
