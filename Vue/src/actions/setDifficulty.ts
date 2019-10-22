import { SET_DIFFICULTY, RESET_GAME } from "./actionsTypes"
import { CHANGE_DIFFICULTY } from "../mutations/mutationTypes"
import { Difficulty } from '../model'


export function dispatchSetDifficultyAction(difficulty: Difficulty){
    return (dispatch: Function) => {
        dispatch(SET_DIFFICULTY, difficulty)
        dispatch(RESET_GAME)
    }
}

export default {
    [SET_DIFFICULTY]: (context: any, difficulty : Difficulty) => context.commit(CHANGE_DIFFICULTY, difficulty)
}

