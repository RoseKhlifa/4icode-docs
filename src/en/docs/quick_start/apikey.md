---
title: API Keys and Access
icon: material-symbols:key-outline
order: 3
footer: false
---

## Create an API key

1. Open the console and select **API Keys** from the sidebar.
2. Click **Create key**.
3. Give the key a descriptive name and select the required service group.
4. Keep model restrictions at their default unless you have a specific reason to limit access.
5. Save the key securely. Treat it like a password.

![](/assets/image/quick_start/rc-2.webp)

::: warning
Never publish a complete API key, commit it to a repository, or send it to another person. If a key may have been exposed, revoke it and create a replacement immediately.
:::

## Access and billing

- The selected service group determines which providers and models the key can access.
- Key usage is charged to the account or team that owns the key.
- A key without balance access, or an account without sufficient balance, may receive HTTP `429`.
