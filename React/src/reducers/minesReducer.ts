
import initialState, { Position, Mines, PerimeterCell, Difficulty } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actions'

function getPerimeterFor(position : Position, difficulty : Difficulty){
    const perimeter = []
    if (position.x + 1 < difficulty.boardWidth && position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x + 1, position.y + 1))
    if (position.x + 1 < difficulty.boardWidth ) perimeter.push(new Position(position.x + 1, position.y ))
    if (position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x, position.y + 1))
    if (position.x - 1 >= 0 && position.y -1 >= 0) perimeter.push(new Position(position.x - 1, position.y - 1))
    if (position.x - 1 >= 0) perimeter.push(new Position(position.x - 1, position.y))
    if (position.y -1 >= 0) perimeter.push(new Position(position.x, position.y - 1))
    if (position.x + 1 < difficulty.boardWidth && position.y -1 >= 0) perimeter.push(new Position(position.x + 1, position.y - 1))
    if (position.x - 1 >= 0 && position.y < difficulty.boardHeight) perimeter.push(new Position(position.x - 1, position.y + 1))
    return perimeter
}

export default (state: Mines = undefined, action: DeployMinesAction, difficulty : Difficulty) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES_ACTION: {
            const newMinesPositions : Position[] = []
            while (newMinesPositions.length != difficulty.minesNumber){
                const a = Math.floor(Math.random() * (difficulty.boardWidth))
                const b = Math.floor(Math.random() * (difficulty.boardHeight))
                if (newMinesPositions.every(x => !x.sameAs(new Position(a, b)))){
                    newMinesPositions.push(new Position(a,b))
                }
            }
            const newPerimeterCells : PerimeterCell[] = []
            newMinesPositions.forEach(minePosition => {
                const perimter = getPerimeterFor(minePosition, difficulty)
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