import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'

const _difficultyReducer = createReducer(initialState.difficulty 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)

export function difficultyReducer(state, action){
    return _difficultyReducer(state, action)
}
