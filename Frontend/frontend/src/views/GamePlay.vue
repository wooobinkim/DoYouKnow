<template>
  <div class="game-background">
    <div class="nav-bar">
      <img @click="gohome" src="@/assets/logo.png" alt="logo" class="logo" />
      <h2 style="margin-right: 1rem; margin-top: 3rem">현재점수: 1 점</h2>
    </div>
    <div class="game-container">
      <div class="card-left">
        <img class="card-img" src="@/assets/game-sample1.jpg" alt="" />
        <div class="ans-container">
          <h2>강호동</h2>
          <h2 style="font-size: 2rem">123,345 회</h2>
        </div>
      </div>
      <div class="icon-container">
        <img class="icon-img" src="@/assets/vs.png" alt="" />
      </div>
      <div class="card-right">
        <img class="card-img" src="@/assets/game-sample2.jpg" alt="" />
        <div class="qus-container">
          <h2>유재석</h2>
          <button>더많이</button>
          <button>더적게</button>
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
h2 {
  color: white;
}
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
.game-container {
  display: flex;
}
.icon-container {
  position: absolute;
  background-color: #ffdfae;
  border-radius: 50%;
  top: 50%;
  left: 46.8%;
}
.card-img {
  height: 649px;
  width: 768px;
}
.icon-img {
  height: 100px;
  width: 100px;
}
.ans-container {
  position: absolute;
  top: 65%;
  left: 23%;
  text-align: center;
}
.qus-container {
  position: absolute;
  top: 65%;
  left: 72%;
  justify-content: center;
  text-align: center;
}
</style>
