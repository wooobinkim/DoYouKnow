<template>
  <div class="game-background">
    <img @click="gohome" src="@/assets/logo.png" alt="logo" class="logo" />
    <div class="game-container">
      <img class="game-logo" src="@/assets/hilow.png" alt="game-logo" />
      <div class="intro-container">
        <div class="sub-intro">
          <h3>(그런데 국뽕을 곁들인)</h3>
        </div>
        <div class="main-intro">
          <h1>어떤 키워드들이 더 많이 검색됐을까?</h1>
          <h2 class="intro-h2">Google 검색량 2022년 9월 기준</h2>
        </div>
      </div>
      <div class="button-container">
        <button class="w-btn-neon2" @click="gamestart">시이작 !</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const gamestart = function () {
      router.push({ name: "GamePlay" });
    };
    const gohome = function () {
      router.push({ name: "MainPage" });
    };

    return {
      gamestart,
      gohome,
    };
  },
};
</script>

<style scoped>
.game-background {
  background-color: rgba(137, 156, 255, 75%);
  background: url("@/assets/bg-2.png") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.logo {
  width: 100px;
  height: 100px;
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
}
.game-logo {
  height: 700px;
  width: 700px;
  margin-top: -7rem;
}
.game-logo:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0px 10px rgba(0, 0, 0, 0.5));
}
.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -15rem;
}
.sub-intro {
  color: white;
  margin-left: 20rem;
  margin-top: -2rem;
}
.main-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro-h2 {
  color: #909090;
  margin-top: -1rem;
}
.button-container {
  height: 6.3rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
button {
  padding: 13px;
  width: 200px;
  background: none;
  border: 3px solid white;
  border-radius: 200px;
  font-weight: bold;
  color: white;
  font-size: 16pt;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}
button:hover {
  color: black;
  text-shadow: 1px 2px grey;
  background-color: white;
}
</style>
