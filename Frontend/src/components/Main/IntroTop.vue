<template>
  <section>
<<<<<<< HEAD
    <h1>Do You Know</h1>
    <div class="globe-area">
      
      <MainGlobe class="top-globe"/>
=======
    <h6>Introduce</h6>
    <h1>Do You Know</h1>
    <div class="content-msg">
      <p>한 눈에 세계속의 한국을 알아보고 싶은 당신! Do You Know를 아시나요?</p>
      <p>Do you Know 'DoYouKnow'?</p>
    </div>
    <div class="globe-area">
      
      <!-- <MainGlobe class="top-globe"/> -->
>>>>>>> 3514bdfa4f1d2d880a2eeb7ea24997debb02f453
    </div>
  </section>
</template>

<script>
import MainGlobe from '@/components/Main/MainGlobe.vue'
<<<<<<< HEAD
=======
import AOS from "aos";
import { onMounted } from '@vue/runtime-core';
>>>>>>> 3514bdfa4f1d2d880a2eeb7ea24997debb02f453

export default {
  components: {
    MainGlobe, // eslint-disable-line
<<<<<<< HEAD
=======
  },
  setup(){
    onMounted(() => {
      AOS.init();
    })
>>>>>>> 3514bdfa4f1d2d880a2eeb7ea24997debb02f453
  }
}
</script>

<style scoped>
<<<<<<< HEAD

.photo {
  position: absolute;
  top: 200px;
  right: 200px;
  width: 20.8vw;
  height: 37vh;
}

h1 {
  font-size: 5em;
  width: 258px;
  color: black;
  font-family: sans-serif;
  position: absolute;
  top: 80px;
=======
h6 {
  font-size: 1.2em;
  width: 258px;
  color: gray;
  font-family: sans-serif;
  position: absolute;
  top: 180px;
>>>>>>> 3514bdfa4f1d2d880a2eeb7ea24997debb02f453
  left: 300px;
  animation: slide 2s ease-out;
  text-align: start;
}

<<<<<<< HEAD
=======
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

>>>>>>> 3514bdfa4f1d2d880a2eeb7ea24997debb02f453


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

