import { GameState, BeginnerDifficulty } from '../model/index'
import { Store } from './store'

const initialState: Store = {
    difficulty: new BeginnerDifficulty(),
    gameSate: { state: GameState.NotStarted },
    mines: {
        positions: [],
        perimeterCells: []
    },
    showableCells: []
}

export default initialState