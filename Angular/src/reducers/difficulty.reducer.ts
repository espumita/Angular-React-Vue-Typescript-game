import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Difficulty } from 'src/model'

const _difficultyReducer = createReducer(initialState.difficulty 
   // on(action1, state => state + 1),
   // on(action2, state => state - 1),
)

export function difficultyReducer (state: Difficulty, action) {
    return _difficultyReducer(state, action)
}
