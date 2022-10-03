<template>
  <div style="height: 320px; width: 480px">
    <loading-spinner v-if="this.getRelatedKewordLoading" />
    <div style="height: 320px; width: 480px">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import { mapGetters, useStore } from "vuex";
import { Chart } from "chart.js";
import { WordCloudController, WordElement } from "chartjs-chart-wordcloud";
import { ref } from "vue";
import LoadingSpinner from "@/components/Datalab/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  setup() {
    Chart.register(WordCloudController, WordElement);
    //const keywordlist = ref([]);
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
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          labels: false,
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
        },
      },
    };

    const updatewordcloud = (data) => {
      console.log(data);
      const color = [
        "#bccad6",
        "#8d9db6",
        "#667292",
        "#f1e3dd",
        "#cfe0e8",
        "#b7d7e8",
        "#87bdd8",
        "#daebe8",
      ];
      const data1 = {
        labels: data.map((d) => d[0]),
        datasets: [
          {
            label: "",
            data: data.map((d, index) => 40 - index * 3),
            color: data.map((d) => color[d[1] % 8]),
          },
        ],
      };
      console.log(data1);

      {
        let chartStatus = Chart.getChart("canvas"); // <canvas> id
        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        const ctx = document.getElementById("canvas").getContext("2d");

        window.myBar = new Chart(ctx, {
          type: WordCloudController.id,
          data: data1,
          options: {
            title: {
              display: false,
              text: "Chart.js Word Cloud",
            },
            plugins: {
              labels: false,
              legend: {
                display: false,
              },
              datalabels: {
                display: false,
              },
            },
          },
        });
      }
    };
    return {
      //keywordlist,
      updatewordcloud,
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
      let chartStatus = Chart.getChart("canvas"); // <canvas> id
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }
      this.store.dispatch("relatedkeyword", { data });
    },
    getRelatedKeyword: function (data) {
      const data1 = data.splice(0, 10);
      this.updatewordcloud(data1);
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
#canvas{
  height: 320px;
  width: 480px;
}
</style>
