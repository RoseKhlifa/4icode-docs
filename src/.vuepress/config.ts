import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/doc/",
  lang: "zh-CN",
  title: "4i.codes 文档",
  description: "4i.codes 官方文档 — API 接入、CLI 配置、画图接口、常见问题",
  theme,

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/doc/favicon.png" }],
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
