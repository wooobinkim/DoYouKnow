<template>
  <div>
    <div class="trend-container">
      <div>연관검색어</div>
      <loading-spinner v-if="this.getRelatedKewordLoading" />
      <vue3-chart-js
        :class="{ chartvue: this.getRelatedKewordLoading }"
        :id="barChart.id"
        ref="chartRef"
        :type="barChart.type"
        :data="barChart.data"
        :options="barChart.options"
      ></vue3-chart-js>
    </div>
  </div>
</template>

<script>
import { mapGetters, useStore } from "vuex";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from "vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";

export default {
  components: {
    Vue3ChartJs,
    LoadingSpinner,
  },
  setup() {
    const keywordlist = ref([]);
    const chartRef = ref(null);
    const store = useStore();

    const barChart = {
      id: "bar",
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {},
      },
    };
    const updateChart = (data) => {
      barChart.options.plugins.title = {
        text: "Updated Chart",
        display: true,
      };

      barChart.data.labels = [];
      barChart.data.datasets = [
        {
          label: "연관검색어",
          backgroundColor: "#f87979",
          data: [],
        },
      ];

      for (let i   = 0; i < 5; i++) {
        barChart.data.labels[i] = data[i][0];
        barChart.data.datasets[0].data[i] = data[i][1];
      }

      // data.forEach(element => {
      //     barChart.data.labels.push(element[0]);
      //     barChart.data.datasets[0].data.push(element[1]);
      // });
      // console.log(barChart.data);
      chartRef.value.update(250);
    };

    return {
      keywordlist,
      updateChart,
      barChart,
      chartRef,
      store,
    };
  },
  computed: {
    ...mapGetters([
      "getCurrentRank",
      "getRelatedKeyword",
      "getRelatedKewordLoading",
    ]),
  },
  // methods: {
  //   ...mapActions(["relatedkeyword"]),
  // },
  watch: {
    getCurrentRank: function (data) {
      this.store.dispatch("relatedkeyword", { data });
    },
    getRelatedKeyword: function (data) {
      this.keywordlist = data;
      this.updateChart(data);
    },
  },
};
</script>

<style scoped>
.trend-container {
  height: 15rem;
  width: 20rem;
  background: white;
  margin-left: 1rem;
  margin-right: 1.5rem;
  border-radius: 15px;
}
.chartvue {
  visibility: hidden;
}
</style>
