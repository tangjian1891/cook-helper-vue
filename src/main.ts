import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./utils/init/index";
import "./assets/style/base.css";
import BaseSvg from "./components/base-svg/base-svg.vue";
const app = createApp(App).use(router);
app.component("BaseSvg", BaseSvg);
app.mount("#app");
