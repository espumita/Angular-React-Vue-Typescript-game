import { Action } from 'redux'
import { SET_DIFFICULTY } from "./actionsTypes"
import { Difficulty, BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '../model'

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

export function createSetBeginnerDifficultyAction() : SetDifficultyAction {
    return {
        type: SET_DIFFICULTY,
        difficulty: new BeginnerDifficulty()
    }
}

export function createSetIntermediateDifficultyAction() : SetDifficultyAction {
    return {
        type: SET_DIFFICULTY,
        difficulty: new IntermediateDifficulty()
    }
}

export function createSetExpertDifficultyAction() : SetDifficultyAction {
    return {
        type: SET_DIFFICULTY,
        difficulty: new ExpertDifficulty()
    }
}