import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import { Store } from './store'
import initialState from './initialState'
import { GameState, Difficulty, Mines, Position } from '@/model'
import startGameAction from '../actions/startGame'
import makeMovementAction from '../actions/makeMovement'
import gameStateMutations from '../mutations/gameStateMutation'
import showableCellsMutations from '../mutations/showableCellsMutation'
import deployMinesAction from '../actions/deployMines'
import minesMutation from '../mutations/minesMutation'

Vue.use(Vuex)

const gameStateModule :  Module<{ state: GameState }, any> = {
  state: initialState.gameState,
  mutations: gameStateMutations,
  actions: startGameAction
}

const difficultyModule :  Module<Difficulty, any> = {
  state: initialState.difficulty
}

const minesModule :  Module<Mines, any> = {
  state: initialState.mines,
  actions: deployMinesAction,
  mutations: minesMutation
}

const showableCellsModule :  Module<Position[], any> = {
  state: initialState.showableCells,
  actions: makeMovementAction,
  mutations: showableCellsMutations
}

export default new Vuex.Store<Store>({
  modules: {
    difficulty: difficultyModule,
    gameState: gameStateModule,
    mines: minesModule,
    showableCells : showableCellsModule
  },
  getters: {
    difficulty(state) { return state.difficulty },
    mines(state) { return state.mines }
  }
})



