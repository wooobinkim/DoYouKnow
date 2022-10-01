<template>
  <div class="data-background">
    <nav-bar></nav-bar>
    <div class="nation-nav">
      <div class="nation-title">
        <template v-for="nation in this.getNation" :key="nation">
          <template v-if="this.getConditionNation == nation.value">
            <h1 class="title">{{ nation.text }}</h1>
          </template>
        </template>
        <h2 style="margin-top: 0">키워드 분석</h2>
      </div>
      <div class="total-container">
        <div class="nation-total">
          <template v-if="this.getNationRate">
            총 데이터량
            {{ this.getNationRate.nationCount.toLocaleString("ko-KR") }}개
          </template>
        </div>
        <div class="nation-percentage">
          <template v-if="this.getNationRate">
            전체의 {{ this.getNationRate.nationRate }}%
          </template>
        </div>
      </div>
    </div>
    <div class="data-container">
      <div class="left-container">
        <keyword-tab></keyword-tab>
        <chart-tab></chart-tab>
      </div>
      <word-cloud></word-cloud>
      <trend-tab></trend-tab>
    </div>
    <button @click="overlayon()">열기</button>
    <div v-if="this.getIsOverlay" class="overlay">
      <div class="left_section" v-if="this.getIsOverlay">
        <div class="head_box">
          <h1 class="nation">box2</h1>
          <button class="backbtn" @click="overlayoff()">닫기</button>
        </div>
        <div><KeywordRelated /></div>
        <div><KeywordRank /></div>
      </div>
      <div class="right_section" v-if="this.getIsOverlay">
        <div><KeywordNews /></div>
        <div><KeywordLineGraph /></div>
        <div><KeywordDonutGraph /></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import KeywordTab from "@/components/Datalab/KeywordTab.vue";
import WordCloud from "@/components/Datalab/WordCloud.vue";
import ChartTab from "@/components/Datalab/ChartTab.vue";
import KeywordDonutGraph from "@/components/Datalab/KeywordDonutGraph.vue";
import KeywordLineGraph from "@/components/Datalab/KeywordLineGraph.vue";
import KeywordNews from "@/components/Datalab/KeywordNews.vue";
import KeywordRank from "@/components/Datalab/KeywordRank.vue";
import KeywordRelated from "@/components/Datalab/KeywordRelated.vue";
import { useStore, mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    KeywordTab,
    WordCloud,
    ChartTab,
    KeywordRelated,
    KeywordRank,
    KeywordNews,
    KeywordLineGraph,
    KeywordDonutGraph,
  },
  setup() {
    const store = useStore();
    const overlayon = function () {
      const data = true;
      store.dispatch("setIsOverlay", { data });
    };
    const overlayoff = function () {
      const data = false;
      store.dispatch("setIsOverlay", { data });
    };
    const toggleTrigger = function () {
      const data = !this.getTrigger;
      store.dispatch("setTrigger", { data });
    };

    return {
      overlayoff,
      overlayon,
      toggleTrigger,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay", "getTrigger"]),
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
    background-color: rgba(0, 0, 0, 0.1); /* Black background with opacity */
    z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    display: flex;
    justify-content: space-between;
  }
  .left_section{
    background-color:skyblue;
    display:flex; 
    flex-direction: column; 
    justify-content: space-around;
    width: 25%;
    position: relative;
    animation: fadeInLeft 1s;
  }
  .right_section{
    background-color:skyblue;
    display:flex; 
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
    from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
  }
  @keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
  }
  @keyframes fadeOutLeft {
    from {
        opacity: 1;
        transform: translateZ(0);
    }
    to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes fadeOutRight {
    from {
        opacity: 1;
        transform: translateZ(0);
    }
    to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
  }

</style>
