<template>
  <NavBar />
  <swiper
    :modules="modules"
    class="mySwiper"
    :direction="'vertical'"
    :mousewheel="{ forceToAxis: true }"
    :pagination="{ clickable: true }"
    :speed="1000"
  >
    <swiper-slide class="first"><IntroTop /></swiper-slide>
    <swiper-slide class="second"><IntroDataLab /></swiper-slide>
    <swiper-slide class="third"><IntroAwards /></swiper-slide>
    <swiper-slide class="forth"><IntroGame /></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import required modules
import { Navigation, Pagination, Mousewheel } from "swiper";

import IntroTop from "@/components/Main/IntroTop.vue";
import IntroDataLab from "@/components/Main/IntroDataLab.vue";
import IntroAwards from "@/components/Main/IntroAwards.vue";
import IntroGame from "@/components/Main/IntroGame.vue";
import NavBar from "@/components/Main/NavBar.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    IntroTop,
    IntroDataLab,
    IntroAwards,
    IntroGame,
    NavBar,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel],
    };
  },
};
</script>
<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.first {
  background-color: #ffdfae;
}
.second {
  background-color: #f5f5f5;
}
.third {
  background-color: #d4af37;
}
.forth {
  background-color: #899cff;
}
</style>
