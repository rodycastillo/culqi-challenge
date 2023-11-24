import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
const pinia = createPinia();
import "./style.css";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
