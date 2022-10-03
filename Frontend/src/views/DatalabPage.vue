<template>
  <div v-if="renderCheck">
    <loading-spinner></loading-spinner>
  </div>
  <div class="first" v-show="!renderCheck">
    <div class="globe-area">
      <MainGlobe class="top-globe" />
    </div>
  </div>
    <transition name="left">
      <div class="left_section" v-if="this.getIsOverlay">
        <div class="head_box">
          <div class="nation">
            <template v-for="nation in this.getNation" :key="nation">
              <template v-if="this.getConditionNation == nation.value">
                <h1 class="title">{{ nation.text }}</h1>
              </template>
            </template>
          </div>
          <button class="backbtn" @click="overlayoff()"><img class="backbtnimg" src="../assets/exit.png"></button>
        </div>
        <div><KeywordRelated /></div>
        <div><KeywordRank /></div>
      </div>
    </transition>
    <transition name="right">
    <div class="right_section" v-if="this.getIsOverlay">
      <div><KeywordNews /></div>
      <div><KeywordLineGraph /></div>
      <div><KeywordDonutGraph /></div>
    </div>
    </transition>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore, mapGetters } from "vuex";
import MainGlobe from "@/components/Datalab/MainGlobe.vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";
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

    const overlayon = function () {
      const data = true;
      store.dispatch("setIsOverlay", { data });
    };
    const overlayoff = function () {
      const data = false;
      store.dispatch("setIsOverlay", { data });
    };

    return {
      renderCheck,
      overlayoff,
      overlayon,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay", "getNation", "getConditionNation"]),
  },
};
</script>

<style scoped>

  .data-background {
    background: #e4e8ef;
    height: 47rem;
    width: 100%;
    background-size: cover;
  }
  .nation-nav {
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
  }
  .nation-title {
    margin-left: 1.5rem;
  }
  .title {
    font-size: 4rem;
    margin-bottom: 0;
  }
  .total-container {
    display: flex;
    margin-top: 3.8rem;
    margin-right: 2rem;
  }
  .nation-total {
    background: #f5f5f5;
    width: 20rem;
    height: 4rem;
    border-radius: 35px;
    /* box-shadow: 3px 3px 4px gray; */
    text-align: center;
    line-height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }
  .nation-percentage {
    background: #f5f5f5;
    width: 20rem;
    height: 4rem;
    border-radius: 35px;
    /* box-shadow: 3px 3px 4px gray; */
    text-align: center;
    line-height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .data-container {
    display: flex;
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
  .left_section{
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    bottom: 0;
    /* opacity: 0.5; */
    display:flex; 
    flex-direction: column; 
    justify-content: space-around;
    width: 25%;
    float: left;
    z-index: 10;
  }
  .right_section{
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0;
    bottom: 0;
    right: 0;
    /* opacity: 0.5; */
    display:flex; 
    flex-direction: column; 
    justify-content: space-around;
    width: 25%;
    float: right;
    z-index: 10;
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
    all: unset;
    width: 50px;
    height: 50px;
  }
  .backbtnimg {
    width: 100%;
    height: 100%;
  }
  .backbtnimg:hover{
    transform: scale(1.2);
  }
  .left-enter-active{
    animation: fadeInLeft 2s;
  }
  .left-leave-active{
    animation: fadeOutLeft 2s;
  }
  .right-enter-active{
    animation: fadeInRight 2s;
  }
  .right-leave-active{
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

</style>
