import { ActionAction1, ACTION1 } from '../actions/exampleAction'
import initialState, { Difficulty  } from '../store/initialState'

export default (state: Difficulty = undefined, action: ActionAction1) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        //case ACTION1: return { ...state, b: action.payload }
        default: return state
    }
}
