
import initialState, { Mine, GameState } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actions'

export default (state: Mine[] = undefined, action: DeployMinesAction) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES_ACTION: {
            console.log('DEPLOYING MINES', action.difficulty.minesNumber)
            
        }   
        default: return state
    }
}