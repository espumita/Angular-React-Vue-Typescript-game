import { Module } from 'vuex'
import initialState from './initialState'
import { Position } from '@/model'
import makeMovementAction from '../actions/makeMovement'
import showableCellsMutations from '../mutations/showableCellsMutation'

const showableCellsModule :  Module<Position[], any> = {
    state: initialState.showableCells,
    actions: makeMovementAction,
    mutations: showableCellsMutations
}

export default showableCellsModule