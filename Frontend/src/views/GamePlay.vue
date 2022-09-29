<template>
  <div class="game-background">
    <div class="game-container">
      <div class="card-left">
        <div class="img-container">
          <img class="card-img" id="url-img" :src="game.left.imgUrl" alt="" />
        </div>
        <div class="ans-container">
          <h2 id="name-h2">{{ game.left.name }}</h2>
          <h2 style="font-size: 2rem" id="count-h2">
            {{ game.left.count.toLocaleString("ko-KR") }} 회
          </h2>
        </div>
      </div>
      <div class="icon-container">
        <img class="icon-img" src="@/assets/vs.png" alt="" />
      </div>
      <div class="card-right">
        <div class="img-container">
          <img class="card-img" id="url1-img" :src="game.right.imgUrl" alt="" />
        </div>
        <div class="qus-container" id="qus-container">
          <h2 id="name1-h2">{{ game.right.name }}</h2>
          <div id="button-container">
            <button @click="checkHigher">더많이</button>
            <button @click="checkLower">더적게</button>
          </div>
        </div>
      </div>
      <div class="score-board">
        <h2>점수: {{ score }} 점</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    store.dispatch("setGameData");
    const data = reactive(computed(() => store.getters.getGameData));

    // const data = computed(() => store.getters.getGameData()).value;
    // console.log(store.getters, "스토어야");
    // console.log(data, "data");

    // console.log(JSON.parse(JSON.stringify(data)), "data");
    // console.log(data, "data");

    let game = {
      left: null,
      right: null,
      playDatas: [],
    };
    let score = ref(0);
    // random data 초기화하는 곳
    const randomData = function () {
      if (data.length == 0) {
        data;
      }
      return data.splice(Math.floor(Math.random() * (data.length - 1)), 1)[0];
    };
    game.left = randomData();
    console.log(game.left, "gameleft");
    game.right = randomData();

    // 더많이 버튼
    const checkHigher = function () {
      //TODO: 숫자보여주기
      removeBtn();
      if (game.left.count <= game.right.count) {
        score.value++;
        //TODO: 중앙버튼 바뀌기
        setTimeout(() => {
          // 오른쪽 데이터를 왼쪽으로 보내기
          document.getElementById("name-h2").innerText = game.right.name;
          document.getElementById("count-h2").innerText =
            game.right.count.toLocaleString("ko-KR") + " 회";
          document.getElementById("url-img").src = game.right.imgUrl;
          game.left = game.right;
          // 오른쪽에 새로운 데이터 받기
          game.right = randomData();
          document.getElementById("newDiv").remove();
          document.getElementById("url1-img").src = game.right.imgUrl;
          document.getElementById("name1-h2").innerText = game.right.name;
          document.getElementById("button-container").style.display = "block";
          document.getElementById("qus-container").style.left = "61%";

          // localStorage에 점수 저장
          window.localStorage.setItem("korea-score", score.value);
        }, 2000);
      } else {
        //TODO: 중앙버튼 바뀌기
        setTimeout(() => {
          // localStorage에 점수 저장
          window.localStorage.setItem("korea-score", score.value);
          router.push({ name: "GameEnding" });
        }, 2000);
      }
    };
    // 더적게버튼
    const checkLower = function () {
      //TODO: 숫자보여주기
      removeBtn();
      if (game.left.count >= game.right.count) {
        score.value++;
        //TODO: 중앙버튼 바뀌기
        setTimeout(() => {
          // 오른쪽 데이터를 왼쪽으로 보내기
          document.getElementById("name-h2").innerText = game.right.name;
          document.getElementById("count-h2").innerText =
            game.right.count.toLocaleString("ko-KR") + " 회";
          document.getElementById("url-img").src = game.right.imgUrl;
          game.left = game.right;
          // 오른쪽에 새로운 데이터 받기
          game.right = randomData();
          document.getElementById("newDiv").remove();
          document.getElementById("url1-img").src = game.right.imgUrl;
          document.getElementById("name1-h2").innerText = game.right.name;
          document.getElementById("button-container").style.display = "block";
          document.getElementById("qus-container").style.left = "61%";

          // localStorage에 점수 저장
          window.localStorage.setItem("korea-score", score.value);
        }, 2000);
      } else {
        //TODO: 중앙버튼 바뀌기
        setTimeout(() => {
          // localStorage에 점수 저장
          window.localStorage.setItem("korea-score", score.value);
          router.push({ name: "GameEnding" });
        }, 2000);
      }
    };

    // button 없애기
    const removeBtn = function () {
      document.getElementById("button-container").style.display = "none";
      // TODO: 숫자 애니메이션 보여주기
      const newDiv = document.createElement("div");
      const newH2 = document.createElement("h2");
      const newText = document.createTextNode(
        game.right.count.toLocaleString("ko-KR") + " 회"
      );
      newH2.appendChild(newText);
      newDiv.appendChild(newH2);
      document.getElementById("qus-container").appendChild(newDiv);
      newDiv.id = "newDiv";
      newH2.id = "ans-count";
      newH2.className = "ans-count";
      document.getElementById("ans-count").style.fontSize = "2rem";
      document.getElementById("ans-count").style.color = "white";
      document.getElementById("qus-container").style.left = "71%";
    };

    return {
      checkHigher,
      checkLower,
      game,
      score,
      data,
    };
  },
  // computed: {
  //   ...mapGetters(["getGameData"]),
  // },
  // watch: {
  //   getGameData: function (e) {
  //     this.data = e;
  //   },
  // },
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
.img-container {
  margin-top: 6rem;
  margin-right: 5rem;
  margin-left: 9rem;
}
.card-img {
  margin: auto;
  margin-bottom: 20px;
  height: 25rem;
  width: 32rem;
  overflow: hidden;
  transition: all 0.2s;
  vertical-align: middle;
  transform: scale(1);
  border-radius: 20px;
  filter: drop-shadow(0 0px 5px rgba(0, 0, 0, 0.35));
}
.card-left {
  background: url("@/assets/cg-0.jpg") no-repeat center center fixed;
  background-size: cover;
  width: 50%;
  height: 47.1rem;
}
.card-right {
  background: url("@/assets/cg-3.jpg") no-repeat center center fixed;
  background-size: cover;
  width: 50%;
  height: 47.1rem;
}
.card-img:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0px 10px rgba(0, 0, 0, 0.5));
}
.icon-img {
  height: 100px;
  width: 100px;
}
.ans-container {
  position: absolute;
  top: 65%;
  left: 20%;
  text-align: center;
}
.qus-container {
  position: absolute;
  top: 65%;
  left: 61%;
  justify-content: center;
  text-align: center;
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
  margin-left: 20px;
}
button:hover {
  color: black;
  text-shadow: 1px 2px grey;
  background-color: white;
}
.score-board {
  position: fixed;
  bottom: 10px;
  right: 25px;
}
</style>
