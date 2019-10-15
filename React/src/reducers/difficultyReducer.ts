
import initialState from '../store/initialState'
import { SetDifficultyAction } from '../actions/setDifficulty'
import { Difficulty } from '../model/index'
import { Action } from 'redux'

//This reducer should only be used to change dificulty
export default (state: Difficulty = undefined, action: SetDifficultyAction) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        default: return state
    }
}
