import { Module } from 'vuex'
import initialState from './initialState'
import { Mines } from '@/model'
import deployMinesAction from '../actions/deployMines'
import minesMutation from '../mutations/minesMutation'

const minesModule :  Module<Mines, any> = {
  state: initialState.mines,
  actions: deployMinesAction,
  mutations: minesMutation
}

export default minesModule