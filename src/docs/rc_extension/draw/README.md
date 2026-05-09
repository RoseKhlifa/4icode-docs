---
title: 画图接口
icon: material-symbols:draw-outline
order: 0
footer: false
---

# 画图接口

这里放的是 Right Code 的绘图相关接口，统一入口是 `https://www.right.codes/draw`。

## 快速入口

| 接口 | 用途 |
| --- | --- |
| [nano-banana 接口](./nano-banana.md) | 通用绘图、参考图绘制、异步生成 |
| [gpt-image-2 接口](./gpt-image-2.md) | OpenAI 风格的绘图接口，支持像素尺寸 |
| [/v1/chat/completions](./chat-completions.md) | 聊天接口，支持带图提问 |
| [/v1/images/generations](./images-generations.md) | OpenAI 原生图片生成接口 |

## 说明

- 统一鉴权头：`Authorization: Bearer sk-xxxxx`
- 基础地址：`https://www.right.codes/draw`
- 先看总览，再按你的场景挑接口会更快
