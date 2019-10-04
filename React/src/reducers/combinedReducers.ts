import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import gameStateReducer from './gameStateReducer'
import { Store } from '../store/initialState'

const combinedReducers = combineReducers<Store>({
    difficulty: gameReducer,
    gameState: gameStateReducer
});

export default combinedReducers;