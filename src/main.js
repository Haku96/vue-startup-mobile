import Vant from "vant";
import { createApp } from "vue";

import "./mock";
import "@/assets/style/global.scss";
import "vant/lib/index.css";

import App from "./App.vue";

import i18n from "./locales";
import { setupStore } from "@/stores";
import { setupRouter } from "@/router";
import { registerGlobComp } from "@/components/registerGlobComp";

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  // 全局组件注册
  registerGlobComp(app);
  app.use(Vant);

  app.use(i18n);

  app.mount("#app");
}

bootstrap();
