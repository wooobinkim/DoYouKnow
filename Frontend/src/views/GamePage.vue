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
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 180px;
    height: 180px;
    opacity: 0;
  }
}
.w-btn-neon2 {
  position: relative;
  border: none;
  min-width: 200px;
  min-height: 50px;
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  );
  border-radius: 1000px;
  color: darkslategray;
  cursor: pointer;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  font-weight: 700;
  transition: 0.3s;
  font-size: 1.5rem;
}
.w-btn-neon2:hover {
  transform: scale(1.2);
}
.w-btn-neon2:hover::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 6px solid #00ffcb;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}
</style>
