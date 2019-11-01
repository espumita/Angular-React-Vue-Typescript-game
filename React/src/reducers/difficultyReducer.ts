import initialState from '../store/initialState'
import { SetDifficultyAction } from '../actions/setDifficulty'
import { Difficulty } from '../model'
import { SET_DIFFICULTY } from '../actions/actionsTypes'

export default (state: Difficulty = undefined, action: SetDifficultyAction) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        case SET_DIFFICULTY: return action.difficulty
        default: return state
    }
}
