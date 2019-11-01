import { Action } from '@ngrx/store'
import { SET_DIFFICULTY } from "./actionsTypes"
import { Difficulty } from '../model'

export interface SetDifficultyAction extends Action {
    type: typeof SET_DIFFICULTY,
    difficulty: Difficulty
}

export function createSetDifficultyAction(difficulty: Difficulty) : SetDifficultyAction {
    return {
        type: SET_DIFFICULTY,
        difficulty: difficulty
    }
}


