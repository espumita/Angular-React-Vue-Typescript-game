import { StartGaneAction, START_GAME_ACTION } from '../actions/exampleAction'
import initialState, { Difficulty  } from '../store/initialState'

export default (state: Difficulty = undefined, action: StartGaneAction) => {
    if (state == undefined) return initialState.difficulty
    switch(action.type){
        case START_GAME_ACTION: console.log('HERE WE GO', action.position.x, action.position.y)
        default: return state
    }
}
