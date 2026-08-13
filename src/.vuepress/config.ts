import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/doc/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "4i.codes 文档",
      description: "4i.codes 官方文档 — API 接入、终端工具配置、图像接口与问题排查",
    },
    "/en/": {
      lang: "en-US",
      title: "4i.codes Documentation",
      description: "Official 4i.codes documentation for API integration, CLI tools, image APIs, and troubleshooting",
    },
  },
  theme,

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/doc/favicon.png" }],
    ["meta", { name: "theme-color", content: "#efe8df" }],
    [
      "script",
      {},
      `(() => {
        try {
          const brandPreference = localStorage.getItem("4icode-theme");
          const hopePreference = localStorage.getItem("vuepress-theme-hope-scheme");
          const preference = ["light", "dark", "system"].includes(brandPreference || "")
            ? brandPreference
            : hopePreference || "light";
          const isDark = preference === "dark" || (
            (preference === "system" || preference === "auto") &&
            window.matchMedia?.("(prefers-color-scheme: dark)").matches
          );
          const theme = isDark ? "dark" : "light";
          const root = document.documentElement;
          root.dataset.theme = theme;
          root.classList.toggle("dark", isDark);
          root.style.colorScheme = theme;
          document.querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", isDark ? "#0f100f" : "#efe8df");
          localStorage.setItem("vuepress-theme-hope-scheme", theme);
        } catch {}
      })();`,
    ],
  ],

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            silenceDeprecations: ["if-function"],
          },
        },
      },
      server: {
        // dev / preview 都监听 8801, 与 status 项目 (8800) 并存互不干扰
        port: 8801,
        proxy: {
          '/4i-api': {
            target: 'https://api.4i.codes',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/4i-api/, ''),
          },
        },
      },
      preview: {
        port: 8801,
      },
    },
  }),
});
