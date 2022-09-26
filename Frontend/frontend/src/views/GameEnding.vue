<template>
  <div class="ending-background">
    <img @click="gohome" src="@/assets/logo.png" alt="logo" class="logo" />
    <div class="ending-container">
      <!-- <img
        class="ending-img"
        :src="require(`@/assets/ending-img${randomint}.jpg`)"
        alt=""
      /> -->
      <div class="ending-info">
        <h2 style="color: white">🎯당신의 점수는🎯</h2>
        <h1 class="score">{{ score }}점 !</h1>
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

    // 점수가져오기
    let score = 0;
    let getScore = function () {
      score = window.localStorage.getItem("korea-score");
      window.localStorage.removeItem("korea-score");
      console.log(window.localStorage);
    };
    getScore();

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
      score,
    };
  },
};
</script>

<style scoped>
.ending-background {
  background-color: rgba(137, 156, 255, 75%);
  background: url("@/assets/bg-2.png") no-repeat center center fixed;
  background-size: cover;
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
