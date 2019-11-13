import { GameState, BeginnerDifficulty } from '../model'
import { Store } from './store'

export default {
    difficulty: new BeginnerDifficulty(),
    gameState: { state: GameState.NotStarted },
    mines: {
        positions: [],
        perimeterCells: []
    },
    showableCells: []
} as Store
