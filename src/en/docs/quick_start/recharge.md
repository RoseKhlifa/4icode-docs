---
title: Add Balance
icon: material-symbols:account-balance-wallet-outline
order: 2
footer: false
---

## Add funds to your account

4i.codes uses a pay-as-you-go balance. Model requests deduct funds according to the active gateway pricing rules.

1. Open the console and select **Subscriptions** from the sidebar.
2. Choose a top-up amount in the balance section and complete payment.
3. After payment succeeds, your API keys can use the available balance.

![](/assets/image/quick_start/rc-1.webp)

## Indicative pricing

| Service | Approximate rate |
| --- | --- |
| Codex Stable | About CNY 0.45 per USD |
| Claude Max pool | CNY 2 per USD |

::: note
Pricing is adjusted dynamically. Always use the current price shown in the console as the authoritative value.
:::

## Concurrency rules

1. Pay-as-you-go balance requests share a concurrency limit of **50**, regardless of model.
2. A request returns **429** when the key cannot use balance or when the account balance is insufficient.
