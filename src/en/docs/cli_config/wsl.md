---
title: Set Up WSL
icon: /wsl2-logo.svg
order: 5
footer: false
---

## Why use WSL?

Windows Subsystem for Linux runs a Linux environment inside Windows without a traditional virtual machine. Many AI terminal tools have better native support on Linux, so WSL can provide a more consistent experience.

## Install WSL

Open a terminal as an administrator and run:

```bash
wsl --install
```

Restart Windows when prompted, then verify the installation:

```bash
wsl -l -v
```

Open the default distribution with:

```bash
wsl
```

::: tip
If `wsl --install` does not respond, try `wsl.exe --install`.
:::

### Useful commands

Unregister a distribution:

```bash
wsl --unregister <DistributionName>
```

Install Ubuntu 24.04 in a specific directory:

```bash
wsl --install Ubuntu-24.04 --location "D:\wsl"
```

See [Microsoft's WSL command reference](https://learn.microsoft.com/en-us/windows/wsl/basic-commands#install) for more options.

## Run Codex or another AI terminal in WSL

Install Node.js with nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
```

Install Codex:

```bash
npm install -g @openai/codex
```

Windows and WSL do not share Codex or Claude configuration directories. Copy `.codex` or `.claude` from your Windows user directory into the Linux home directory, or point CC-Switch at the WSL directory:

```text
\\wsl.localhost\<Your-Distro-Name>\home\<Your-User-Name>\.codex
```

Restart the AI terminal after copying the configuration.

## Use VS Code with WSL

You can either keep VS Code in Windows and enable **Run Codex in Windows Subsystem for Linux**, or connect VS Code directly to a WSL distribution with the Remote Development tools.

If the Codex extension asks you to sign in again, verify that the `.codex` configuration was copied to the Linux home directory and that Codex CLI is installed inside WSL.
