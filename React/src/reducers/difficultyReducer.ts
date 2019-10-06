
import initialState, { Difficulty  } from '../store/initialState'
import { Action } from 'redux'

//This reducer should only be used to change dificulty
export default (state: Difficulty = undefined, action: Action) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        default: return state
    }
}
