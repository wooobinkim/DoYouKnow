<template>
  <div class="text-area">
    <div class="game-title">
      <p>Do You Know</p>
      <span class="more">더 많이 </span>
      <span class="less">더 적게</span><span>?</span>
    </div>
    <div class="game-content">
      <p>총 검색량으로 K-culture의 힘을 알아봅시다!</p>
      <p>어떤 것이 최고의 DoYouKnow 지수를 갖고 있을지 궁금하다면?</p>
      <p class="game-router">플레이 하러 가기 >></p>
    </div>
  </div>
  <img class="photo" src="../../assets/hilow.png">
</template>

<script>
export default {

}
</script>

<style scoped>
.photo {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 40vw;
  height: auto;
}

.text-area {
  width: 600px;
  height: 500px;
  position: absolute;
  top: 200px;
  right: 100px;
  text-align: start;
}

.game-title {
  color: black;
  font-size: 4em;
}

.game-title p {
  margin: 0;
  font-weight: bold;
}

.more {
  color: red;
}

.less {
  color: blue;
}

.game-content {
  color: black;
  font-size: 1.2em;
}
</style>