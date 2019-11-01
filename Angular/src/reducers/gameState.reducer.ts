import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { GameState } from 'src/model'

const _gameStateReducer = createReducer(initialState.gameState 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)

export function gameStateReducer (state: GameState, action) {
    return _gameStateReducer(state, action)
}
