
import initialState, { Difficulty  } from '../store/initialState'

//This reducer should only be used to change dificulty
export default (state: Difficulty = undefined, action: any) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        default: return state
    }
}
