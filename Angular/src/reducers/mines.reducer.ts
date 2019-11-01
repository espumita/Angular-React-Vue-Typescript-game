import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Mines } from 'src/model'

const _minesReducer = createReducer(initialState.mines 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)

export function minesReducer (state: Mines, action) {
    return _minesReducer(state, action)
}
