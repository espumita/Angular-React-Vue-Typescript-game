import { SET_DIFFICULTY, RESET_GAME } from "./actionsTypes"
import { Difficulty } from '../model'


export function dispatchSetDifficultyAction(difficulty: Difficulty){
    return (dispatch: Function) => {
        dispatch(SET_DIFFICULTY, difficulty)
        dispatch(RESET_GAME)
    }
}

