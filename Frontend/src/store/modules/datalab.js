// import axios from "axios";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
  },
  getters: {
    getCurrentRank(state) {
      return state.currentrank;
    },
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
  },
  actions: {
    // getRank({ commit }, rank1) {
    //   axios({
    //     url : ,
    //     method: 'get',
    //   })
    // }
    async currentRank({ commit }, { keyword }) {
      await commit("SET_CURRENTRANK", keyword)
      // console.log(state, "commit");
      // console.log(keyword, "keyword");
    },
  },
};
