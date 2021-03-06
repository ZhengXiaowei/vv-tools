import "vfonts/FiraCode.css";
import "./style/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import componentRegister from "./plugins/app";

const app = createApp(App);

componentRegister(app);
app.use(router);

router.isReady().then((_) => {
  app.mount("#app");
});
