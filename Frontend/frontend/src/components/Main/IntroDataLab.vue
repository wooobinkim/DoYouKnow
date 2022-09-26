<template>
  <section>
    <div class="text-area">
      <h1>Intro Datalab</h1>
      <p>Lorem 로렘</p>
    </div>
    <img class="photo" src="../../assets/wordcloud.png" alt="" />
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
