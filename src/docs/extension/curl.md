---
title: cURL 请求示例
icon: material-symbols:data-object
order: 1
footer: false
---

## Curl 命令参考

### GPT-Codex

#### responses接口

```bash
curl https://api.4i.codes/v1/responses \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {此处填写ApiKey}' \
  -d '{
    "model": "gpt-5.6-sol",
    "input": [
      {
        "type": "message",
        "role": "user",
        "content": [
          {
            "type": "input_text",
            "text": "你好"
          }
        ]
      }
    ],
    "stream": true
  }'
```

::: info
鉴权请求头兼容`Authorization`和`x-api-key`，可任选其一
:::

#### completions接口

```bash
curl https://api.4i.codes/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {此处填写ApiKey}' \
  -d '{
    "model": "gpt-5.6-sol",
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ],
    "stream": true
  }'
```

::: info
/v1/chat/completions的响应由/v1/responses的响应转化而来，部分软件/插件可能存在兼容性问题；请求体中的system prompt会被自动替换为codex的默认instructions而无效

提醒：`/v1/chat/completions`（completions接口）不支持缓存。
:::

### Claude

```bash
curl https://api.4i.codes/v1/messages \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {此处填写ApiKey}' \
  -d '{
    "model": "claude-opus-4-8",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "你好",
            "cache_control": { "type": "ephemeral" }
          }
        ]
      }
    ],
    "max_tokens": 32000,
    "stream": true
  }'
```
::: info
鉴权请求头兼容`Authorization`和`x-api-key`，可任选其一
:::

### Gemini

::: warning 待接入，尚未开放
4i.codes 暂未接入 Gemini 模型，因此目前没有可用的 Gemini cURL 请求示例。请等待后续公告。
:::
