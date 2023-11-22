import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
const pinia = createPinia();
import "./style.css";

createApp(App).use(router).use(pinia).mount("#app");