import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  modules: {
    home
  },
  strict: debug
})