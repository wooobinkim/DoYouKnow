<template>
  <div class="text-area">
    <h1>DYK DataLab</h1>
    <div class="datalab-content">
      <p>주요 6개국의 데이터를 한 눈에!</p>
      <p>각 나라별 한국에 대한 키워드를 확인할 수 있습니다.</p>
      <p class="datalab-router">데이터 확인하러 가기 >></p>
    </div>
  </div>
  <img class="photo" src="../../assets/wordcloud.png" alt="">
</template>

<script></script>

<style scoped>
.photo {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 700px;
  height: 600px;
}

.text-area {
  position: absolute;
  top: 200px;
  right: 100px;
  width: 500px;
  height: 500px;
  text-align: start;
}

h1 {
  font-size: 4em;
  width: 500px;
  color: black;
  font-family: sans-serif;
  text-align: start;
}

.datalab-content p {
  margin: 0;
}

.datalab-router {
  color: gray;
  cursor: pointer;
}
</style>
