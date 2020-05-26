import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: localStorage.getItem('lang') || 'uz'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
