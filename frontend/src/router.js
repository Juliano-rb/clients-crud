import { createRouter, createWebHistory } from "vue-router";
import Clients from "./components/Clients.vue";
import EditClient from "./components/EditClient.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Clients },
    { name: "clientNew", path: "/client/", component: EditClient },
    { name: "clientEdit", path: "/client/:id", component: EditClient },
  ],
});

export default router;
