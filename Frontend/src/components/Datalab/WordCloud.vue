<template>
  <div class="cloud-container">{{ this.getKeywordRank }}</div>
</template>

<script>
// import { useStore } from "vuex";
// import { computed } from "vue";
import { mapGetters } from "vuex";
export default {
  setup() {},
  computed: {
    ...mapGetters(["getCurrentRank", "getKeywordRank"]),
  },
};
</script>

<style scoped>
.cloud-container {
  width: 38rem;
  height: 32.5rem;
  background: #e4e8ef;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
}
</style>
