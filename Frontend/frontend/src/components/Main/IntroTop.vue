<template>
  <section>
    <h1>Do You Know</h1>
    <div class="globe-area">
      
      <MainGlobe class="top-globe"/>
    </div>
  </section>
</template>

<script>
import MainGlobe from '@/components/Main/MainGlobe.vue'

export default {
  components: {
    MainGlobe, // eslint-disable-line
  }
}
</script>

<style scoped>

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
  left: 300px;
  animation: slide 2s ease-out;
  text-align: start;
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

