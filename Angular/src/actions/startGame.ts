import { START_GAME } from './actionsTypes'
import { Action, createAction  } from '@ngrx/store'

export interface StartGameAction extends Action {
    type: typeof START_GAME
}

export const startGame = createAction(START_GAME)

export function createStartGameAction() {
    return startGame()
}



