import { combineReducers } from 'redux'
import difficultyReducer from './difficultyReducer'
import gameStateReducer from './gameStateReducer'
import minesReducer from './minesReducer'
import { Store } from '../store/initialState'

const combinedReducers = combineReducers<Store>({
    difficulty: difficultyReducer,
    gameState: gameStateReducer,
    mines: minesReducer
});

export default combinedReducers;