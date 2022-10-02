import axios from "axios";
import BackendAPI2 from "@/api/BackendAPI";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
    keywordrank: null,
    relatedkeywordnews: [],
    isoverlay: false,
    relatedkeword: [],
    relatedkewordloading: false,
    datalabviewloading: true,
    graphkeyword: null,
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
      { value: 1, text: "미국", lang: "en" },
      { value: 2, text: "영국", lang: "en" },
      { value: 3, text: "일본", lang: "ja" },
      { value: 4, text: "베트남", lang: "vi" },
      { value: 5, text: "인도네시아", lang: "id" },
      { value: 6, text: "브라질", lang: "pt" },
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
    getRelatedKeywordNews(state) {
      return state.relatedkeywordnews;
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
    getIsOverlay(state) {
      return state.isoverlay;
    },
    getGraphKeyword(state) {
      return state.graphkeyword;
    },
    getRelatedKewordLoading(state) {
      return state.relatedkewordloading;
    },
    getDatalabViewLoading(state) {
      return state.datalabviewloading;
    },
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
    SET_KEYWORDRANK: (state, data) => (state.keywordrank = data),
    RESET_KEYWORDRANK: (state) => (state.keywordrank = null),
    SET_RELATEDKEWORD: (state, keywords) => (state.relatedkeword = keywords),
    SET_RELATEDKEYWORDNEWS: (state, news) => (state.relatedkeywordnews = news),
    SET_NATION: (state, nation) => (state.condition.nation = nation),
    SET_CATEGORY: (state, category) => (state.condition.category = category),
    SET_PERIOD: (state, period) => (state.condition.period = period),
    SET_NATIONRATE: (state, nationRate) => (state.nationRate = nationRate),
    SET_ISOVERLAY: (state, isoverlay) => (state.isoverlay = isoverlay),
    SET_GRAPHKEYWORD: (state, graphkeyword) => {
      state.graphkeyword = [];
      graphkeyword.forEach((keyword) => {
        keyword.date = new Date(keyword.date);
        state.graphkeyword.push(keyword);
      });
      // state.graphkeyword = graphkeyword;
    },
    SET_RELATEDKEYWORDLOADING: (state, relatedkewordloading) => {
      state.relatedkewordloading = relatedkewordloading;
    },
    SET_DATALABVIEWLOADING: (state, datalabviewloading) => {
      state.datalabviewloading = datalabviewloading;
    },
    // (state.graphkeyword = graphkeyword),
  },
  actions: {
    async getNationRate({ commit }, { nation }) {
      await axios
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
    async setIsOverlay({ commit }, { data }) {
      await commit("SET_ISOVERLAY", data);
    },
    resetKeyword({ commit }) {
      commit("RESET_KEYWORDRANK");
    },

    async getKeywordData({ commit }, { condition }) {
      // console.log(condition);
      await axios
        .get(
          `http://j7b208.p.ssafy.io:8080/api/keyword/${condition.nation}/${condition.category}/${condition.period}`
        )
        .then((res) => {
          commit("SET_KEYWORDRANK", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    async getGraphKeyword({ commit }, { condition }) {
      // console.log(condition);
      await axios
        .get(
          `http://j7b208.p.ssafy.io:8080/api/keyword/keywordgraph/${condition.keyword}/${condition.nation}/${condition.category}/${condition.period}`
        )
        .then((res) => {
          commit("SET_GRAPHKEYWORD", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },

    async relatedkeyword({ commit }, keyword) {
      commit("SET_RELATEDKEYWORDLOADING", true);
      await axios({
        url: BackendAPI2.datalab.relatedkeyword(keyword.data),
        method: "get",
      })
        .then((res) => {
          commit("SET_RELATEDKEWORD", res.data);
          commit("SET_RELATEDKEYWORDLOADING", false);
        })
        .catch((err) => {
          console.error(err.response);
        });
    },

    async relatedkeywordnews({ commit, state }) {
      // console.log(keyword);
      console.log(state.currentRank);
      await axios({
        url: "https://newsapi.org/v2/everything?apiKey=b7e2285d0d434655b79ad42f6584ae3f&q=korea&language=pt&sortBy=publishedAt&pageSize=5&page=3",
        method: "get",
      })
        .then((res) => {
          console.log(res.data.articles);
          commit("SET_RELATEDKEYWORDNEWS", res.data.articles);
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
  },
};
