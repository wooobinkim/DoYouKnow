<template>
  <section>
    <h1>Do You Know??!???????????????!</h1>
    <img class="photo" src="https://previews.123rf.com/images/joinanita/joinanita1510/joinanita151000054/46090289-%EC%A7%80%EA%B5%AC%EB%B3%B8-%EC%95%84%EC%9D%B4%EC%BD%98.jpg" alt="">
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  let mainText = document.querySelector('h1')
  window.addEventListener('scroll', function(){
    let value = window.scrollY
    
    if(value > 300){
      mainText.style.animation = 'disappear 1s ease-out forwards'
    }
    else {
      mainText.style.animation = 'slide 1s ease-out'
    }
  })
})
</script>

<style scoped>
section {
  height: 100vh;
  background: url(https://mblogthumb-phinf.pstatic.net/20130819_85/choimj941114_1376913324620CS7yN_JPEG/C0AC1.JPG?type=w2) fixed;
  background-size: cover;
}

.photo {
  position: absolute;
  top: 200px;
  right: 200px;
  width: 20.8vw;
  height: 37vh;
}

h1 {
  font-size: 6em;
  width: 258px;
  color: white;
  font-family: sans-serif;
  position: absolute;
  top: 80px;
  left: 400px;
  animation: slide 2s ease-out;
}

@keyframes slide {
  from {
    left: -200px;
    opacity: 0;
  }
  to {
    left: 400px;
    opacity: 1;
  }
}

@keyframes disappear {
  from {
    left: 400px;
    opacity: 1;
  }
  to {
    left: -200px;
    opacity: 0;
  }
}
</style>

