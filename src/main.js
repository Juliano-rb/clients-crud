import { createApp } from "vue";
import App from "./App.vue";
import Clients from "./components/Clients.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Clients }],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
