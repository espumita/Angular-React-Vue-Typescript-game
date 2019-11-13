import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Store } from 'src/store/store'
import { resetGame } from 'src/actions/resetGame'

export function storeReducer (state: Store, action) : Store {
    return _storeReducer(state, action)
}

const _storeReducer = createReducer(initialState,
   on(resetGame, state => {
        return { ...initialState, difficulty: state.difficulty }   
   })
)