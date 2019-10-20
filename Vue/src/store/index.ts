import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import { Store } from './store'
import initialState from './initialState'
import { GameState, Difficulty, Mines, Position } from '@/model'
import startGameActions from '../actions/startGame'
import makeMovementActions from '../actions/makeMovement'
import gameStateMutation from '../mutations/gameStateMutation'

Vue.use(Vuex)

const gameStateModule :  Module<{ state: GameState }, any> = {
  state: initialState.gameState,
  mutations: gameStateMutation,
  actions: startGameActions
}

const difficultyModule :  Module<Difficulty, any> = {
  state: initialState.difficulty
}

const minesModule :  Module<Mines, any> = {
  state: initialState.mines
}

const showableCellsModule :  Module<Position[], any> = {
  state: initialState.showableCells,
  actions: makeMovementActions
}

export default new Vuex.Store<Store>({
  modules: {
    difficulty: difficultyModule,
    gameState: gameStateModule,
    mines: minesModule,
    showableCells : showableCellsModule
  }
})



