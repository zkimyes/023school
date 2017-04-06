import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import home from './modules/home'
import school from './modules/school'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const actions = {
    setLoading({ commit }, isloading) {
        isloading?(
          commit('setLoading', isloading)
        ):(
          setTimeout(()=>{
            commit('setLoading', isloading)
          },1000)
        )
    },
    setTopShow({ commit }, isTopShow) {
        commit('showTop', isTopShow)
    }
}

const mutations = {
    setLoading(state, isloading) {
        state.loading = isloading
    },
    showTop(state, isTopShow) {
        state.showTop = isTopShow
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        home,
        school
    },
    strict: debug
})