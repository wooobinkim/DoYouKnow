// import axios from "axios";

export default {
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
    SET_CURRENTRANK: (state, currentrank) => (state.currentrank = currentrank),
  },
  actions: {
    // getRank({ commit }, rank1) {
    //   axios({
    //     url : ,
    //     method: 'get',
    //   })
    // }
    currentRank({ state }, { keyword }) {
      console.log(state, "commit");
      console.log(keyword, "keyword");
    },
  },
};
