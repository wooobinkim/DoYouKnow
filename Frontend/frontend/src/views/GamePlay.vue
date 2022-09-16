<template>
  <div class="game-background">
    <div class="nav-bar">
      <img @click="gohome" src="@/assets/logo.png" alt="logo" class="logo" />
      <h2 style="color: white; margin-right: 1rem">현재점수: 1 점</h2>
    </div>
    <div class="game-container">
      <img class="card" src="@/assets/game-sample1.jpg" alt="" />
      <img class="card" src="@/assets/game-sample2.jpg" alt="" />
      <button>더많이</button>
      <button>더적게</button>
    </div>

    <button @click="exit">탈출구</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const exit = function () {
      router.push({ name: "GameEnding" });
    };
    const gohome = function () {
      router.push({ name: "MainPage" });
    };

    return {
      exit,
      gohome,
    };
  },
};
</script>

<style scoped>
.game-background {
  background-color: rgba(137, 156, 255, 75%);
  height: 100%;
  width: 100%;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 100px;
  height: 100px;
  z-index: 2;
}
.card {
  height: 600px;
}
</style>
