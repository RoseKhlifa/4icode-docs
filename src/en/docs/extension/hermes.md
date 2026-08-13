---
title: Hermes Agent
icon: streamline:command
order: 4
footer: false
---

## Who this guide is for

This guide is for users who want to run `hermes` directly on their own computer. Windows users must run Hermes inside WSL.

## 1. Install Hermes

Run the installer in macOS, Linux, or a WSL terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Hermes is normally installed under `~/.hermes`. Restart the terminal if the `hermes` command is not immediately available.

## 2. Connect Hermes to 4i.codes

Open `~/.hermes/config.yaml` and configure the model:

```yaml
model:
  provider: custom
  default: gpt-5.6-sol
  base_url: https://api.4i.codes
  api_mode: chat_completions
```

Then add your key to `~/.hermes/.env`:

```bash
OPENAI_API_KEY=YOUR_4ICODES_KEY
```

Create a key first if needed: [API Keys and Access](../quick_start/apikey.html).

## 3. Apply the cache compatibility patch

The patch currently targets the GPT Codex service group.

```bash
git clone https://github.com/foryourhealth111-pixel/hermes-codex-proxy-cache-compat.git
cd hermes-codex-proxy-cache-compat
bash scripts/apply_patches.sh ~/.hermes/hermes-agent
bash scripts/install_skill.sh ~/.hermes
```

This aligns Hermes requests with Codex caching behavior and can improve cache hit rates.

## 4. Test the installation

```bash
hermes
```

Ask a short question. If Hermes returns a response, the basic setup is complete. For key, address, or model errors, recheck `config.yaml`, `.env`, and the key's service group.

After Hermes updates, you may need to apply the compatibility patch again.
