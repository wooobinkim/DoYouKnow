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
        <!-- <div class="nation-total">{{ this.getNationRate.nationCount }}</div>
        <div class="nation-percentage">{{ this.getNationRate.nationRate }}</div> -->
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
    <button @click="overlayon()">오버레이</button>
    <template v-if="this.getIsOverlay">
      <div class="overlay">
        <button @click="overlayoff()" style="width: 1000px; height: 400px">
          오버레이
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
import KeywordTab from "@/components/Datalab/KeywordTab.vue";
import WordCloud from "@/components/Datalab/WordCloud.vue";
import TrendTab from "@/components/Datalab/TrendTab.vue";
import ChartTab from "@/components/Datalab/ChartTab.vue";
import { useStore, mapGetters } from "vuex";
// import { mapGetters, useStore } from "vuex";
// import { useRouter } from "vue-router";
export default {
  components: {
    NavBar,
    KeywordTab,
    TrendTab,
    WordCloud,
    ChartTab,
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

    return {
      overlayoff,
      overlayon,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay"]),
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
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2); /* Black background with opacity */
  z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>
