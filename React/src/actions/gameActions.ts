import { Action } from 'redux'
import { Position, Difficulty } from '../store/initialState'
import { START_GAME_ACTION, DEPLOY_MINES_ACTION, MAKE_MOVEMENT } from './actions'

export interface StartGaneAction extends Action {
    type: typeof START_GAME_ACTION,
    position: Position
}

export interface DeployMinesAction extends Action {
    type: typeof DEPLOY_MINES_ACTION
    difficulty: Difficulty
}

export interface MakeMovementAction extends Action {
    type: typeof MAKE_MOVEMENT
    position: Position
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

export function createMakeMovementAction(position: Position) : MakeMovementAction {
    return {
        type: MAKE_MOVEMENT,
        position: position
    }
}


export function distpatchCreateStartGameAction(position: Position, difficulty: Difficulty){
    return (dispatch: Function) => {
        dispatch(createStartGameAction(position))
        dispatch(createDeployMinesAction(difficulty))
        dispatch(createMakeMovementAction(position))
    }
}

