---
title: Import with CC-Switch
icon: material-symbols:sync-alt
order: 1
footer: false
---

## What is CC-Switch?

CC-Switch manages API providers for Codex, Claude Code, and Gemini CLI. It can import providers, switch configurations, manage MCP servers, and run a local proxy.

![](/assets/image/quick_start/rc-0.webp)

### Install CC-Switch

Download the latest release from the [CC-Switch website](https://ccswitch.io/en/download) or [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest).

![](/assets/image/quick_start/rc-9.webp)

### Import 4i.codes

1. Install and open CC-Switch.
2. Sign in to 4i.codes and open [API Key management](https://4i.codes/console/keys).
3. Create a key and select the service group you want to use.
4. Find the key in the list and click **Import CCS**.
5. Allow the browser to open CC-Switch, confirm the provider, and enable it.
6. Restart Codex, Claude Code, or Gemini CLI and send a test message.

::: tip
You do not need to enter the Base URL or API key manually during import. 4i.codes generates the provider configuration from the key's service group.
:::

### Import rules

- OpenAI groups are imported into Codex.
- Claude groups are imported into Claude Code.
- Gemini groups are imported into Gemini CLI.
- Antigravity groups require you to choose Claude Code or Gemini CLI.
- To use GPT models from Claude Code, enable routing in CC-Switch.

::: warning
An API key grants model access and can incur charges. Never share a complete key or commit it to a public repository.
:::
