import Vue from 'vue'
import Vuex, { Module, Store } from 'vuex'
import { Store as CustomStore } from './store'
import initialState from './initialState'
import { GameState, Difficulty, Mines, Position } from '@/model'
import { startGameActions } from '../actions/startGame'
import gameStateMutation from '../mutations/gameStateMutation'

Vue.use(Vuex)

const gameStateModule :  Module<{ state: GameState }, any> = {
  state: initialState.gameSate,
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
  state: initialState.showableCells
}

export default new Vuex.Store<CustomStore>({
  modules: {
    difficulty: difficultyModule,
    gameSate: gameStateModule,
    mines: minesModule,
    showableCells : showableCellsModule
  }
})



