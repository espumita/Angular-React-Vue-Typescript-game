import { Action } from 'redux'
import { MAKE_MOVEMENT } from './actionsTypes'
import { Position } from '../model/index'

export interface MakeMovementAction extends Action {
    type: typeof MAKE_MOVEMENT
    position: Position
}

export function createMakeMovementAction(position: Position) : MakeMovementAction {
    //if poisiton is in mines => return LOSE GAME ACTION?
    return {
        type: MAKE_MOVEMENT,
        position: position
    }
}

export function dispatchCreateMakeMovementAction(position: Position){
    return (dispatch: Function) => {
        dispatch(createMakeMovementAction(position))
    }
}