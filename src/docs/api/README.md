---
title: API 接口参考
icon: material-symbols:api
order: 1
footer: false
---

这里汇总 4i.codes 对外提供的五个常用模型接口。复制完整地址后，可直接用于 SDK、自定义客户端或 HTTP 调试工具。

::: tip 路径规则
API 网关地址不包含 `/v1`。下方已列出每个接口的完整路径，请勿重复拼接版本号。
:::

<ClientOnly>
  <ApiEndpointCatalog />
</ClientOnly>

## 通用请求约定

所有接口均通过 `POST` 请求。除图生图的文件上传场景外，请使用 JSON 请求体。

| 项目 | 值 | 说明 |
| --- | --- | --- |
| 鉴权 | `Authorization: Bearer API_KEY` | 请勿把 API Key 放在 URL 中 |
| 请求格式 | `Content-Type: application/json` | 图生图接口使用 `multipart/form-data` |
| 流式响应 | `"stream": true` | 仅在所用接口和模型支持时启用 |

::: warning 密钥安全
API Key 等同于调用凭证。请保存在环境变量或本地客户端配置中，不要提交到公开代码仓库，也不要发送给他人。
:::

## 接口选择

- **Responses**：Codex 和新式 Agent 的首选接口。
- **Chat Completions**：兼容大量 OpenAI SDK 和对话客户端。
- **Anthropic Messages**：供 Claude SDK、Claude Code 及 Anthropic 兼容客户端使用。
- **文生图**：根据文字提示生成图片。
- **图生图**：上传图片，并按照提示对图片进行编辑。

<script setup>
import ApiEndpointCatalog from '@source/.vuepress/components/ApiEndpointCatalog.vue';
</script>
