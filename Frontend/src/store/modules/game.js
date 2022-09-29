import axios from "axios";

export const game = {
  state: {
    gamedata: null,
  },
  getters: {
    getGameData(state) {
      return state.gamedata;
    },
  },
  mutations: {
    SET_GAMEDATA: (state, data) => (state.gamedata = data),
  },
  actions: {
    async setGameData({ commit }) {
      console.log("함수드간다.");
      await axios
        .get(`http://j7b208.p.ssafy.io:8080/api/higherlower`)
        .then((res) => {
          commit("SET_GAMEDATA", res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
