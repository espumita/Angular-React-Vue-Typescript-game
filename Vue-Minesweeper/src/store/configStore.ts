import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from './store'
import gameStateModule from './gameStateModule'
import difficultyModule from './difficultyModule'
import minesModule from './minesModule'
import showableCellsModule from './showableCellsModule'
import resetGameAction from '../actions/resetGame'
import globalMutations from '../mutations/globalMutations'

export default function configStore(){
  Vue.use(Vuex)
  return new Vuex.Store<Store>({
    modules: {
      difficulty: difficultyModule,
      gameState: gameStateModule,
      mines: minesModule,
      showableCells : showableCellsModule
    },
    actions: resetGameAction,
    mutations: globalMutations,
    getters: {
      difficulty(state) { return state.difficulty },
      mines(state) { return state.mines }
    }
  })
}



