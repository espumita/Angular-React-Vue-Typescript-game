import difficultyReducer from './difficultyReducer'
import { StartGaneAction, DeployMinesAction, MakeMovementAction } from '../actions/index'
import gameStateReducer from './gameStateReducer'
import minesReducer from './minesReducer' 
import showableCellsReducer from './showableCellsReducer' 
import { Store } from '../store/store'
import { Action } from 'redux'

const rootReducer = (state: Store, action: Action) => {
    return {
        difficulty: difficultyReducer(state.difficulty, action),
        gameState: gameStateReducer(state.gameState, action as StartGaneAction),
        mines: minesReducer(state.mines, action as DeployMinesAction, state.difficulty),
        showableCells: showableCellsReducer(state.showableCells, action as MakeMovementAction, state.mines, state.difficulty)
    }
}
export default rootReducer;