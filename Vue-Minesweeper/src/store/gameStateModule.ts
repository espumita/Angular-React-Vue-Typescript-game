import { Module } from 'vuex'
import initialState from './initialState'
import { GameState } from '@/model'
import startGameAction from '../actions/startGame'
import gameStateMutations from '../mutations/gameStateMutation'

const gameStateModule : Module<{ state: GameState }, any> = {
    state: initialState.gameState,
    actions: startGameAction,
    mutations: gameStateMutations
}

export default gameStateModule