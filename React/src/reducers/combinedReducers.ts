import difficultyReducer from './difficultyReducer'
import { StartGaneAction, DeployMinesAction, MakeMovementAction} from '../actions/gameActions'
import gameStateReducer from './gameStateReducer'
import minesReducer from './minesReducer' 
import showableCellsReducer from './showableCellsReducer' 
import { Store } from '../store/initialState'
import { Action } from 'redux'

const rootReducer = (state: Store, action: Action) => {
    return {
        difficulty: difficultyReducer(state.difficulty, action),
        gameState: gameStateReducer(state.gameState, action as StartGaneAction),
        mines: minesReducer(state.mines, action as DeployMinesAction, state.difficulty),
        showableCells: showableCellsReducer(state.showableCells, action as MakeMovementAction, state.mines)
    }
}
export default rootReducer;