import { Action } from 'redux'
import { Position, Difficulty } from '../store/initialState'
import { START_GAME_ACTION, DEPLOY_MINES_ACTION } from './actions'

export interface StartGaneAction extends Action {
    type: typeof START_GAME_ACTION,
    position: Position
}

export interface DeployMinesAction extends Action {
    type: typeof DEPLOY_MINES_ACTION
    difficulty: Difficulty
}


export function createStartGameAction(position: Position) : StartGaneAction {
    return {
        type: START_GAME_ACTION,
        position: position
    }
}

export function createDeployMinesAction(difficulty: Difficulty) : DeployMinesAction {
    return {
        type: DEPLOY_MINES_ACTION,
        difficulty: difficulty
    }
}

export function distpatchCreateStartGameAction(position: Position, difficulty: Difficulty){
    return (dispatch: Function) => {
        dispatch(createStartGameAction(position))
        dispatch(createDeployMinesAction(difficulty))
    }
}

