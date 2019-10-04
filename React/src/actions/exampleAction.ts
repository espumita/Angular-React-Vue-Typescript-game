import { Action } from 'redux'
import { Position } from '../store/initialState'
export const START_GAME_ACTION = 'START_GAME_ACTION'

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