import { Action, createAction } from '@ngrx/store'
import { SET_DIFFICULTY } from "./actionsTypes"
import { Difficulty } from '../model'

export interface SetDifficultyAction extends Action {
    type: typeof SET_DIFFICULTY,
    difficulty: Difficulty
}

export const setDifficulty = createAction(SET_DIFFICULTY)

export function createSetDifficultyAction(difficulty: Difficulty) {
    return setDifficulty()
    return {
        type: SET_DIFFICULTY,
        difficulty: difficulty
    }
}



