---
title: Claude Code 接入 GPT 模型
icon: material-symbols:route
order: 3
footer: false
---

借助 CC-Switch 的本地路由功能，可以把 Claude Code 发出的请求转换为 OpenAI Responses API 格式，再转发到 4i.codes 的 GPT 模型。配置完成后，仍然使用 `claude` 命令启动 Claude Code，并可通过 `/model` 查看和切换已映射的模型。

## 准备工作

开始前，请确认：

- 已安装并启动最新版 [CC-Switch](https://ccswitch.io/zh/download)。
- 已安装 Claude Code，且可以正常运行 `claude` 命令。
- 已在 4i.codes 控制台创建一个 **Codex 分组**的 API Key。创建方法可参考 [API Key 与权限](../quick_start/apikey.html)。

::: important
这里必须使用 **Codex 分组**的 Key，而不是 Claude 分组的 Key。API Key 是调用凭证，请勿发送给他人或提交到公开代码仓库。
:::

## 第一步：为 Claude Code 新建供应商

打开 CC-Switch，在窗口顶部选择 **Claude Code**，然后点击右上角的 `+` 按钮新建供应商。

请先确认选中的是 Claude Code，而不是 Codex。这个供应商虽然最终调用 GPT 模型，但它接收的是 Claude Code 发出的请求，因此需要添加在 Claude Code 的供应商列表中。

![在 CC-Switch 中选择 Claude Code 并新建供应商](/assets/image/cli_config/claude-gpt-1.png)

## 第二步：填写供应商与模型映射

进入供应商编辑页面后，按下面的内容填写：

| 配置项 | 填写内容 | 说明 |
| --- | --- | --- |
| 供应商名称 | `4icode-gpt` | 名称可自定义，建议使用容易识别的名称 |
| 官网链接 | `https://4i.codes` | 可选，用于标记供应商来源 |
| API Key | Codex 分组的 Key | 从 4i.codes 控制台的 Key 列表中创建并获取 |
| 请求地址 | `https://api.4i.codes` | 不要在末尾添加 `/v1` 或其他路径 |
| API 格式 | `OpenAI Responses API（需开启路由）` | 必须选择此项，后续还要启用 CC-Switch 路由 |
| 认证字段 | `ANTHROPIC_AUTH_TOKEN（默认）` | 保持默认值即可 |

::: warning
`API 格式` 是这一步的关键配置。不要选择 Anthropic API 或普通 OpenAI Chat Completions；必须选择 `OpenAI Responses API（需开启路由）`。
:::

接下来配置 **模型映射**：

1. 点击模型映射区域右上角的 `获取模型列表`。
2. 在每个角色右侧的“实际请求模型”中选择需要调用的 GPT 模型。
3. 建议将 Sonnet、Opus、Fable、Haiku 和默认兜底模型都映射到可用的 GPT 模型；如果使用 Subagent，也要为它选择 GPT 模型。需要统一使用当前模型时，可全部选择 `gpt-5.6-sol`。
4. “显示名称”会出现在 Claude Code 的 `/model` 菜单中，可以自定义；为了便于识别，建议直接填写对应的实际模型名。
5. 检查无误后，点击页面右下角的 `保存`。

::: tip
Claude Code 会用 Sonnet、Opus、Haiku 等角色名发起不同类型的请求。模型映射决定每个角色最终调用哪个 GPT 模型；默认兜底模型则负责处理无法明确匹配角色的请求。
:::

![填写供应商信息并映射 GPT 模型](/assets/image/cli_config/claude-gpt-2.png)

## 第三步：打开 CC-Switch 设置

保存供应商后回到 CC-Switch 主界面，点击左上角 CC-Switch 标志右侧的 **设置**图标。

![打开 CC-Switch 设置](/assets/image/cli_config/claude-gpt-3.png)

## 第四步：开启 Claude 路由

在设置页面切换到 **路由**模块，然后完成以下操作：

1. 开启 `路由总开关`。
2. 在“路由启用”区域开启 `Claude`。
3. 确认本地路由状态显示为“运行中”。
4. 保存设置后退出设置页面。

路由总开关和 Claude 开关需要同时开启。CC-Switch 也需要保持运行，否则 Claude Code 无法通过本地路由转发请求。

![开启路由总开关和 Claude 路由](/assets/image/cli_config/claude-gpt-4.png)

## 第五步：在 Claude Code 中验证

如果 Claude Code 已经打开，请先退出并重新启动：

```bash
claude
```

进入 Claude Code 后输入：

```text
/model
```

模型菜单会显示第二步配置的“显示名称”。选择其中一个 GPT 模型，然后发送一条简单消息进行测试。能够正常返回内容，即表示 Claude Code 的请求已经通过 CC-Switch 路由到对应的 GPT 模型。

![在 Claude Code 中使用 model 命令查看映射模型](/assets/image/cli_config/claude-gpt-5.png)

## 常见问题

### `/model` 中没有出现配置的 GPT 模型

- 确认供应商添加在 **Claude Code** 分类下，而不是 Codex 分类下。
- 确认模型映射中的“显示名称”和“实际请求模型”均已填写并保存。
- 如果使用 Subagent，确认它也已经映射到可用的 GPT 模型。
- 完全退出 Claude Code 后重新运行 `claude`。

### 请求仍然没有经过 GPT 模型

- 确认 API 格式为 `OpenAI Responses API（需开启路由）`。
- 确认“路由总开关”和“Claude”路由都已开启。
- 确认 CC-Switch 正在运行，并且本地路由状态为“运行中”。

### 出现鉴权、模型不存在或接口地址错误

- 确认使用的是有效的 **Codex 分组** Key，并且 Key 对应的账户余额和权限正常。
- 确认请求地址是 `https://api.4i.codes`，末尾没有添加 `/v1`。
- 重新点击 `获取模型列表`，并从返回的列表中选择实际可用的 GPT 模型。

### 如何恢复为原来的 Claude 模型

在 CC-Switch 的“设置 → 路由”中关闭 `Claude` 路由，或关闭路由总开关，然后重新启动 Claude Code。需要继续使用其他 Claude 供应商时，再回到 Claude Code 供应商列表切换到对应配置。
