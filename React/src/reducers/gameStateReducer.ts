import { StartGaneAction, START_GAME_ACTION } from '../actions/exampleAction'
import initialState, { GameState  } from '../store/initialState'

export default (state: GameState = undefined, action: StartGaneAction) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        case START_GAME_ACTION: {
            console.log('GAME STARTED', action.position.x, action.position.y)
            return GameState.Started
        }
        default: return state
    }
}
