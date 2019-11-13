import { GameState, BeginnerDifficulty } from '../model'
import { Store } from './store'

const initialState: Store = {
    difficulty: new BeginnerDifficulty(),
    gameState: GameState.NotStarted,
    mines: {
        positions: [],
        perimeterCells: []
    },
    showableCells: []
}

export default initialState