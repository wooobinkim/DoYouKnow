<template>
  <div class="chart-container">{{ this.getGraphKeyword }}</div>
</template>

<script>
import { useStore, mapGetters } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    ...mapGetters(["getCurrentRank", "getGraphKeyword"]),
  },
  watch: {
    getCurrentRank: function (data) {
      const condition = {
        keyword: data,
        nation: this.store.getters.getConditionNation,
        category: this.store.getters.getConditionCategory,
        period: this.store.getters.getConditionPeriod,
      };

      this.store.dispatch("getGraphKeyword", { condition });
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 33rem;
  height: 16rem;
  background: #ffffff;
  border-radius: 15px;
  margin-left: 1.5rem;
  margin-top: 1rem;
}
</style>
