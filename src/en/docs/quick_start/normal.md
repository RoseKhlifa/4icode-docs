---
title: Common Setup Steps
icon: material-symbols:checklist
order: 5
footer: false
---

## Check Node.js

Open a terminal on Windows or macOS and run the following command. If no version number is shown, install the latest version of Node.js first.

```bash
node -v
```

Download: [Latest Node.js release](https://nodejs.org/en/download)

![](/assets/image/quick_start/rc-4.webp)

### Install the CLIs

Run the following commands in your terminal to install Claude Code, Codex, and Gemini CLI:

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
npm i -g @google/gemini-cli@latest
```

![](/assets/image/quick_start/rc-5.webp)

### Test the installation

Open three terminals and run `claude`, `codex`, and `gemini`. If each CLI opens successfully, the installation is complete.

![](/assets/image/quick_start/rc-6.webp)

![](/assets/image/quick_start/rc-7.webp)

### Common issue

#### Claude Code reports that Git is missing

Install the latest version of Git, then restart the terminal and run `claude` again.

[Download Git for Windows](https://git-scm.com/install/windows)

![](/assets/image/quick_start/rc-8.webp)
