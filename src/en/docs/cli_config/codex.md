---
title: Codex
icon: hugeicons:chat-gpt
order: 3
footer: false
---

::: tip
For the easiest setup, use [CC-Switch](/en/docs/cli_config/ccs.html).
:::

## 1. Install Codex

::: tabs
@tab Codex CLI
```bash
npm i -g @openai/codex@latest
```

Package: <https://www.npmjs.com/package/@openai/codex>

@tab VS Code extension
Install the official extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt), or search for `codex` in VS Code.

@tab Codex app
Follow the [official Codex app quickstart](https://developers.openai.com/codex/quickstart?setup=app).
:::

## 2. Open the configuration directory

::: tabs
@tab Windows
```bash
start "" "%USERPROFILE%\.codex"
```

@tab macOS
```bash
open "$HOME/.codex"
```
:::

![](/assets/image/cli_config/rc-3.webp)

## 3. Create the configuration files

Create `config.toml` and `auth.json` with the following content.

::: tabs
@tab config.toml
```toml
model_provider = "rightcode"
model = "gpt-5.6-sol"
model_reasoning_effort = "xhigh"
network_access = "enabled"
disable_response_storage = true
windows_wsl_setup_acknowledged = true
model_verbosity = "high"

[model_providers.rightcode]
name = "rightcode"
base_url = "https://api.4i.codes"
wire_api = "responses"
requires_openai_auth = true
```

@tab auth.json
```json
{
  "OPENAI_API_KEY": ""
}
```
:::

Put your 4i.codes API key in `OPENAI_API_KEY`, save both files, and run `codex`.

::: warning Model selection
Avoid switching models inside an active CLI session. If you switched models, restart with:

```bash
codex -m gpt-5.6-sol -c model_reasoning_effort="xhigh"
```
:::

Restart Codex after every change to `config.toml` or `auth.json`. The same configuration applies to the VS Code extension and Codex app.

![](/assets/image/cli_config/rc-4.webp)
