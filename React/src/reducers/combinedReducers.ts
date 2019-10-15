import difficultyReducer from './difficultyReducer'
import { StartGameAction } from '../actions/startGame'
import { DeployMinesAction } from '../actions/deployMines'
import { MakeMovementAction } from '../actions/makeMovement'
import { SetDifficultyAction } from '../actions/setDifficulty'
import gameStateReducer from './gameStateReducer'
import minesReducer from './minesReducer' 
import showableCellsReducer from './showableCellsReducer' 
import { Store } from '../store/store'
import { Action } from 'redux'
import { RESET_GAME } from '../actions/actionsTypes'
import initialState from '../store/initialState'

const rootReducer = (state: Store, action: Action) => {
    if( action.type === RESET_GAME) return { ...initialState, difficulty: state.difficulty }
    return {
        difficulty: difficultyReducer(state.difficulty, action as SetDifficultyAction),
        gameState: gameStateReducer(state.gameState, action as StartGameAction),
        mines: minesReducer(state.mines, action as DeployMinesAction, state.difficulty),
        showableCells: showableCellsReducer(state.showableCells, action as MakeMovementAction, state.mines, state.difficulty)
    }
}
export default rootReducer