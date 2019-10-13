import { ExpertDifficulty, GameState } from '../model/index'
import { Store } from './store'

const initialState: Store = {
    difficulty: new ExpertDifficulty(),
    gameState: GameState.NotStarted,
    mines: {
        positions: [],
        perimeterCells: []
    },
    showableCells: []
}

export default initialState