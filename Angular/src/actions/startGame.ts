import { START_GAME } from './actionsTypes'
import { Action  } from '@ngrx/store'
import { Position } from '../model'
import { createMakeMovementAction } from './makeMovement'
import { createDeployMinesAction } from './deployMines'


export interface StartGameAction extends Action {
    type: typeof START_GAME
    position: Position
}

export function createStartGameAction(position: Position) : StartGameAction{
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