import { Module } from 'vuex'
import initialState from './initialState'
import { Difficulty } from '@/model'
import setDifficulty from '../actions/setDifficulty'
import difficultyMutations from '../mutations/difficultyMutation'

const difficultyModule :  Module<Difficulty, any> = {
    state: initialState.difficulty,
    actions: setDifficulty,
    mutations: difficultyMutations
}

export default difficultyModule