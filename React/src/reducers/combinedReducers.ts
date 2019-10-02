import { combineReducers } from 'redux'
import minesReducer from './minesReducer'
import { Store } from '../store/initialState'

const combinedReducers = combineReducers<Store>({
    mines: minesReducer 
});

export default combinedReducers;