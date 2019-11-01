import { StartGameAction } from '../actions/startGame'
import { ResetGameAction } from '../actions/resetGame'
import initialState from '../store/initialState'
import { GameState } from '../model'
import { START_GAME } from '../actions/actionsTypes'

export default (state: GameState = undefined, action: StartGameAction | ResetGameAction) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        case START_GAME: return GameState.Started
        default: return state
    }
}
