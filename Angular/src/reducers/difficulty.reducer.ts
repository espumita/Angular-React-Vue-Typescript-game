import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Difficulty, ExpertDifficulty } from 'src/model'
import { setDifficulty } from 'src/actions/setDifficulty'


const _difficultyReducer = createReducer(initialState.difficulty,
    on(setDifficulty, state => new ExpertDifficulty())
   // on(action2, state => state - 1),
)

export function difficultyReducer (state: Difficulty, action) {
    return _difficultyReducer(state, action)
}
