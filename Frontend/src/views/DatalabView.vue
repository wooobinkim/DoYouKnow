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
          <h1 class="nation">box2</h1>
          <button class="backbtn" @click="overlayoff()">닫기</button>
        </div>
        <div><KeywordRelated /></div>
        <div><KeywordRank /></div>
      </div>
      <div class="right_section">
        <div><KeywordNews /></div>
        <div><KeywordLineGraph /></div>
        <div><KeywordDonutGraph /></div>
      </div>
    </div>
  </section>
</template>

<script>
import MainGlobe from "@/components/Datalab/MainGlobe.vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";
import { computed } from "@vue/runtime-core";
import { useStore, mapGetters } from "vuex";
export default {
  components: {
    MainGlobe,
    LoadingSpinner,
  },
  setup() {
    const store = useStore();
    const renderCheck = computed(() => store.getters["getDatalabViewLoading"]);
    return {
      renderCheck,
    };
  },
  computed: {
    ...mapGetters(["getIsOverlay"]),
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
