import { Action } from 'redux'
import { Position } from '../model/index'
import { START_GAME_ACTION, DEPLOY_MINES_ACTION, MAKE_MOVEMENT } from './actionsTypes'

export interface StartGaneAction extends Action {
    type: typeof START_GAME_ACTION,
    position: Position
}

export interface DeployMinesAction extends Action {
    type: typeof DEPLOY_MINES_ACTION
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

export function createDeployMinesAction() : DeployMinesAction {
    return {
        type: DEPLOY_MINES_ACTION
    }
}

export function createMakeMovementAction(position: Position) : MakeMovementAction {
    //if poisiton is in mines => return LOSE GAME ACTION?
    return {
        type: MAKE_MOVEMENT,
        position: position
    }
}


export function distpatchCreateStartGameAction(position: Position){
    return (dispatch: Function) => {
        dispatch(createStartGameAction(position))
        dispatch(createDeployMinesAction())
        dispatch(createMakeMovementAction(position))
    }
}

export function dispatchCreateMakeMovementAction(position: Position){
    return (dispatch: Function) => {
        dispatch(createMakeMovementAction(position))
    }
}

