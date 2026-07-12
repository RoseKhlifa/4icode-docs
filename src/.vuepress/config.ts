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
      // ⚠ 关键: HTML 里 <img src="/doc/logo.png"> 这类硬编码 base 路径,
      // Vite build 时 rollup 会尝试作为模块 resolve 结果找不到.
      // 声明为 external -> 当作运行时 URL 保留, 不打包.
      build: {
        rollupOptions: {
          external: (source: string) =>
            source.startsWith("/doc/") ||
            source.startsWith("/assets/") ||
            source.startsWith("/vendors/"),
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
