import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from './store'
import initialState from './initialState'

Vue.use(Vuex)

export default new Vuex.Store<Store>({
  state: initialState,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
