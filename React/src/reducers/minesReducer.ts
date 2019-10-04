
import initialState, { Position, Mines, PerimeterCell } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actions'

function getPerimeterFor(position : Position){
    const perimeter = []
    perimeter.push(new Position(position.x + 1, position.y + 1))
    perimeter.push(new Position(position.x + 1, position.y ))
    perimeter.push(new Position(position.x, position.y + 1))
    perimeter.push(new Position(position.x - 1, position.y - 1))
    perimeter.push(new Position(position.x - 1, position.y))
    perimeter.push(new Position(position.x, position.y - 1))
    perimeter.push(new Position(position.x + 1, position.y - 1))
    perimeter.push(new Position(position.x - 1, position.y + 1))
    return perimeter
}

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
            const newPerimeterCells : PerimeterCell[] = []
            newMinesPositions.forEach(minePosition => {
                const perimter = getPerimeterFor(minePosition)
                perimter.forEach(perimeterPosition => {
                    const exists = newPerimeterCells.some(x => x.position.sameAs(perimeterPosition))
                    if (!exists){
                        newPerimeterCells.push(new PerimeterCell(perimeterPosition))
                    }else {
                        const perimeterCell = newPerimeterCells.find(x => x.position.sameAs(perimeterPosition))
                        perimeterCell.updateNumberOfClosestsMines()
                    }
                })
            
         

            })
            return { positions : newMinesPositions, perimeterCells: newPerimeterCells}
        }   
        default: return state
    }
}