import { GameState, BeginnerDifficulty } from '../model/index'
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
