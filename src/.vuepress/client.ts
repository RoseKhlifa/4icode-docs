import { defineClientConfig } from "vuepress/client";
import { h } from "vue";
import TopBar from "./components/TopBar.vue";

export default defineClientConfig({
  rootComponents: [
    () => h(TopBar),
  ],
});
