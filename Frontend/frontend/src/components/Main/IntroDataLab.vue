<template>
  <section>
    <div class="text-area">
      <h1>DYK DataLab</h1>
      <div class="datalab-content">
        <p>주요 6개국의 데이터를 한 눈에 알아보세요</p>
      </div>
    </div>
    <img class="photo" src="../../assets/wordcloud.png" alt="">
  </section>
</template>

<script></script>

<style scoped>
.photo {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 510px;
  height: 460px;
}

.text-area {
  position: absolute;
  top: 200px;
  right: 100px;
  width: 500px;
  height: 500px;
}

@keyframes slide {
  from {
    left: -200px;
    opacity: 0;
  }
  to {
    left: 300px;
    opacity: 1;
  }
}

@keyframes disappear {
  from {
    left: 300px;
    opacity: 1;
  }
  to {
    left: -200px;
    opacity: 0;
  }
}
</style>
