<template>
  <section>
    <div v-if="renderCheck">
      <loading-spinner></loading-spinner>
    </div>
    <div class="first" v-show="!renderCheck">
      <div class="globe-area">
        <MainGlobe class="top-globe" />
      </div>
    </div>
    <div v-if="this.getIsOverlay" class="overlay">
      <div class="left_section">
        <div class="head_box">
          <div class="nation">
            <template v-for="nation in this.getNation" :key="nation">
              <template v-if="this.getConditionNation == nation.value">
                <h1 class="title">{{ nation.text }}</h1>
              </template>
            </template>
          </div>
          <button class="backbtn" @click="overlayoff()">닫기</button>
        </div>
        <div><KeywordRank /></div>
        <div><KeywordDonutGraph /></div>
      </div>
      <div class="right_section">
        <div><KeywordLineGraph /></div>
        <div><KeywordRelated /></div>
        <div><KeywordNews /></div>
      </div>
    </div>
  </section>
</template>

<script>
import MainGlobe from "@/components/Datalab/MainGlobe.vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";
import { computed } from "@vue/runtime-core";
import { useStore, mapGetters } from "vuex";
import KeywordDonutGraph from "@/components/Datalab/KeywordDonutGraph.vue";
import KeywordLineGraph from "@/components/Datalab/KeywordLineGraph.vue";
import KeywordNews from "@/components/Datalab/KeywordNews.vue";
import KeywordRank from "@/components/Datalab/KeywordRank.vue";
import KeywordRelated from "@/components/Datalab/KeywordRelated.vue";

export default {
  components: {
    MainGlobe,
    LoadingSpinner,
    KeywordRelated,
    KeywordRank,
    KeywordNews,
    KeywordLineGraph,
    KeywordDonutGraph,
  },
  setup() {
    const store = useStore();
    const renderCheck = computed(() => store.getters["getDatalabViewLoading"]);

    const overlayoff = function () {
      const data = false;
      store.dispatch("setIsOverlay", { data });
    };

    return {
      renderCheck,
      overlayoff,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay", "getNation", "getConditionNation"]),
  },
};
</script>

<style scoped>
.first {
  background: linear-gradient(#fff0fddf, #fae3c2, #ffdfae);
}
h6 {
  font-size: 1.2em;
  width: 258px;
  color: gray;
  font-family: sans-serif;
  position: absolute;
  top: 180px;
  left: 300px;
  text-align: start;
}

h1 {
  font-size: 4em;
  width: 500px;
  color: white;
  font-family: sans-serif;
  position: absolute;
  top: 190px;
  left: 300px;
  text-align: start;
}

.content-msg {
  font-size: 1em;
  width: 450px;
  color: white;
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

.intro-arrow {
  width: 12%;
  height: 25%;
  position: absolute;
  top: 65%;
  right: 19%;
}
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.05); /* Black background with opacity */
  z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  display: flex;
  justify-content: space-between;
}
.left_section {
  /* background-color: skyblue; */
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  position: relative;
  animation: fadeInLeft 1s;
}
.right_section {
  /* background-color: skyblue; */
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  position: relative;
  animation: fadeInRight 1s;
}
.head_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nation {
  margin-right: 3rem;
  margin-left: 3rem;
}
.backbtn {
  width: 50px;
  height: 50px;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 0.5;
    transform: translateZ(0);
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 0.5;
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
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
