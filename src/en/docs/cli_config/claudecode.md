---
title: Claude Code
icon: material-icon-theme:claude
order: 2
footer: false
---

::: tip
For the easiest setup, use [CC-Switch](/en/docs/cli_config/ccs.html).
:::

## Manual configuration

1. Install Claude Code:

```bash
npm install -g @anthropic-ai/claude-code
```

2. Open the Claude configuration directory.

::: tabs
@tab Windows
```bash
start "" "%USERPROFILE%\.claude"
```

@tab macOS / Linux
```bash
open "$HOME/.claude"
```
:::

3. Create or edit `settings.json` and add your 4i.codes Base URL and API key.
4. Save the file, close any running Claude Code session, and start it again.

::: warning
Store the API key only in a local configuration file or environment variable. Do not publish it.
:::
