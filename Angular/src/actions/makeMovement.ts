import { Action } from '@ngrx/store'
import { MAKE_MOVEMENT } from './actionsTypes'
import { Position } from '../model/index'

export interface MakeMovementAction extends Action {
    type: typeof MAKE_MOVEMENT
    position: Position
}

export function createMakeMovementAction(position: Position) : MakeMovementAction {
    return {
        type: MAKE_MOVEMENT,
        position: position
    }
}