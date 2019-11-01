import { RESET_GAME } from './actionsTypes'
import { createAction  } from '@ngrx/store'

export const resetGame = createAction(RESET_GAME)

export function createResetGameAction() {
    return resetGame()
}

