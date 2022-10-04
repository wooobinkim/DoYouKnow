<template>
  <div>
    <div class="keyword-container">
      <br />
      <template v-for="category in this.getCategory" :key="category.value">
        <!-- <input id="tab1" type="radio" name="tabs" checked />
        <label for="tab1">{{ category.text }}</label> -->
        <button @click="setCategory(category.value)" :class="{'btn-common': true, 'btn-category-active' : CategoryNo === category.value}" style="margin-right:1rem; margin-left:1rem;">
          {{ category.text }}
        </button>
      </template>
      <br />
      <div style="margin-top:1rem">
        <div style="display:flex; flex-direction: column; float: right;">
          <div v-for="period in this.getPeriod" :key="period.value">
            <button @click="setPeriod(period.value)" :class="{'btn-common': true, 'btn-period-active' : PeriodNo === period.value}">{{ period.text }}</button>
          </div>
        </div>

        <div class="leaderboard">
          <ol>
            <template v-for="(keyword, index) in this.getKeywordRank" :key="keyword">
              <li data-aos="fade-right" v-if="index<5">
                <mark class="rankkeyword" @click="setOneKeyword(keyword.name)">
                  {{ keyword.name }}
                </mark>
              </li>
            </template>
          </ol>
        </div>
        
      </div>
      <!-- </section> -->
    </div>
  </div>
</template>

<script>
import { useStore, mapGetters } from "vuex";
import { onMounted } from "vue";
// import { useRoute } from "vue-router";
export default {
  setup() {
    let ActiveNation = [false, false, false, false, false, false]
    // let ActiveCategory = [false, false, false, false, false, false]
    // let ActivePeriod = [false, false, false, false, false, false]

    const store = useStore();
    onMounted(() => {});

    const setNation = function setNation(nation) {
      if (ActiveNation[nation-1] === false){
        ActiveNation[nation-1] = true
      } else {
        ActiveNation[nation-1] = false
      }
      store.dispatch("setNation", { nation });
    };
    const setCategory = function setCategory(category) {
      store.dispatch("setCategory", { category });
    };
    const setPeriod = function setPeriod(period) {
      store.dispatch("setPeriod", { period });
    };
    const setOneKeyword = function setOneKeyword(keyword) {
      store.dispatch("currentRank", { keyword });
    };

    
    // const rank1 = function (e) {
    //   e = rankDrama[0].title;
    //   // console.log(e, "eeeee");
    //   const keyword = e;
    //   store.dispatch("currentRank", { keyword });
    // };
  
    return {
      // rank1,
      setNation,
      setCategory,
      setPeriod,
      setOneKeyword,
      store,
      // data,
      ActiveNation,
    };
  },
  computed: {
    ...mapGetters([
      "getConditionNation",
      "getConditionCategory",
      "getConditionPeriod",
      "getNation",
      "getCategory",
      "getPeriod",
      "getKeywordRank",
    ]),
  },
  watch: {
    getConditionNation: function () {
      if (this.getConditionCategory && this.getConditionPeriod) {
        const condition = {
          nation: this.getConditionNation,
          category: this.getConditionCategory,
          period: this.getConditionPeriod,
        };
        this.store.dispatch("getKeywordData", { condition });
      }
    },
    getConditionCategory: function () {
      if (this.getConditionNation && this.getConditionPeriod) {
        const condition = {
          nation: this.getConditionNation,
          category: this.getConditionCategory,
          period: this.getConditionPeriod,
        };
        this.store.dispatch("getKeywordData", { condition });
      }
    },
    getConditionPeriod: function () {
      if (this.getConditionCategory && this.getConditionNation) {
        const condition = {
          nation: this.getConditionNation,
          category: this.getConditionCategory,
          period: this.getConditionPeriod,
        };
        this.store.dispatch("getKeywordData", { condition });
      }
    },
  },
  // methods: {
  //   ...mapActions(["setNation", "setCategory", "setPeriod"]),
  // },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
.keyword-container {
  width: 27.75rem;
  height: 15rem;
  margin-left: 1.5rem;
  /* min-width: 320px;
  max-width: 800px; */
  padding: 0;
  border-radius: 15px;
}
.rankkeyword{
  text-align: left;
  margin-left: 1rem;
  font-weight: bold;
  position: relative;
  z-index: 1;
  font-size: 20px;
  background: #f5f5f5;
  /* padding: 18px 10px 18px 50px; */
  cursor: pointer;
  backface-visibility: hidden;
  transform: translateZ(0) scale(1.0, 1.0);
}

p {
  margin: 0;
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
  /* width: 35px; */
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
  padding-bottom: 0;
}

.btn-common {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: 'Jeju Gothic', sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  margin: 0px 2px;
  background-color: aliceblue;
  color: #1e6b7b;
}

.btn-common:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.btn-nation-active {
  /* background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
  color: white; */
  background-color: #77af9c;
  color: #d7fff1;
}

.btn-category-active {
  background-color: #77af9c;
  color: #d7fff1;
}

.btn-period-active {
  background-color: #77af9c;
  color: #d7fff1;
}
 /* 랭킹 아이템 */
.leaderboard {
    position: absolute;
    top: 40%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: auto;
    background: transparent;
    border-radius: 10px;
}

.leaderboard h1 {
    font-size: 18px;
    color: #e1e1e1;
    padding: 12px 13px 18px;
}

.leaderboard ol {
    counter-reset: leaderboard;
    list-style: none;
    padding: 0;
}

.leaderboard ol li {
    position: relative;
    z-index: 1;
    font-size: 14px;
    counter-increment: leaderboard;
    padding: 18px 10px 18px 50px;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
    border-radius: 20px;
}

.leaderboard ol li::before {
    content: counter(leaderboard);
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 15px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #c24448;
    background: #fff;
    border-radius: 20px;
    text-align: center;
}

.leaderboard ol li mark {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 85%;
    height: 100%;
    padding: 5px 10px 0px 50px;
    margin: 0;
    background: none;
    color: #fff;
}

.leaderboard ol li small {
    position: relative;
    z-index: 2;
    display: block;
    text-align: right;
}

.leaderboard ol li::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fa6855;
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    border-radius: 20px;
}

