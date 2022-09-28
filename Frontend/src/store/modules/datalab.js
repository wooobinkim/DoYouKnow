import axios from "axios";
import BackendAPI2 from "@/api/BackendAPI2";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
    relatedkeword: [],
  },
  getters: {
    getCurrentRank(state) {
      return state.currentrank;
    },
    getRelatedKeyword(state){
      return state.relatedkeword;
    }
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
    SET_RELATEDKEWORD: (state, keywords) => (state.relatedkeword = keywords),
  },
  actions: {
    // getRank({ commit }, rank1) {
    //   axios({
    //     url : ,
    //     method: 'get',
    //   })
    // }
    async currentRank({ commit }, { keyword }) {
      await commit("SET_CURRENTRANK", keyword);
      // console.log(state, "commit");
      // console.log(keyword, "keyword");
    },
    async relatedkeyword({ commit },keyword ) {
      console.log(keyword);
      await axios({
        url:BackendAPI2.datalab.relatedkeyword(keyword),
        method:"get",
      })
      .then((res)=>{
        // console.log(res);
        commit("SET_RELATEDKEWORD", res.data);
      })
      .catch((err)=>{
        console.error(err.response);
      })
      
      // console.log(state, "commit");
      // console.log(keyword, "keyword");
    },
  },
};
