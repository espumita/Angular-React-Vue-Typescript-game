import { START_GAME } from './actionsTypes'
import { createAction  } from '@ngrx/store'

export const startGame = createAction(START_GAME)

export function createStartGameAction() {
    return startGame()
}