.leaderboard ol li:nth-child(1) {
    background: #fa6855;
}

.leaderboard ol li:nth-child(1)::after {
    background: #fa6855;
}

.leaderboard ol li:nth-child(2) {
    background: #e0574f;
}

.leaderboard ol li:nth-child(2)::after {
    background: #e0574f;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
}

.leaderboard ol li:nth-child(2) mark::before,
.leaderboard ol li:nth-child(2) mark::after {
    border-top: 6px solid #ba4741;
    bottom: -7px;
}

.leaderboard ol li:nth-child(3) {
    background: #d7514d;
}

.leaderboard ol li:nth-child(3)::after {
    background: #d7514d;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);
}

.leaderboard ol li:nth-child(3) mark::before,
.leaderboard ol li:nth-child(3) mark::after {
    border-top: 2px solid #b0433f;
    bottom: -3px;
}

.leaderboard ol li:nth-child(4) {
    background: #cd4b4b;
}

.leaderboard ol li:nth-child(4)::after {
    background: #cd4b4b;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
}

.leaderboard ol li:nth-child(4) mark::before,
.leaderboard ol li:nth-child(4) mark::after {
    top: -7px;
    bottom: auto;
    border-top: none;
    border-bottom: 6px solid #a63d3d;
}

.leaderboard ol li:nth-child(5) {
    background: #c24448;
}

.leaderboard ol li:nth-child(5)::after {
    background: #c24448;
    box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 20px;
}

.leaderboard ol li:nth-child(5) mark::before,
.leaderboard ol li:nth-child(5) mark::after {
    top: -9px;
    bottom: auto;
    border-top: none;
    border-bottom: 8px solid #993639;
}

.leaderboard ol li:hover {
    z-index: 2;
    overflow: visible;
}

.leaderboard ol li:hover::after {
    opacity: 1;
    transform: scaleX(1.06) scaleY(1.03);
}

.leaderboard ol li:hover mark::before,
.leaderboard ol li:hover mark::after {
    opacity: 1;
    transition: all 0.35s ease-in-out;
}
</style>