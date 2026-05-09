---
title: nano-banana 接口
icon: material-symbols:draw-outline
order: 1
footer: false
---

# nano-banana 接口

基础地址：`https://www.right.codes/draw`

`POST /v1/api/generate`

这页对应 nano-banana 系列模型。支持单图、多图参考，`replyType` 可以直接拿结果，也可以走流式或异步。

> 统一鉴权头：`Authorization: Bearer sk-xxxxx`

## 请求参数

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `model` | 是 | `nano-banana`、`nano-banana-fast`、`nano-banana-2`、`nano-banana-2-cl`、`nano-banana-2-4k-cl`、`nano-banana-pro`、`nano-banana-pro-cl`、`nano-banana-pro-vip`、`nano-banana-pro-4k-vip` |
| `prompt` | 是 | 提示词 |
| `images` | 否 | 参考图，支持 `base64` 或 URL |
| `aspectRatio` | 否 | 比例，默认 `auto` |
| `imageSize` | 否 | `1K`、`2K`、`4K` |
| `replyType` | 否 | `json`、`stream`、`async` |

<details>
<summary>比例支持</summary>

- 通用：`auto`、`1:1`、`16:9`、`9:16`、`4:3`、`3:4`、`3:2`、`2:3`、`5:4`、`4:5`、`21:9`
- `nano-banana-2` 系列额外支持：`1:4`、`4:1`、`1:8`、`8:1`

</details>

## 示例请求

```json
{
  "model": "nano-banana-2",
  "prompt": "生成一张边牧与古牧正在抖音直播间直播带货截图",
  "images": [],
  "aspectRatio": "1:1",
  "imageSize": "1K",
  "replyType": "json"
}
```

## 返回

成功时常见字段：

- `status`: `running` / `violation` / `succeeded` / `failed`
- `results[0].url`: 生成结果地址
- `progress`: 0~100

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

`replyType=async` 时，先返回任务 `id`，再用异步查询接口去取最终结果。
