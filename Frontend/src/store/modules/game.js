import axios from "axios";

export const game = {
  state: {
    gamedata: [],
  },
  getters: {
    getGameData(state) {
      console.log(state, "getters안");
      return state.gamedata;
    },
  },
  mutations: {
    SET_GAMEDATA: (state, data) => (state.gamedata = data),
  },
  actions: {
    getGameData({ commit }) {
      console.log(commit);
      axios.get("http://j7b208.p.ssafy.io:8080/api/higherlower").then((res) => {
        commit("SET_GAMEDATA", res.data);
        // return res.data;
      });
    },
  },
};
