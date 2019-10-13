import { Action } from 'redux'
import { START_GAME_ACTION } from './actionsTypes'
import { Position } from '../model/index'
import { createDeployMinesAction } from './deployMines'
import { createMakeMovementAction } from './makeMovement'

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

export function distpatchCreateStartGameAction(position: Position){
    return (dispatch: Function) => {
        dispatch(createStartGameAction(position))
        dispatch(createDeployMinesAction())
        dispatch(createMakeMovementAction(position))
    }
}