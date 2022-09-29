import axios from "axios";
import BackendAPI2 from "@/api/BackendAPI2";

export const datalab = {
  state: {
    rank: null,
    currentrank: null,
    relatedkeword: [],
    relatedkeywordnews: [],
  },
  getters: {
    getCurrentRank(state) {
      return state.currentrank;
    },
    getRelatedKeyword(state){
      return state.relatedkeword;
    },
    getRelatedKeywordNews(state){
      return state.relatedkeywordnews;
    },
  },
  mutations: {
    SET_CURRENTRANK: (state, keyword) => (state.currentrank = keyword),
    SET_RELATEDKEWORD: (state, keywords) => (state.relatedkeword = keywords),
    SET_RELATEDKEYWORDNEWS: (state, news) => (state.relatedkeywordnews = news),
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

    async relatedkeywordnews({ commit, state } ) {
      // console.log(keyword);
      console.log(state.currentRank)
      await axios({
        url:'https://newsapi.org/v2/everything?apiKey=b7e2285d0d434655b79ad42f6584ae3f&q=korea&language=pt&sortBy=publishedAt&pageSize=5&page=3',
        method:"get",
      })
      .then((res)=>{
        console.log(res.data.articles);
        commit("SET_RELATEDKEYWORDNEWS", res.data.articles);
      })
      .catch((err)=>{
        console.error(err.response);
      })
    },
  },
};
