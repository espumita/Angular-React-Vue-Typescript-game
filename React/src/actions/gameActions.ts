import { Action } from 'redux'
import { Position } from '../store/initialState'
import { START_GAME_ACTION } from './actions'

export interface StartGaneAction extends Action {
    type: typeof START_GAME_ACTION,
    position: Position
}

export function createStartGameAction(position: Position) : StartGaneAction {
    return {
        type: START_GAME_ACTION,
        position: position
    }
}