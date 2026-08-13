---
title: OpenCode
icon: /assets/icon/opencode/opencode.jpg
order: 3
footer: false
---

## Configure OpenCode

1. Download the [OpenCode quick configuration archive](/assets/file/opencode/QuickConfiguration.zip) and extract it.

![](/assets/image/extension/opencode/rc-01.webp)

2. Open `opencode.json`, enter the appropriate API keys in the Gemini, Claude, and GPT sections, and save the file.

::: important
Each key must belong to the correct service group. See [API Keys and Access](/en/docs/quick_start/apikey.html).
:::

![Gemini configuration](/assets/image/extension/opencode/rc-02.webp)

![Claude configuration](/assets/image/extension/opencode/rc-03.webp)

![GPT configuration](/assets/image/extension/opencode/rc-04.webp)

3. Install and run OpenCode once:

```bash
npm i -g opencode-ai
opencode
```

4. Open the OpenCode configuration directory.

::: tabs
@tab Windows
```bash
start "" "%USERPROFILE%\.config\opencode"
```

@tab macOS
```bash
open "$HOME/.config/opencode"
```
:::

5. Copy the edited `opencode.json` and `plugins` directory into the configuration directory.
6. Run `opencode`, then use `/models` to confirm that the models are available.

![](/assets/image/extension/opencode/rc-07.webp)
