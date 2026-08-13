---
title: Gemini CLI
icon: vscode-icons:file-type-gemini
order: 4
footer: false
---

::: tip
For the easiest setup, use [CC-Switch](/en/docs/cli_config/ccs.html).
:::

## Manual setup

1. Install Gemini CLI:

```bash
npm install -g @google/gemini-cli
```

2. Open the Gemini CLI configuration directory and add the API endpoint and key provided by 4i.codes.
3. Save the configuration and restart Gemini CLI.
4. Send a short test prompt to confirm that the key, service group, and model are available.

::: warning
Keep your API key in a local configuration file or environment variable. Never commit it to a public repository.
:::
