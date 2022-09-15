import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import DatalabPage from "../views/DatalabPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/datalab",
    name: "DatalabPage",
    component: DatalabPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
