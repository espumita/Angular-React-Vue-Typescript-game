import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'

const _showableCellsReducer = createReducer(initialState.showableCells 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)

export function showableCellsReducer(state, action){
    return _showableCellsReducer(state, action)
}