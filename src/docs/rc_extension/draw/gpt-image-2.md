---
title: gpt-image-2 接口
icon: material-symbols:image
order: 2
footer: false
---

# gpt-image-2 接口

基础地址：`https://www.right.codes/draw`

`POST /v1/api/generate`

这页对应 gpt-image-2 系列。`aspectRatio` 这里填的是像素尺寸，不是纯比例名。

> 统一鉴权头：`Authorization: Bearer sk-xxxxx`

## 请求参数

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `model` | 是 | `gpt-image-2`、`gpt-image-2-vip` |
| `prompt` | 是 | 提示词 |
| `images` | 否 | 参考图，支持 `base64` 或 URL |
| `aspectRatio` | 否 | 比例尺寸，例如 `1024x1024` |
| `replyType` | 否 | `json`、`stream`、`async` |

<details>
<summary>常用尺寸对照</summary>

| 比例 | 1K | 2K | 4K |
| --- | --- | --- | --- |
| `1:1` | `1024x1024` | `2048x2048` | `2880x2880` |
| `16:9` | `1774x887` | `2048x1152` | `3840x2160` |
| `9:16` | `887x1774` | `1152x2048` | `2160x3840` |
| `3:2` | `1536x1024` | `2048x1360` | `3504x2336` |
| `2:3` | `1024x1536` | `1360x2048` | `2336x3504` |
| `21:9` | `2048x880` | `3840x1648` | - |
| `9:21` | `880x2048` | `1648x3840` | - |
| `1:3` | `688x2048` | `1280x3840` | - |
| `3:1` | `2048x688` | `3840x1280` | - |
| `2:1` | `2048x1024` | `3840x1920` | - |
| `1:2` | `1024x2048` | `1920x3840` | - |

</details>

`gpt-image-2-vip` 才能稳定使用 2K / 4K。

## 示例请求

```json
{
  "model": "gpt-image-2",
  "prompt": "生成一张边牧与古牧正在抖音直播间直播带货截图",
  "images": [],
  "aspectRatio": "1024x1024",
  "replyType": "json"
}
```

## 返回

成功时和上面那套接口一致，主要看这几个字段：

- `status`
- `results[0].url`
- `progress`

```json
{
  "id": "14-5f3cf761-a4bb-486a-8016-77f490998f80",
  "status": "succeeded",
  "results": [
    {
      "url": "https://file1.aitohumanize.com/file/fcdd2d07449d438d9d69d450f5626976.png"
    }
  ],
  "progress": 100
}
```
