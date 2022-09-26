<template>
  <section>
    <h6 id="intro">Introduce</h6>
    <h1>Do You Know</h1>
    <div class="content-msg">
      <p>한 눈에 세계속의 한국을 알아보고 싶은 당신! Do You Know를 아시나요?</p>
      <p>Do you Know 'DoYouKnow'?</p>
    </div>
    <div class="globe-area">
      
      <!-- <MainGlobe class="top-globe"/> -->
    </div>
  </section>
</template>

<script>
import MainGlobe from '@/components/Main/MainGlobe.vue'
import AOS from "aos";
import { onMounted } from '@vue/runtime-core';

export default {
  components: {
    MainGlobe, // eslint-disable-line
  },
  setup(){
    onMounted(() => {
      AOS.init();
    })
  }
}
</script>

<style scoped>

h6 {
  font-size: 1.2em;
  width: 258px;
  color: gray;
  font-family: sans-serif;
  position: absolute;
  top: 180px;
  left: 300px;
  animation: slide 2s ease-out;
  text-align: start;
}

h1 {
  font-size: 4em;
  width: 500px;
  color: black;
  font-family: sans-serif;
  position: absolute;
  top: 190px;
  left: 300px;
  animation: slide 2s ease-out;
  text-align: start;
}

.content-msg {
  font-size: 1em;
  width: 380px;
  color: black;
  font-family: sans-serif;
  font-weight: 400;
  position: absolute;
  top: 350px;
  left: 300px;
  animation: slide 2s ease-out;
  text-align: start;
}

.content-msg p {
  margin: 0;
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

