import { Action } from 'redux'
import { RESET_GAME } from "./actionsTypes"

export interface ResetGameAction extends Action {
    type: typeof RESET_GAME
}

export function createResetGameAction() : ResetGameAction {
    return {
        type: RESET_GAME
    }
}