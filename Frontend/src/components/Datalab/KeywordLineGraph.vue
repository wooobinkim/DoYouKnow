<template>
  <div class="chart-container">
    <div v-show="this.test.getGraphKeyword != null">
      <vue3-chart-js
        :id="lineChart.id"
        ref="chartRef"
        :type="lineChart.type"
        :data="lineChart.data"
        :options="lineChart.options"
        width="470"
        height="200"
      ></vue3-chart-js>
    </div>

    <!-- {{lineChart.data.datasets[0].data.length}} -->

    <!-- <button @click="updateChart">Update Chart</button> -->
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { mapGetters, mapActions } from "vuex";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";

export default {
  components: {
    Vue3ChartJs,
  },
  setup() {
    const keywordlist = ref([]);
    const chartRef = ref(null);

    const lineChart = {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            data: [],
          },
        ],
      },
      options: {
        animations: {
          y: {
            easing: "easeInOutElastic",
            from: (ctx) => {
              if (ctx.type === "data") {
                if (ctx.mode === "default" && !ctx.dropped) {
                  ctx.dropped = true;
                  return 0;
                }
              }
            },
          },
        },
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          labels: false,
          legend: {
            display: false,
          },
          // title: {
          //   text: "검색량 추이",
          //   display: true,
          // },
          datalabels: {
            display: false,
          },
        },
        borderColor: "rgb(0, 75, 107)",
        borderJoinStyle: "round",
        // spanGaps: true,
        // borderwidth: 30,
        // lineTension: 0,

        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
          },
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };

    const updateChart = (res) => {
      lineChart.options.plugins.title = {
        text: "날짜별 검색량",
        display: true,
      };
      lineChart.labels = res[0].name;
      lineChart.data.labels = [];
      lineChart.data.datasets = [
        {
          label: res[0].name,
          backgroundColor: "rgb(75, 192, 192)",
          data: [],
        },
      ];

      for (let i = 0; i < res.length; i++) {
        // console.log(res[i]);
        lineChart.data.labels[i] = res[i].date
          .toLocaleDateString()
          .substring(6);
        lineChart.data.datasets[0].data[i] = res[i].count;
      }
      chartRef.value.update(250);
    };
    const store = useStore();
    const test = computed(() => store.getters);
    return {
      keywordlist,
      lineChart,
      updateChart,
      chartRef,
      store,
      test,
    };
  },
  computed: {
    ...mapGetters([
      "getCurrentRank",
      "getConditionNation",
      "getConditionCategory",
      "getConditionPeriod",
      "getGraphKeyword",
    ]),
  },
  methods: {
    ...mapActions(["getGraphKeyword"]),
  },
  watch: {
    getCurrentRank: function () {
      if (this.getConditionCategory && this.getConditionPeriod) {
        const condition = {
          keyword: this.getCurrentRank,
          nation: this.getConditionNation,
          category: this.getConditionCategory,
          period: this.getConditionPeriod,
        };
        this.store.dispatch("getGraphKeyword", { condition });
      }
    },
    getGraphKeyword: function (data) {
      this.keywordlist = data;
      this.updateChart(data);
    },
  },
};
</script>

<style scoped>
.chart-container {
  background: rgb(255, 255, 255, 0.1);
  /* opacity: 60%; */
  border-radius: 15px;
  margin-left: -1.3rem;
  margin-top: -0.8rem;
}

.line-graph {
  position: absolute;
  /* width: 400px; */
  height: 500px;
  top: 63%;
  left: 80%;
}
</style>
