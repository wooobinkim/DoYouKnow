import BackendAPI from '@/api/BackendAPI'
import axios from 'axios'

export default {
  state: {
    cardfront : null,
    cardback : null,
  },

  getters: {
    cardfront : state => state.cardfront,
    cardback : state => state.cardback,
  },

  mutations: {
    SET_CARDFRONT: (state, cardfront) => state.cardfront = cardfront,
    SET_CARDBACK: (state, cardback) => state.cardback = cardback,
  },

  actions: {
    fetchFrontcard({ commit }, keyword) {
      axios({
        url: BackendAPI.dykc.category(keyword),
        method: 'get',
      })
        .then(res => {
          commit('SET_CARDFRONT', res.data)
      })
        .catch(err => {
          console.error(err.response)
        })
    },
    
    fetchBackcard({ commit }, name) {
      axios({
        url: BackendAPI.dykc.profile(name),
        method: 'get',
      })
        .then(res => {
          commit('SET_CARDBACK', res.data)
      })
        .catch(err => {
          console.error(err.response)
        })
    },
  }
}