---
title: API Endpoint Reference
icon: material-symbols:api
order: 1
footer: false
---

This page lists the five common model endpoints provided by 4i.codes. Copy a complete URL into an SDK, custom client, or HTTP debugging tool.

::: tip Path rules
The API gateway origin does not include `/v1`. The catalog below already includes each complete path, so do not append the API version twice.
:::

<ClientOnly>
  <ApiEndpointCatalog locale="en" />
</ClientOnly>

## Common request conventions

All endpoints use `POST`. Use a JSON request body except when uploading files to the image-edit endpoint.

| Item | Value | Notes |
| --- | --- | --- |
| Authentication | `Authorization: Bearer API_KEY` | Never put an API key in a URL |
| Request format | `Content-Type: application/json` | Image edits use `multipart/form-data` |
| Streaming | `"stream": true` | Enable only when supported by the endpoint and model |

::: warning Keep keys secure
An API key is an account credential. Store it in an environment variable or local client configuration. Never commit it to a public repository or share it with another person.
:::

## Choose an endpoint

- **Responses:** Preferred for Codex and modern agents.
- **Chat Completions:** Compatible with many OpenAI SDKs and chat clients.
- **Anthropic Messages:** Designed for Claude SDKs, Claude Code, and Anthropic-compatible clients.
- **Image Generations:** Generate images from a text prompt.
- **Image Edits:** Upload and modify an image with a prompt.

<script setup>
import ApiEndpointCatalog from '@source/.vuepress/components/ApiEndpointCatalog.vue';
</script>
