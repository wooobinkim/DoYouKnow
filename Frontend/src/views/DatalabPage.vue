<template>
  <div>
    <div class="data-background">
      <div class="nation-nav">
        <div class="nation-title">
          <h1 class="title">미국</h1>
          <h2>키워드 분석</h2>
        </div>
        <div class="total-container">
          <div class="nation-total">데이터검색량 : 48,321 회</div>
          <div class="nation-percentage">국가별데이터비율 : 32 %</div>
        </div>
      </div>
      <div class="data-container">
        <keyword-tab></keyword-tab>
        <word-cloud></word-cloud>
      </div>
    </div>
  </div>
</template>

<script>
import KeywordTab from "@/components/Datalab/KeywordTab.vue";
import WordCloud from "@/components/Datalab/WordCloud.vue";
export default {
  components: {
    KeywordTab,
    WordCloud,
  },
  setup() {},
};
</script>

<style scoped>
.data-background {
  background: #e4e8ef;
  height: 47rem;
  width: 100%;
  background-size: cover;
}
.nation-nav {
  display: flex;
  justify-content: space-between;
}
.nation-title {
  margin-left: 1.5rem;
}
.title {
  font-size: 4rem;
}
.total-container {
  display: flex;
  margin-top: 3.8rem;
  margin-right: 2rem;
}
.nation-total {
  background: #f5f5f5;
  width: 20rem;
  height: 4rem;
  border-radius: 35px;
  /* box-shadow: 3px 3px 4px gray; */
  text-align: center;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1.5rem;
}
.nation-percentage {
  background: #f5f5f5;
  width: 20rem;
  height: 4rem;
  border-radius: 35px;
  /* box-shadow: 3px 3px 4px gray; */
  text-align: center;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.data-container {
  display: flex;
}
</style>
