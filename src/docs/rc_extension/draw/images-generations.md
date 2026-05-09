---
title: "/v1/images/generations"
icon: material-symbols:image
order: 4
footer: false
---

# /v1/images/generations

基础地址：`https://www.right.codes/draw`

`POST /v1/images/generations`

> 统一鉴权头：`Authorization: Bearer sk-xxxxx`

## 请求参数

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `model` | 是 | 支持所有图片生成模型 |
| `prompt` | 是 | 提示词 |
| `image` | 否 | 参考图，支持 `base64` 或 URL |
| `size` | 否 | 形如 `1024x1024` |
| `response_format` | 否 | 目前示例值是 `url` |

`size` 的常用写法和 `gpt-image-2` 那页一致，直接填像素即可。

## 示例请求

```json
{
  "model": "gpt-image-2",
  "prompt": "生成一张边牧与古牧正在抖音直播间直播带货截图",
  "image": [],
  "size": "1024x1024",
  "response_format": "url"
}
```

## 返回

```json
{
  "created": 1777689832,
  "data": [
    {
      "url": "https://file4.aitohumanize.com/file/dfa13fe60e7649e88f46037b968b54a3.png"
    }
  ],
  "usage": {
    "total_tokens": 6267,
    "input_tokens": 17,
    "output_tokens": 6250
  }
}
```

如果只想拿一张图的直链，这个接口最省事。
