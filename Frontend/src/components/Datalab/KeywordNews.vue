<template>
  <swiper :slides-per-view="1" :navigation="true">
    <swiper-slide v-for="news in test.getRelatedKeywordNews" :key="news">
      <div style="">
        <div>
          <a :href="news.url" target="_blank">
            <img :src="news.urlToImage" width="80" />
            <h3>{{ news.title }}</h3>
            <!-- <p style="font-size:5px">{{ ((news.publishedAt.split("T"))[0].split("-"))[0] }}.
          {{ ((news.publishedAt.split("T"))[0].split("-"))[1] }}.
          {{ ((news.publishedAt.split("T"))[0].split("-"))[2] }}</p> -->
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <!-- <swiper
:slides-per-view="4"
:space-between="30"
@swiper="onSwiper"
@slideChange="onSlideChange"
class="default-slider">
<swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide></swiper> -->
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { mapGetters, mapActions } from "vuex";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/modules/navigation/navigation.min.css";
SwiperCore.use([Navigation]);
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(["relatedkeywordnews"]),
  },
  computed: {
    ...mapGetters(["getCurrentRank", "getRelatedKeywordNews"]),
  },
  watch: {
    getCurrentRank: function () {
      // 키워드 그 나라 언어로 번역 후에 넘겨주어야함.. 근데 번역이 안된다..!~!
      this.relatedkeywordnews([
        this.test.getCondition,
        this.test.getCurrentRank,
      ]);
    },
  },
  setup() {
    const store = useStore();
    const test = computed(() => store.getters);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      test,
    };
  },
};
</script>

<style>
.swiper-slide {
  display: flex;
  height: 300px;
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 50%; */
  /* margin: 0 25%; */
  font-size: 24px;
  font-weight: 700;
}
.swiper-slide:nth-child(1n) {
  /* background-color: palevioletred; */
}
.swiper-slide:nth-child(2n) {
  /* background-color: skyblue; */
}
.swiper-slide:nth-child(3n) {
  /* background-color: peru; */
}
.swiper-slide:nth-child(4n) {
  /* background-color: cadetblue; */
}
.swiper-slide:nth-child(5n) {
  /* background-color: plum; */
}
/* .swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}
.swiper-slide:nth-child(7n) {
  background-color: palegreen;
} */
a {
  text-decoration: none;
  color: black;
}
</style>
