import { Action, createAction, props } from '@ngrx/store'
import { SET_DIFFICULTY } from "./actionsTypes"
import { Difficulty } from '../model'

export interface SetDifficultyAction extends Action {
    type: typeof SET_DIFFICULTY,
    difficulty: Difficulty
}

export const setDifficulty = createAction(SET_DIFFICULTY, props<{newDifficulty: Difficulty}>())

export function createSetDifficultyAction(difficulty: Difficulty) {
    return setDifficulty({ newDifficulty: difficulty})
}



