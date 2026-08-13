import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/docs/": [
    {
      text: "入门指南",
      icon: "material-symbols:explore-outline",
      prefix: "quick_start/",
      children: [
        {
          text: "认识 4i.codes",
          icon: "material-symbols:domain",
          link: "intro.md",
        },
        {
          text: "余额充值",
          icon: "material-symbols:account-balance-wallet-outline",
          link: "recharge.md",
        },
        {
          text: "API Key 与权限",
          icon: "material-symbols:key-outline",
          link: "apikey.md",
        },
        {
          text: "服务分组与模型",
          icon: "material-symbols:hub-outline",
          link: "models.md",
        },
        {
          text: "接入前准备",
          icon: "material-symbols:checklist",
          link: "normal.md",
        },
      ],
    },
    {
      text: "API 接口",
      icon: "material-symbols:api",
      prefix: "api/",
      children: [
        {
          text: "五类接口参考",
          icon: "material-symbols:account-tree-outline",
          link: "README.md",
        },
      ],
    },
    {
      text: "终端工具接入",
      icon: "material-symbols:terminal",
      prefix: "cli_config/",
      children: [
        {
          text: "通过 CC-Switch 导入",
          icon: "material-symbols:sync-alt",
          link: "ccs.md",
        },
        {
          text: "Claude Code 接入",
          icon: "material-icon-theme:claude",
          link: "claudecode.md",
        },
        {
          text: "Codex 接入",
          icon: "hugeicons:chat-gpt",
          link: "codex.md",
        },
        {
          text: "Gemini CLI 接入",
          icon: "vscode-icons:file-type-gemini",
          link: "gemini.md",
        },
        {
          text: "WSL 环境设置",
          icon: "/wsl2-logo.svg",
          link: "wsl.md",
        },
      ],
    },
    {
      text: "图像生成",
      icon: "material-symbols:image-outline",
      prefix: "draw/",
      children: [
        {
          text: "图像 API 概览",
          icon: "material-symbols:dashboard-outline",
          link: "README.md",
        },
      ],
    },
    {
      text: "客户端与集成",
      icon: "material-symbols:extension-outline",
      prefix: "extension/",
      children: [
        {
          text: "cURL 请求示例",
          icon: "material-symbols:data-object",
          link: "curl.md",
        },
        {
          text: "Cherry Studio 接入",
          icon: "/assets/icon/cherrystudio/cherrystudio.png",
          link: "cherrystudio.md",
        },
        {
          text: "OpenCode 接入",
          icon: "/assets/icon/opencode/opencode.jpg",
          link: "opencode.md",
        },
        {
          text: "Hermes Agent 接入",
          icon: "streamline:command",
          link: "hermes.md",
        },
      ],
    },
    {
      text: "问题排查",
      icon: "material-symbols:help-outline",
      prefix: "questions/",
      children: [
        {
          text: "Codex 常见问题",
          icon: "hugeicons:chat-gpt",
          link: "codex.md",
        },
      ],
    },
  ],
  "/en/docs/": [
    {
      text: "Getting Started",
      icon: "material-symbols:explore-outline",
      prefix: "quick_start/",
      children: [
        { text: "About 4i.codes", icon: "material-symbols:domain", link: "intro.md" },
        { text: "Add Balance", icon: "material-symbols:account-balance-wallet-outline", link: "recharge.md" },
        { text: "API Keys and Access", icon: "material-symbols:key-outline", link: "apikey.md" },
        { text: "Service Groups and Models", icon: "material-symbols:hub-outline", link: "models.md" },
        { text: "Before You Connect", icon: "material-symbols:checklist", link: "normal.md" },
      ],
    },
    {
      text: "API Endpoints",
      icon: "material-symbols:api",
      prefix: "api/",
      children: [
        { text: "Five Endpoint Types", icon: "material-symbols:account-tree-outline", link: "README.md" },
      ],
    },
    {
      text: "Terminal Tools",
      icon: "material-symbols:terminal",
      prefix: "cli_config/",
      children: [
        { text: "Import with CC-Switch", icon: "material-symbols:sync-alt", link: "ccs.md" },
        { text: "Claude Code", icon: "material-icon-theme:claude", link: "claudecode.md" },
        { text: "Codex", icon: "hugeicons:chat-gpt", link: "codex.md" },
        { text: "Gemini CLI", icon: "vscode-icons:file-type-gemini", link: "gemini.md" },
        { text: "Set Up WSL", icon: "/wsl2-logo.svg", link: "wsl.md" },
      ],
    },
    {
      text: "Image Generation",
      icon: "material-symbols:image-outline",
      prefix: "draw/",
      children: [
        { text: "Image API Overview", icon: "material-symbols:dashboard-outline", link: "README.md" },
      ],
    },
    {
      text: "Clients and Integrations",
      icon: "material-symbols:extension-outline",
      prefix: "extension/",
      children: [
        { text: "cURL Examples", icon: "material-symbols:data-object", link: "curl.md" },
        { text: "Cherry Studio", icon: "/assets/icon/cherrystudio/cherrystudio.png", link: "cherrystudio.md" },
        { text: "OpenCode", icon: "/assets/icon/opencode/opencode.jpg", link: "opencode.md" },
        { text: "Hermes Agent", icon: "streamline:command", link: "hermes.md" },
      ],
    },
    {
      text: "Troubleshooting",
      icon: "material-symbols:help-outline",
      prefix: "questions/",
      children: [
        { text: "Codex FAQ", icon: "hugeicons:chat-gpt", link: "codex.md" },
      ],
    },
  ],
});
