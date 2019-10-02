import { ActionAction1, ACTION1 } from '../actions/exampleAction'
import { Mine } from '../store/initialState'

export default (state: Mine[] = [], action: ActionAction1) => {
    switch(action.type){
        //case ACTION1: return { ...state, b: action.payload }
        default: return state
    }
}
