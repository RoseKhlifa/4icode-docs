---
title: Cherry Studio
icon: /assets/icon/cherrystudio/cherrystudio.png
order: 2
footer: false
---

## Connect Cherry Studio to 4i.codes

Cherry Studio supports OpenAI-compatible APIs and can connect directly to 4i.codes.

::: important
Create a 4i.codes API key before you begin. See [API Keys and Access](/en/docs/quick_start/apikey.html).
:::

1. Open Cherry Studio, select **Settings**, and open **Model Services**.

![Cherry Studio model services](/assets/image/extension/cherrystudio/model-services.png)

2. Click **Add** at the bottom of the provider list.
3. Open the new `4i.codes` provider and enter:

- **API key:** your 4i.codes API key
- **API address:** `https://api.4i.codes`

![Configure the provider](/assets/image/extension/cherrystudio/provider-config.png)

4. Click **Get model list** and select an available model, such as `gpt-5.6-sol`.

![Select a model](/assets/image/extension/cherrystudio/select-model.png)

5. Enable the provider and confirm that the selected model appears in the list.

![Confirm the selected model](/assets/image/extension/cherrystudio/selected-model.png)

6. Return to the Cherry Studio home page, select `gpt-5.6-sol | 4i.codes`, and send a short test message.

![Test the connection](/assets/image/extension/cherrystudio/chat-test.png)

If the model list fails to load, check the API address and key. If the model loads but requests fail, verify that the key's service group allows that model.
