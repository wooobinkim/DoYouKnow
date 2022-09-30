<template>
  <div class="chart-container">
    <vue3-chart-js
      :id="lineChart.id"
      ref="chartRef"
      :type="lineChart.type"
      :data="lineChart.data"
      :options="lineChart.options"
    ></vue3-chart-js>

    <button @click="updateChart">Update Chart</button>
  </div>
  <div></div>
</template>

<script>
import { ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  components: {
    Vue3ChartJs,
  },
  setup() {
    // const keywordlist = ref([]);
    const chartRef = ref(null);

    const lineChart = {
      id: "line",
      type: "line",
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
        plugins: {
          title: {
            text: "검색량 추이",
            display: true,
          },
        },
      },
    };

    const updateChart = () => {
      lineChart.options.plugins.title = {
        text: "Updated Chart",
        display: true,
      };
      lineChart.data.labels = ["Cats", "Dogs", "Hamsters", "Dragons"];
      lineChart.data.datasets = [
        {
          backgroundColor: ["#333333", "#E46651", "#00D8FF", "#DD1B16"],
          data: [100, 20, 800, 20],
        },
      ];

      // for (let i = 0; i < 3; i++) {
      //   lineChart.data.labels[i] = data[i][3];
      //   lineChart.data.datasets[i] = data[i][2];
      // }
      chartRef.value.update(250);
    };

    return {
      lineChart,
      updateChart,
      chartRef,
    };
  },
  computed: {
    ...mapGetters(["getCurrentRank", "getGraphKeyword"]),
  },
  methods: {
    ...mapActions(["getGraphKeyword"]),
  },
  watch: {
    getCurrentRank: function (data) {
      // this 뭐였지..
      this.relatedkeyword(data);
    },
    getKeyword: function (data) {
      // this.keywordlist = data;
      this.updateChart(data);
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
