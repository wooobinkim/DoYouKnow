<template>
  <div class="ending-background">
    <img @click="gohome" src="@/assets/logo.png" alt="logo" class="logo" />
    <div class="ending-container">
      <img
        class="ending-img"
        :src="require(`@/assets/ending-img${randomint}.jpg`)"
        alt=""
      />
      <div class="ending-info">
        <h2 style="color: white">🎯당신의 점수는🎯</h2>
        <h1 class="score">1점 !</h1>
        <h3 style="color: white">아이쿠 손이 미끄러졌네~~🔨</h3>
        <h3 style="margin-top: 0rem">유저 평균 점수 6.3점</h3>
        <div class="button-container">
          <button class="w-btn-neon2" @click="gamestart">다시할래</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    let randomint = Math.ceil(Math.random() * 3).toString();

    const gohome = function () {
      router.push({ name: "MainPage" });
    };
    const gamestart = function () {
      router.push({ name: "GamePage" });
    };

    return {
      randomint,
      gamestart,
      gohome,
    };
  },
};
</script>

<style scoped>
.ending-background {
  background-color: rgba(137, 156, 255, 75%);
  height: 100%;
  width: 100%;
}
.logo {
  width: 100px;
  height: 100px;
  z-index: 2;
}
.ending-container {
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  z-index: 2;
}
.ending-img {
  width: 100%;
  height: 600px;
  opacity: 70%;
  margin-top: -8rem;
  margin-bottom: 3.1rem;
}
.score {
  color: yellow;
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.ending-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}
.button-container {
  display: flex;
  margin-top: 2.5rem;
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
