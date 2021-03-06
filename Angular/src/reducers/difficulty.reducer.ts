import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Difficulty } from 'src/model'
import { setDifficulty } from 'src/actions/setDifficulty'

export function difficultyReducer (state: Difficulty, action) {
    return _difficultyReducer(state, action)
}

const _difficultyReducer = createReducer(initialState.difficulty,
    on(setDifficulty, (state, props : { newDifficulty: Difficulty }) => props.newDifficulty)
)


