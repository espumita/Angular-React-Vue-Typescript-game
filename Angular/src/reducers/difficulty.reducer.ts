import initialState from 'src/store/initialState'
import { Difficulty } from 'src/model'
import { SET_DIFFICULTY } from '../actions/actionsTypes'
import { SetDifficultyAction } from 'src/actions/setDifficulty'

export default (state: Difficulty, action: SetDifficultyAction) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type) {
        case SET_DIFFICULTY: return action.difficulty
        default: return state
    }
}
