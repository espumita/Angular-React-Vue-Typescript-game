import { Action } from 'redux'
import { DEPLOY_MINES_ACTION } from './actionsTypes'

export interface DeployMinesAction extends Action {
    type: typeof DEPLOY_MINES_ACTION
}

export function createDeployMinesAction() : DeployMinesAction {
    return {
        type: DEPLOY_MINES_ACTION
    }
}
