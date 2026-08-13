---
title: Codex FAQ
icon: hugeicons:chat-gpt
order: 1
footer: false
---

## Use the latest model in Codex

::: tip Recommended method
1. Open `config.toml` and locate `model = "gpt-xxx"`.
2. Change it to `model = "gpt-5.6-sol"` and save the file.
3. Restart Codex CLI, the Codex app, or the VS Code extension.
4. Do not switch models inside the active session.
:::

For Codex CLI, start a fresh session with:

```bash
codex -m gpt-5.6-sol -c model_reasoning_effort="ultra"
```

If Codex is already running, press `Ctrl + C` before restarting it.

## VS Code extension

The replacement package below targets Codex extension version `v26.5707.31428`.

1. Switch the Codex extension to its pre-release channel.
2. Open the VS Code extension directory.

::: tabs
@tab Windows
```bash
start "" "%userprofile%\.vscode\extensions"
```

@tab macOS
```bash
open "$HOME/.vscode/extensions"
```
:::

3. Find the directory beginning with `openai.chatgpt-26.5707.31428-`.
4. Open its `webview/assets` directory.
5. Download the archive below, extract it, and replace the existing JavaScript file.

<CodexDownload version="26.5707.31428" summary="Updated for the latest GPT-5.6 model family." locale="en" />

6. Restart VS Code and check the model list.

<script setup>
import CodexDownload from "@source/.vuepress/components/CodexDownload.vue";
</script>
