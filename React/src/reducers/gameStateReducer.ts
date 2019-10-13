import { StartGaneAction } from '../actions/index'
import initialState from '../store/initialState'
import { GameState } from '../model/index'
import { START_GAME_ACTION } from '../actions/actionsTypes'

export default (state: GameState = undefined, action: StartGaneAction) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        case START_GAME_ACTION: {
            return GameState.Started
        }
        default: return state
    }
}
