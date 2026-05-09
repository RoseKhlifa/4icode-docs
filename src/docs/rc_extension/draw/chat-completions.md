---
title: "/v1/chat/completions"
icon: hugeicons:chat-gpt
order: 3
footer: false
---

# /v1/chat/completions

基础地址：`https://www.right.codes/draw`

`POST /v1/chat/completions`

这个接口兼容 OpenAI 的聊天格式。纯文本、带图提问都能直接用。

> 统一鉴权头：`Authorization: Bearer sk-xxxxx`

## 请求参数

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `model` | 是 | 支持所有模型 |
| `stream` | 是 | `true` / `false` |
| `messages` | 是 | 对话数组 |

`messages[].content` 可以直接是字符串，也可以按下面这种方式把图片一起塞进去：

```json
[
  {
    "role": "user",
    "content": [
      {
        "type": "text",
        "text": "这张图片内容是什么"
      },
      {
        "type": "image_url",
        "image_url": {
          "url": "https://xxxxxxx.png"
        }
      }
    ]
  }
]
```

## 文字提问

```json
{
  "model": "gemini-3.1-pro",
  "stream": false,
  "messages": [
    {
      "role": "user",
      "content": "你好"
    }
  ]
}
```

## 传图提问

```json
{
  "model": "gemini-3.1-pro",
  "stream": false,
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "这张图片内容是什么"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://xxxxxxx.png"
          }
        }
      ]
    }
  ]
}
```

## 返回

### JSON

返回里常用的是这些字段：

- `choices[0].message.content`
- `usage.prompt_tokens`
- `usage.completion_tokens`
- `usage.total_tokens`

```json
{
  "id": "1-2ede12b5-77cc-48f9-b1d0-7ae35ee8d444",
  "object": "",
  "created": 1777897048,
  "model": "gemini-3.1-pro",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "你好！请问有什么我可以帮您的吗？"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 2,
    "completion_tokens": 261,
    "total_tokens": 263
  },
  "system_fingerprint": ""
}
```

### Stream

`stream=true` 时，服务端会按 SSE 分片返回，正文里看 `choices[0].delta.content`。最后一个 chunk 会带上 `usage`。

```text
data: {"id":"...","object":"chat.completion.chunk","choices":[{"index":0,"delta":{"content":"你好！","role":"assistant"},"finish_reason":null}]}

data: {"id":"...","object":"chat.completion.chunk","choices":[{"index":0,"delta":{"content":"请问有什么我可以帮你的吗？","role":"assistant"},"finish_reason":"stop"}]}
```

`content_filter_results` 也会跟着返回，结构和 OpenAI 兼容。
