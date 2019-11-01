import { MAKE_MOVEMENT } from './actionsTypes'
import { Position } from '../model'
import { createAction, props } from '@ngrx/store' 

export const makeMovement = createAction(MAKE_MOVEMENT, props<{selectedPosition: Position}>())

export function createMakeMovementAction(position: Position) {
    return makeMovement({ selectedPosition: position })
}

