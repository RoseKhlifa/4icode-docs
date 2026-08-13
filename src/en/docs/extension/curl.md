---
title: cURL Examples
icon: material-symbols:data-object
order: 1
footer: false
---

## GPT / Codex

### Responses API

```bash
curl https://api.4i.codes/v1/responses \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{
    "model": "gpt-5.6-sol",
    "input": [{
      "type": "message",
      "role": "user",
      "content": [{ "type": "input_text", "text": "Hello" }]
    }],
    "stream": true
  }'
```

### Chat Completions API

```bash
curl https://api.4i.codes/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{
    "model": "gpt-5.6-sol",
    "messages": [{ "role": "user", "content": "Hello" }],
    "stream": true
  }'
```

::: note
The Chat Completions response is converted from the Responses API. Some clients may have compatibility issues, and this endpoint does not support caching.
:::

## Claude

```bash
curl https://api.4i.codes/v1/messages \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: YOUR_API_KEY' \
  -d '{
    "model": "claude-sonnet-4-5-20250929",
    "messages": [{
      "role": "user",
      "content": [{ "type": "text", "text": "Hello", "cache_control": { "type": "ephemeral" } }]
    }],
    "max_tokens": 32000,
    "stream": true
  }'
```

Both `Authorization: Bearer` and `x-api-key` authentication headers are supported.

## Gemini

```bash
curl --location 'https://api.4i.codes/v1beta/models/gemini-3-pro-preview:streamGenerateContent?alt=sse' \
  --header 'x-goog-api-key: YOUR_API_KEY' \
  --header 'content-type: application/json' \
  --data '{
    "generationConfig": { "temperature": 1 },
    "contents": [{ "role": "user", "parts": [{ "text": "Hello" }] }]
  }'
```
