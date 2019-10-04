
import initialState, { Position, Mines } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actions'

export default (state: Mines = undefined, action: DeployMinesAction) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES_ACTION: {
            console.log('DEPLOYING MINES', action.difficulty.minesNumber)
            const newMinesPositions : Position[] = []
            while (newMinesPositions.length != action.difficulty.minesNumber){
                const a = Math.floor(Math.random() * (action.difficulty.boardWidth))
                const b = Math.floor(Math.random() * (action.difficulty.boardHeight))
                if (newMinesPositions.every(x => !x.sameAs(new Position(a, b)))){
                    newMinesPositions.push(new Position(a,b))
                }
            }
            return { positions : newMinesPositions, perimeterCells: []}
        }   
        default: return state
    }
}