<template>
  <section>
    <div v-if="this.getIsOverlay == false">
      <div class="title-container">
        <h6
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Introduce
        </h6>
        <h1 class="headTitle" data-aos="fade">DoYouKnow</h1>
        <div
          class="content-msg"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>한 눈에 세계속의 한국을 알아보고 싶은 당신!</p>
          <div class="catch-phrase">Do you Know 'DoYouKnow'?</div>
        </div>
        <div class="intro-arrow">
          <img src="@/assets/intro_arrow.png" />
        </div>
      </div>
    </div>
    <div v-else>
      <transition name="left">
        <div class="left_section" v-if="this.getIsOverlay">
          <div class="head_box">
            <div class="nation">
              <div v-for="nation in this.getNation" :key="nation">
                <div
                  v-if="this.getConditionNation == nation.value"
                  style="display: flex; align-items: center"
                >
                  <div class="nation-container">
                    <p class="head_title">{{ nation.text }}</p>
                  </div>
                  <div v-if="this.getConditionNation == 1">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/us.png"
                    />
                  </div>
                  <div v-else-if="this.getConditionNation == 2">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/uk.png"
                    />
                  </div>
                  <div v-else-if="this.getConditionNation == 3">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/jp.png"
                    />
                  </div>
                  <div v-else-if="this.getConditionNation == 4">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/vi.png"
                    />
                  </div>
                  <div v-else-if="this.getConditionNation == 5">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/in.png"
                    />
                  </div>
                  <div v-else-if="this.getConditionNation == 6">
                    <img
                      class="nationFlag"
                      src="../../../public/datalab/br.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button class="backbtn" @click="overlayoff()">
              <img class="backbtnimg" src="../../assets/exit.png" />
            </button>
          </div>
          <div><DataInfo /></div>
          <div><KeywordRank /></div>
          <div><KeywordDonutGraph /></div>
          <div class="test"><KeywordLineGraph /></div>
        </div>
      </transition>
      <transition name="right">
        <div class="right_section" v-if="this.getIsOverlay">
          <div class="wordcloud-container"><KeywordRelated /></div>
          <div class="news-container"><KeywordNews /></div>
        </div>
      </transition>
    </div>
    <div class="globe-area">
      <MainGlobe class="top-globe" />
    </div>
  </section>
</template>

<script>
import { useStore, mapGetters } from "vuex";
import { onMounted } from "@vue/runtime-core";
import MainGlobe from "@/components/Main/MainGlobe.vue";

import KeywordDonutGraph from "@/components/Datalab/KeywordDonutGraph.vue";
import KeywordLineGraph from "@/components/Datalab/KeywordLineGraph.vue";
import KeywordNews from "@/components/Datalab/KeywordNews.vue";
import KeywordRank from "@/components/Datalab/KeywordRank.vue";
import KeywordRelated from "@/components/Datalab/KeywordRelated.vue";
import DataInfo from "@/components/Datalab/DataInfo.vue";
import AOS from "aos";

export default {
  components: {
    DataInfo,
    MainGlobe,
    KeywordRelated,
    KeywordRank,
    KeywordNews,
    KeywordLineGraph,
    KeywordDonutGraph,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
    const store = useStore();

    const overlayoff = function () {
      const data = false;
      store.dispatch("setIsOverlay", { data });
    };

    return {
      overlayoff,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay", "getNation", "getConditionNation"]),
  },
};
</script>

<style scoped>
@font-face {
  font-family: "RixInooAriDuriR";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
.wordcloud-container {
  width: 400px;
  height: 200px;
}
.nation-container {
  width: 210px;
}
.head_title {
  font-family: "KOTRA_BOLD-Bold";
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
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
.nationFlag {
  width: 3rem;
  height: 3rem;
  margin-top: 1rem;
}
.headTitle {
  font-size: 4em;
  width: 500px;
  background: -webkit-linear-gradient(coral, #6495ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: sans-serif;
  position: absolute;
  top: 190px;
  left: 300px;
  text-align: start;
}
@font-face {
  font-family: "KOTRA_BOLD-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.content-msg {
  font-family: "KOTRA_BOLD-Bold";
  font-size: 1em;
  width: 450px;
  background: -webkit-linear-gradient(#09203f, #537895);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  position: absolute;
  top: 350px;
  left: 300px;
  text-align: start;
}
.intro-arrow {
  width: 15rem;
  height: 15rem;
  position: absolute;
  /* left: -70%; */
  margin-left: 81rem;
  margin-top: 28rem;
}
.content-msg p {
  margin: 20px 0;
  font-size: 1.2em;
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
.catch-phrase {
  font-size: 1.4em;
  margin-top: 30px;
}
.title-container {
  position: absolute;

  left: -13rem;
}

.left_section {
  position: fixed;
  width: 100%;
  height: 77%;
  /* top: -6%; */
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  float: left;
  z-index: 10;
  animation: fadeInLeft 2s;
  
}
.right_section {
  position: fixed;
  width: 100%;
  height: 80%;
  top: 0%;
  bottom: 0;
  right: 2%;
  display: flex;
  flex-direction: column;
  width: 27%;
  float: right;
  z-index: 10;
  justify-content: space-around;
  animation: fadeInRight 2s;
}

.head_box {
  display: flex;
  align-items: center;
  height: 110px;
}
.nation {
  margin-right: 3rem;
  margin-left: 3rem;
  font-size: 2rem;
}
.backbtn {
  all: unset;
  width: 25px;
  height: 25px;
  margin-top: 1.2rem;
}
.backbtnimg {
  width: 100%;
  height: 100%;
}
.backbtnimg:hover {
  transform: scale(1.2);
}
.left-enter-active {
  animation: fadeInLeft 2s;
}
.left-leave-active {
  animation: fadeOutLeft 2s;
}
.right-enter-active {
  animation: fadeInRight 2s;
}
.right-leave-active {
  animation: fadeOutRight 2s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}
@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  0% {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
.news-container {
  width: 400px;
  height: 320px;
  /* background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 4px 10px rgba(81, 77, 77, 0.25);
  border-radius: 17px; */
}
.chart-container {
  /* width: 340px;
  height: 200px; */
  /* background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 4px 10px rgba(81, 77, 77, 0.25);
  border-radius: 17px; */
}

/* .doughnut-container{
  width: 320px;
  height: 320px;
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 4px 10px rgba(81, 77, 77, 0.25);
  border-radius: 20px;
}; */

.test {
  position: absolute;
  top: 63%;
  left: 100%;
}
</style>
