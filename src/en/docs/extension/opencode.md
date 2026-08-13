---
title: OpenCode
icon: /assets/icon/opencode/opencode.jpg
order: 3
footer: false
---

## Connect OpenCode Desktop to 4i.codes

Before you begin, create an API key for an OpenAI service group in the 4i.codes console. See [API Keys and Access](../quick_start/apikey.html) if needed.

### Step 1: Download and open OpenCode

Visit the [OpenCode download page](https://opencode.ai/download), install the desktop app for your operating system, and open it to reach the main screen.

![](/assets/image/extension/opencode/rc-01.webp)

### Step 2: Add a custom OpenAI-compatible provider

1. Click the current model name at the lower-left corner of the prompt box.

![](/assets/image/extension/opencode/rc-02.webp)

2. Click `View 70+ more providers` at the bottom of the model window.

![](/assets/image/extension/opencode/rc-03.webp)

3. Select `Custom OpenAI-compatible provider` from the provider list.

![](/assets/image/extension/opencode/rc-04.webp)

### Step 3: Configure the custom provider

Use the following values:

- `Provider ID`: enter `4icodes`. This field accepts lowercase letters, numbers, hyphens, or underscores.
- `Display name`: choose any name; `4i.codes` is recommended for easy identification.
- `Base URL`: enter `https://api.4i.codes/v1`.
- `API key`: enter the API key created in the 4i.codes console.

![](/assets/image/extension/opencode/rc-05.webp)

Scroll down to the `Models` section. Click `Add model`, then enter each model ID and display name in a separate row.

| Model ID | Display name |
|---|---|
| `gpt-5.6-sol` | `GPT-5.6 Sol` |
| `gpt-5.6-terra` | `GPT-5.6 Terra` |
| `gpt-5.6-luna` | `GPT-5.6 Luna` |
| `gpt-5.5` | `GPT-5.5` |

![](/assets/image/extension/opencode/rc-06.webp)

After adding the models, scroll down and click `Submit`.

### Step 4: Test the model connection

After submitting the provider, select one of the models you just added from the lower-left corner of the prompt box and send a simple test message. If the model replies normally, 4i.codes has been connected to OpenCode successfully.

![](/assets/image/extension/opencode/rc-07.webp)

::: warning
An API key grants access to your account balance. Never share a complete key or commit it to a public repository.
:::
