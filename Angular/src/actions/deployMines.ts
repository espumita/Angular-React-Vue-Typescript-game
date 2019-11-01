import { Action } from '@ngrx/store'
import { DEPLOY_MINES } from './actionsTypes'

export interface DeployMinesAction extends Action {
    type: typeof DEPLOY_MINES
}

export function createDeployMinesAction() : DeployMinesAction {
    return {
        type: DEPLOY_MINES
    }
}
