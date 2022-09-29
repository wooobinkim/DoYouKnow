import axios from "axios";
import BackendAPI2 from "@/api/BackendAPI2";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
    keywordrank: null,
    relatedkeword: [],
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
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
    SET_KEYWORDRANK: (state, data) => (state.keywordrank = data),
    RESET_KEYWORDRANK: (state) => (state.keywordrank = null),
    SET_RELATEDKEWORD: (state, keywords) => (state.relatedkeword = keywords),
  },
  actions: {
    async currentRank({ commit }, { keyword }) {
      await commit("SET_CURRENTRANK", keyword);
      // console.log(state, "commit");
      // console.log(keyword, "keyword");
    },

    resetKeyword({ commit }) {
      commit("RESET_KEYWORDRANK");
    },

    getKeywordData({ commit }, { nation, category, period }) {
      axios
        .get(
          `http://j7b208.p.ssafy.io:8080/api/keyword/${nation}/${category}/${period}`
        )
        .then((res) => {
          // console.log(res, "데이터 전송완료");
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

      // console.log(state, "commit");
      // console.log(keyword, "keyword");
    },
  },
};
