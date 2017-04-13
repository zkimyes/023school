import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import main from './modules/main'
import school from './modules/school'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const actions = {
    setLoading({ commit }, isloading) {
        if (isloading) {
            commit('setLoading', isloading)
        } else {
            setTimeout(() => {
                commit('setLoading', isloading)
            }, 1000)
        }
    },
    showMask({ commit }, isShow) {
        commit('showMask', isShow)
    },
    setTitle({ commit }, title) {
        commit('setTitle', title)
    },
    setTopShow({ commit }, isTopShow) {
        commit('showTop', isTopShow)
    },
    rightMenu({ commit }, option) {
        commit('setRightMenu', option)
    }
}

const mutations = {
    setTitle(state, title) {
        state.header.title = title
    },
    setLoading(state, isloading) {
        state.loading = isloading
    },
    showMask(state, isShow) {
        state.showMask = isShow
    },
    showTop(state, isTopShow) {
        state.showTop = isTopShow
    },
    setRightMenu(state, option) {
        state.header.rightMenu = {
            ...state.header.rightMenu,
            ...option
        };
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        main,
        school
    },
    strict: debug
})