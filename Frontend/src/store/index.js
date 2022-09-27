import { createStore } from 'vuex'

import datalab from './modules/datalab'
import dykc from './modules/dykc'


export default createStore({
  modules: { datalab, dykc}
})