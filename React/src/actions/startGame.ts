import { Action } from 'redux'
import { START_GAME } from './actionsTypes'
import { Position } from '../model/index'
import { createDeployMinesAction } from './deployMines'
import { createMakeMovementAction } from './makeMovement'

export interface StartGameAction extends Action {
    type: typeof START_GAME,
    position: Position
}

export function createStartGameAction(position: Position) : StartGameAction {
    return {
        type: START_GAME,
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