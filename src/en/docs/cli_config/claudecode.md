---
title: Claude Code Integration
icon: material-icon-theme:claude
order: 2
footer: false
---

::: tip
For the easiest setup, use [CC-Switch](ccs.html).
:::

1. Open the Claude Code configuration directory.

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

![](/assets/image/cli_config/rc-1.webp)

2. Create `settings.json` manually and add the following content.

::: important
This example uses the official Claude service group. If you use another group, replace `ANTHROPIC_BASE_URL` with the address provided for that group.
:::

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "",
    "ANTHROPIC_BASE_URL": "https://api.4i.codes",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

3. Put the API key created in the 4i.codes console into `ANTHROPIC_AUTH_TOKEN`, then save the file.

4. Run `claude` in the terminal and send a message to verify the configuration.

![](/assets/image/cli_config/rc-2.webp)
