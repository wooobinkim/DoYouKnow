<template>
  <div class="word-container">
    <loading-spinner v-if="this.getRelatedKewordLoading" />
    <div class="canvas-container">
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
        "#004B6B",
        // '#255D7E',
        "#3C6F8E",
        // '#5483A1',
        "#6996B3",
        // '#7EAAC7',
        "#94BDD9",
        // '#ABD3EC',
        "#C1E6FF",
        "#EBF2F7",
      ];
      const data1 = {
        labels: data.map((d) => d[0]),
        datasets: [
          {
            label: "",
            data: data.map((d, index) => 30 - index * 2),
            color: data.map((d) => color[d[1] % 6]),
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
              font: {
                  family: "KOTRA_BOLD-Bold"
              },
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
      const data1 = data.splice(0, 25);
      this.updatewordcloud(data1);
    },
  },
};
</script>

<style scoped>
/* .word-container {
  height: 220px;
  width: 400px;
  background: white;
  opacity: 81%;
  border-radius: 30px;
} */
.chartvue {
  visibility: hidden;
}
.canvas-container {
  height: 185px;
  width: 394px;
  /* position: absolute;
  top: 3rem;
  right: -3rem; */
  margin-right: 4rem;
  /* background: white;
  opacity: 81%;
  border-radius: 30px; */
}
#canvas {
  height: 100%;
  width: 100%;
}
@font-face {
  font-family: "KOTRA_BOLD-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
