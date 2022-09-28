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
<<<<<<< HEAD
    currentRank({ state }, { keyword }) {
      console.log(state, "commit");
      console.log(keyword, "keyword");
      state.currentrank;
=======
    async currentRank({ commit }, { keyword }) {
      await commit("SET_CURRENTRANK", keyword)
      // console.log(state, "commit");
      // console.log(keyword, "keyword");
>>>>>>> 3f32fd6e2594b0b54ff96461b10ec05bf38cea23
    },
  },
};
