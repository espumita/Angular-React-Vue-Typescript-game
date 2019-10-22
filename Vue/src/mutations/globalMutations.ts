import { RESET_GAME_MUTATION } from './mutationTypes'
import initialState from '../store/initialState'
import { Store } from '../store/store'

export default {
    [RESET_GAME_MUTATION]: (state: Store) => {
        state.gameState = initialState.gameState
        state.mines = initialState.mines
        state.showableCells = initialState.showableCells
    }
}