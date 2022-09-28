import { createStore } from 'vuex'

import datalab from './modules/datalab'
import dykc from './modules/dykc'

import createPersistedState from 'vuex-persistedstate'


export default createStore({
  modules: { datalab, dykc},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: ['dykc']
    })
  ]
})