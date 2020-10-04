import { createRouter, createWebHistory } from "vue-router";
import Clients from "./components/Clients.vue";
import EditClient from "./components/EditClient.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Clients },
    { path: "/client/", component: EditClient },
    { path: "/client/:id", component: EditClient },
  ],
});

export default router;
