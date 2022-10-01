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
  </section>
</template>

<script>
import MainGlobe from "@/components/Datalab/MainGlobe.vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
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
</style>
