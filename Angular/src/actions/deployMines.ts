import { DEPLOY_MINES } from './actionsTypes'
import { createAction } from '@ngrx/store'

export const deployMines = createAction(DEPLOY_MINES)

export function createDeployMinesAction() {
    return deployMines()
}