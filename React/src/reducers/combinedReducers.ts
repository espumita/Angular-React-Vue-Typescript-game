import { combineReducers } from 'redux'
import minesReducer from './minesReducer'
import { Store } from '../store/initialState'

const combinedReducers = combineReducers<Store>({
    difficulty: minesReducer 
});

export default combinedReducers;