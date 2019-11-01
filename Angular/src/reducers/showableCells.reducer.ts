import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Position } from '../model'


export function showableCellsReducer(state : Position[], action) : Position[]{
    return _showableCellsReducer(state, action)
}

const _showableCellsReducer = createReducer(initialState.showableCells 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)


