<template>
  <section>
    <h6
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      Introduce
    </h6>
    <h1 data-aos="fade">DoYouKnow</h1>
    <div
      class="content-msg"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <p>한 눈에 세계속의 한국을 알아보고 싶은 당신! DoYouKnow를 아시나요?</p>
      <div class="catch-phrase">Do you Know 'DoYouKnow'?</div>
    </div>
    <div class="globe-area">
      <MainGlobe class="top-globe" />
    </div>
  </section>
</template>

<script>
import MainGlobe from "@/components/Main/MainGlobe.vue";
import AOS from "aos";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    MainGlobe, // eslint-disable-line
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
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
  /* animation: slide 2s ease-out; */
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
  text-align: start;
}

.content-msg {
  font-size: 1em;
  width: 450px;
  color: black;
  font-family: sans-serif;
  font-weight: 400;
  position: absolute;
  top: 350px;
  left: 300px;
  text-align: start;
}

.content-msg p {
  margin: 20px 0;
  font-size: 1.2em;
}

.catch-phrase {
  font-size: 1.4em;
  margin-top: 30px;
}
</style>
