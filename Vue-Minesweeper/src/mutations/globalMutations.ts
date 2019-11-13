import { RESET_GAME_MUTATION } from './mutationTypes'
import { Store } from '../store/store'
import { GameState } from '../model'

export default {
    [RESET_GAME_MUTATION]: (state: Store) => {
        state.gameState.state = GameState.NotStarted,
        state.mines = {
            positions: [],
            perimeterCells: []
        }
        state.showableCells = []
    }
}