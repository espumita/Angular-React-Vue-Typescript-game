import initialState, { GameState  } from '../store/initialState'

export default (state: GameState = undefined, action: any) => {
    if (state == undefined) return initialState.gameState
    switch(action.type){
        //case ACTION1: return { ...state, b: action.payload }
        default: return state
    }
}
