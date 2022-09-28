<template>
  <div>
    <div class="keyword-container">
      <input id="tab1" type="radio" name="tabs" checked />
      <!-- 메뉴-->
      <label for="tab1">드라마</label>

      <input id="tab2" type="radio" name="tabs" />
      <label for="tab2">영화</label>

      <input id="tab3" type="radio" name="tabs" />
      <label for="tab3">스포츠</label>

      <input id="tab4" type="radio" name="tabs" />
      <label for="tab4">가수</label>

      <input id="tab5" type="radio" name="tabs" />
      <label for="tab5">배우</label>

      <section id="content1">
        <p @click="rank1(e)">
          {{ rankDrama[0].title }}
        </p>
        <p>2 오징어게임 -------------- 200회(16 %)</p>
        <p>3 오징어게임 -------------- 80회(3 %)</p>
        <p>4 오징어게임 -------------- 56회(2 %)</p>
        <p>5 오징어게임 -------------- 24회(1 %)</p>
      </section>

      <section id="content2">
        <p>1 오징어게임영화 -------------- 456회(34 %)</p>
        <p>2 오징어게임 -------------- 200회(16 %)</p>
        <p>3 오징어게임 -------------- 80회(3 %)</p>
        <p>4 오징어게임 -------------- 56회(2 %)</p>
        <p>5 오징어게임 -------------- 24회(1 %)</p>
      </section>

      <section id="content3">
        <p>1 오징어게임스포츠 -------------- 456회(34 %)</p>
        <p>2 오징어게임 -------------- 200회(16 %)</p>
        <p>3 오징어게임 -------------- 80회(3 %)</p>
        <p>4 오징어게임 -------------- 56회(2 %)</p>
        <p>5 오징어게임 -------------- 24회(1 %)</p>
      </section>
      <section id="content4">
        <p>1 오징어게임가수 -------------- 456회(34 %)</p>
        <p>2 오징어게임 -------------- 200회(16 %)</p>
        <p>3 오징어게임 -------------- 80회(3 %)</p>
        <p>4 오징어게임 -------------- 56회(2 %)</p>
        <p>5 오징어게임 -------------- 24회(1 %)</p>
      </section>
      <section id="content5">
        <p>1 오징어게임배우 -------------- 456회(34 %)</p>
        <p>2 오징어게임 -------------- 200회(16 %)</p>
        <p>3 오징어게임 -------------- 80회(3 %)</p>
        <p>4 오징어게임 -------------- 56회(2 %)</p>
        <p>5 오징어게임 -------------- 24회(1 %)</p>
      </section>
    </div>
    <div class="chart-container"></div>
  </div>
</template>

<script>
// import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useStore } from "vuex";
// import { computed } from "vue";
export default {
  // components: {
  //   Vue3ChartJs,
  // },
  setup() {
    // const keyword = null;
    const store = useStore();

    const rank1 = function (e) {
      e = rankDrama[0].title;
      // console.log(e, "eeeee");
      const keyword = e;
      store.dispatch("currentRank", { keyword });
    };
    const rankDrama = [{ rank: 1, title: "오징어게임" }];
    // const word = computed(() => store.getters["getCurrentRank"]);

    return {
      rankDrama,
      rank1,
    };
  },
};
</script>

<style scoped>
.keyword-container {
  width: 26.75rem;
  height: 15rem;
  background-color: #e4e8ef;
  margin-left: 1.5rem;
  /* min-width: 320px;
  max-width: 800px; */
  padding: 0;
  background: #ffffff;
  border-radius: 15px;
}

section {
  display: none;
  padding: 20px 0 0;
  /* border-top: 1px solid #ddd; */
}

/*라디오버튼 숨김*/
input {
  display: none;
}

label {
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;
}

label:hover {
  color: #2e9cdf;
  cursor: pointer;
}

/*input 클릭시, label 스타일*/
input:checked + label {
  color: #555;
  border: 1px solid #ddd;
  border-top: 2px solid #2e9cdf;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid #ffffff;
}
#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4,
#tab5:checked ~ #content5 {
  display: block;
}
#content1,
#content2,
#content3,
#content4,
#content5 {
  margin-left: 3rem;
  padding: 0;
  padding-top: 0;
  padding-bottom: 1rem;
}
.chart-container {
  width: 33rem;
  height: 16rem;
  background: #ffffff;
  border-radius: 15px;
  margin-left: 1.5rem;
  margin-top: 1rem;
}
</style>
