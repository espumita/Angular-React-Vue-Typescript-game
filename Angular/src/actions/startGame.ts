import { START_GAME } from './actionsTypes'
import { Action  } from '@ngrx/store'
import { Position } from '../model'

export interface StartGameAction extends Action {
    position: Position
}

export function createStartGameAction(position: Position) : StartGameAction{
    return {
        type: START_GAME,
        position: position
    }
}