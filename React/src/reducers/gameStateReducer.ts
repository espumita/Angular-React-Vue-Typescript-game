import { StartGaneAction } from '../actions/gameActions'
import initialState, { GameState  } from '../store/initialState'
import { START_GAME_ACTION } from '../actions/actions'

export default (state: GameState = undefined, action: StartGaneAction) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        case START_GAME_ACTION: {
            return GameState.Started
        }
        default: return state
    }
}
