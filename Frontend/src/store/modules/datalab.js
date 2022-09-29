import axios from "axios";
import BackendAPI2 from "@/api/BackendAPI2";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
    keywordrank: null,
    relatedkeword: [],
    category: [
      { value: 1, text: "운동선수" },
      { value: 2, text: "드라마" },
      { value: 3, text: "영화" },
      { value: 4, text: "가수" },
      { value: 5, text: "배우" },
    ],
    period: [
      { value: 0, text: "일주일" },
      { value: 1, text: "한달" },
      { value: 3, text: "세달" },
    ],
    nation: [
      { value: 1, text: "미국" },
      { value: 2, text: "영국" },
      { value: 3, text: "일본" },
      { value: 4, text: "베트남" },
      { value: 5, text: "인도네시아" },
      { value: 6, text: "브라질" },
    ],
    nationRate: null,
    condition: {
      nation: null,
      category: null,
      period: null,
    },
  },
  getters: {
    getCurrentRank(state) {
      return state.currentrank;
    },

    getKeywordRank(state) {
      return state.keywordrank;
    },
    getRelatedKeyword(state) {
      return state.relatedkeword;
    },
    getCondition(state) {
      return state.condition;
    },
    getConditionNation(state) {
      return state.condition.nation;
    },
    getConditionCategory(state) {
      return state.condition.category;
    },
    getConditionPeriod(state) {
      return state.condition.period;
    },
    getNation(state) {
      return state.nation;
    },
    getCategory(state) {
      return state.category;
    },
    getPeriod(state) {
      return state.period;
    },
    getNationRate(state) {
      return state.nationRate;
    },
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
    SET_KEYWORDRANK: (state, data) => (state.keywordrank = data),
    RESET_KEYWORDRANK: (state) => (state.keywordrank = null),
    SET_RELATEDKEWORD: (state, keywords) => (state.relatedkeword = keywords),
    SET_NATION: (state, nation) => (state.condition.nation = nation),
    SET_CATEGORY: (state, category) => (state.condition.category = category),
    SET_PERIOD: (state, period) => (state.condition.period = period),
    SET_NATIONRATE: (state, nationRate) => (state.nationRate = nationRate),
  },
  actions: {
    getNationRate({ commit }, { nation }) {
      axios
        .get(`http://j7b208.p.ssafy.io:8080/api/keyword/searchcount/${nation}`)
        .then((res) => {
          commit("SET_NATIONRATE", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    async currentRank({ commit }, { keyword }) {
      await commit("SET_CURRENTRANK", keyword);
    },
    async setNation({ commit }, { nation }) {
      await commit("SET_NATION", nation);
    },
    async setCategory({ commit }, { category }) {
      await commit("SET_CATEGORY", category);
    },
    async setPeriod({ commit }, { period }) {
      await commit("SET_PERIOD", period);
    },

    resetKeyword({ commit }) {
      commit("RESET_KEYWORDRANK");
    },

    getKeywordData({ commit }, { condition }) {
      console.log(condition);
      axios
        .get(
          `http://j7b208.p.ssafy.io:8080/api/keyword/${condition.nation}/${condition.category}/${condition.period}`
        )
        .then((res) => {
          // console.log(res, "데이터 전송완료");
          console.log(res.data);
          commit("SET_KEYWORDRANK", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    async relatedkeyword({ commit }, keyword) {
      console.log(keyword);
      await axios({
        url: BackendAPI2.datalab.relatedkeyword(keyword),
        method: "get",
      })
        .then((res) => {
          // console.log(res);
          commit("SET_RELATEDKEWORD", res.data);
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
  },
};
