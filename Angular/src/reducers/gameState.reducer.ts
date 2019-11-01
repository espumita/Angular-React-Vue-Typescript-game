import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { GameState } from 'src/model'
import { startGame } from 'src/actions/startGame'

const _gameStateReducer = createReducer(initialState.gameState,
   on(startGame, state => GameState.Started)
)

export function gameStateReducer (state: GameState, action) : GameState {
    return _gameStateReducer(state, action)
}


