<template>
  <div class="keyword-container">
    <div class="button-container">
      <br />
      <div class="btn-group1">
      <template v-for="category in this.getCategory" :key="category.value">
        <!-- <input id="tab1" type="radio" name="tabs" checked />
        <label for="tab1">{{ category.text }}</label> -->
            <div
              @click="setCategory(category.value)"
              :class="{'btn1 btn-three1' : true,  'btn1 btn-active1': getConditionCategory === category.value,}"
              style="margin-right: 5px"
            >
              {{ category.text }}
            </div>
      </template>
    </div>
    <div class="btn-group2">
          <template v-for="period in this.getPeriod" :key="period.value">
            <!-- <div
              @click="setPeriod(period.value)"
              :class="{'btn2 btn-three2' : true,  'btn2 btn-active2': getConditionPeriod === period.value,}"
            > -->
            <div
              @click="setPeriod(period.value)"
              :class="{'btn-common' : true,  'btn-period-active': getConditionPeriod === period.value,}"
            >
              {{ period.text }}
            </div>
          </template>
        </div>
      <br />
      <div >
        <!-- <div class="btn-group2">
          <template v-for="period in this.getPeriod" :key="period.value">
            <div
              @click="setPeriod(period.value)"
              :class="{'btn2 btn-three2' : true,  'btn2 btn-active2': getConditionPeriod === period.value,}"
            >
              {{ period.text }}
            </div>
          </template>
        </div> -->


        <div class="leaderboard">
          <ol>
            <template
              v-for="(keyword, index) in this.getKeywordRank"
              :key="keyword"
            >
              <li data-aos="fade-right" v-if="index < 5">
                <mark class="rankkeyword" @click="setOneKeyword(keyword.name)">
                  {{ keyword.name }}
                </mark>
                <!-- <button @click="tts(keyword.name)" style="width:30px ;height:10px"></button> -->
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
    let ActiveNation = [false, false, false, false, false, false];
    // let ActiveCategory = [false, false, false, false, false, false]
    // let ActivePeriod = [false, false, false, false, false, false]

    const store = useStore();
    onMounted(() => {});

    const setNation = function setNation(nation) {
      if (ActiveNation[nation - 1] === false) {
        ActiveNation[nation - 1] = true;
      } else {
        ActiveNation[nation - 1] = false;
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
    const tts = async function tts(keyword) {
      let nation = null;
      let lang = null;
      if(store.getters.getConditionNation == 1) {nation="en";lang="en-US"}
      if(store.getters.getConditionNation == 2) {nation="en";lang="en-UK"}
      if(store.getters.getConditionNation == 3) {nation="ja";lang="ja-JP"}
      if(store.getters.getConditionNation == 4) {nation="vi";lang="vi-VN"}
      if(store.getters.getConditionNation == 5) {nation="id";lang="id-ID"}
      if(store.getters.getConditionNation == 6) {nation="pt";lang="pt-BR"}

      const condition = {
          keyword : keyword+" 아세요",
          nation : nation
      }
      await store.dispatch("TTSTranslate",  condition );

      let utterThis = new SpeechSynthesisUtterance(store.getters.getTTS+"?");
      utterThis.voice = speechSynthesis.getVoices()[8];
      utterThis.lang = lang;
      window.speechSynthesis.speak(utterThis);
      
    };
    return {
      // rank1,
      setNation,
      setCategory,
      setPeriod,
      setOneKeyword,
      store,
      tts,
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
      "getTTS"
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
@font-face {
  font-family: "KOTRA_BOLD-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
.keyword-container {
  width: 27.75rem;
  height: 15rem;

  margin-left: 1.5rem;
  /* min-width: 320px;
  max-width: 800px; */
  padding: 0;

  border-radius: 15px;
  font-family: "KOTRA_BOLD-Bold";
}
.button-container {
  margin-top: -1rem;
  
}
.rankkeyword {
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
  transform: translateZ(0) scale(1, 1);
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
.btn-group1{
  display :flex;
  margin-bottom: 10px;
}
.btn1 {
  line-height: 45px;
  height: 40px;
  text-align: center;
  width: 120px;
  cursor: pointer;
}
.btn-three1 {
  color: rgb(0, 0, 0);
  transition: all 0.5s;
  position: relative;
  font-size: 15px;
}
.btn-three1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.3);
  transition: all 0.3s;
}
.btn-three1:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.btn-three1::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.btn-three1:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
.btn-active1 {
  background-color: rgb(255, 190, 84);
}
.btn-group2{
  display :flex;
  justify-content: flex-end;
  margin-right: 5px;
}
.btn2 {
  line-height: 32px;
  height: 28px;
  text-align: center;
  width: 85px;
  cursor: pointer;
}
.btn-three2 {
  color: rgb(0, 0, 0);
  transition: all 0.5s;
  position: relative;
  font-size: 11px;
}
.btn-three2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.3);
  transition: all 0.3s;
}
.btn-three2:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.btn-three2::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.btn-three2:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
.btn-active2 {
  background-color: #9f9467;
}
.btn-common {
  font-size: 13px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: "Jeju Gothic", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  margin: 0px 2px;
  background-color: rgba(240, 248, 255, 0.4);
  color: black;
}

.btn-common:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.btn-nation-active {
  /* background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
  color: white; */
  background-color: rgb(119, 175, 156,0.7);
  color: #d7fff1;
}

.btn-category-active {
  background-color: rgb(119, 175, 156,0.7);
  color: #d7fff1;
}

.btn-period-active {
  background-color: rgb(119, 175, 156,0.7);
  color: #d7fff1;
}
/* 랭킹 아이템 */
.leaderboard {
  position: absolute;
  top: 35%;
  left: 69%;
  transform: translate(-50%, -50%);
  width: 356px;
  height: auto;
  background: transparent;
  border-radius: 10px;
}

.leaderboard h1 {
  font-size: 10px;
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
  content: '';
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 15px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #c24448;
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
  color: black;
  opacity: 71%;
}

.leaderboard ol li small {
  position: relative;
  z-index: 2;
  display: block;
  text-align: right;
}

.leaderboard ol li::after {
  content: "";
  background-image: url("@/assets/gold-medal.png");
  background-size: 20px 20px;
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
  background: #f5d658;
}

.leaderboard ol li:nth-child(1)::before {
  background-image: url("@/assets/gold-medal.png");
  background-size: 20px 20px;
}

.leaderboard ol li:nth-child(1)::after {
  background: #feeca5;
}

.leaderboard ol li:nth-child(2) {
  background: #cacaca;
}

.leaderboard ol li:nth-child(2)::before {
  background-image: url("@/assets/silver-medal.png");
  background-size: 20px 20px;
}

.leaderboard ol li:nth-child(2)::after {
  background: #fffffe;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
}

.leaderboard ol li:nth-child(2) mark::before,
.leaderboard ol li:nth-child(2) mark::after {
  border-top: 6px solid #ba4741;
  bottom: -7px;
}

.leaderboard ol li:nth-child(3) {
  background: #b6a86d;
}

.leaderboard ol li:nth-child(3)::before {
  background-image: url("@/assets/bronze-medal.png");
  background-size: 20px 20px;
}

.leaderboard ol li:nth-child(3)::after {
  background: #b2aa8a;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);
}

.leaderboard ol li:nth-child(3) mark::before,
.leaderboard ol li:nth-child(3) mark::after {
  border-top: 2px solid #b0433f;
  bottom: -3px;
}

.leaderboard ol li:nth-child(4) {
  background: white;
}

.leaderboard ol li:nth-child(4)::before {
  content: '4'
}

.leaderboard ol li:nth-child(4)::after {
  background: white;
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
  background: white;
}

.leaderboard ol li:nth-child(5)::before {
  content: '5'
}

.leaderboard ol li:nth-child(5)::after {
  background: white;
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
