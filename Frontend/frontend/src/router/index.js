import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import DatalabPage from "../views/DatalabPage.vue";
import GamePage from "../views/GamePage.vue";
import GamePlay from "../views/GamePlay.vue";
import GameEnding from "../views/GameEnding.vue";

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
  {
    path: "/game",
    name: "GamePage",
    component: GamePage,
  },
  {
    path: "/game-playing",
    name: "GamePlay",
    component: GamePlay,
  },
  {
    path: "/gameend",
    name: "GameEnding",
    component: GameEnding,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
