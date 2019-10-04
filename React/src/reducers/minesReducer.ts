
import initialState, { Mine, GameState } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actions'

export default (state: Mine[] = undefined, action: DeployMinesAction) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES_ACTION: {
            console.log('DEPLOYING MINES', action.difficulty.minesNumber)
            const newMines : Mine[] = []
            while (newMines.length < action.difficulty.minesNumber){
                const a = Math.floor(Math.random() * (action.difficulty.boardWidth))
                const b = Math.floor(Math.random() * (action.difficulty.boardHeight))
                if (!state.some(x => x.position === { x: a, y: b})){
                    newMines.push({ position: {x: a, y: b}})
                }
            }
            return newMines
        }   
        default: return state
    }
}