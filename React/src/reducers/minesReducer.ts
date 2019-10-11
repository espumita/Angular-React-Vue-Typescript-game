
import initialState, { Position, Mines, PerimeterCell, Difficulty } from '../store/initialState'
import { DeployMinesAction } from '../actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../actions/actionsTypes'


export default (state: Mines = undefined, action: DeployMinesAction, difficulty : Difficulty) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES_ACTION: {
            const mines = getMinesFor(difficulty)
            const perimeters = getPerimetersOf(mines, difficulty)
            return { 
                positions : mines,
                perimeterCells: perimeters
            }
        }   
        default: return state
    }
}

function getMinesFor(difficulty: Difficulty){
    const mines : Position[] = []
    while (mines.length != difficulty.minesNumber){
        const a = Math.floor(Math.random() * (difficulty.boardWidth))
        const b = Math.floor(Math.random() * (difficulty.boardHeight))
        if (mines.every(x => !x.sameAs(new Position(a, b)))){
            mines.push(new Position(a,b))
        }
    }
    return mines
}

function getPerimetersOf(mines: Position[], difficulty: Difficulty){
    const newPerimeter : PerimeterCell[] = []
    const allPerimetersPositions : Position[] = [].concat(...mines.map(mine => getPerimeterOf(mine, difficulty)))

    allPerimetersPositions.forEach(position => {
        const exists = existsIn(position, newPerimeter)
        if (!exists){
            if(!existsInMines(position, mines)) newPerimeter.push(new PerimeterCell(position))
        } else {
            const existingPerimeter = newPerimeter.find(perimeter => perimeter.position.sameAs(position))
            existingPerimeter.updateNumberOfClosestsMines()
        }
    })
    return newPerimeter
}

function getPerimeterOf(mine : Position, difficulty : Difficulty){
    const perimeter = []
    if (mine.x + 1 < difficulty.boardWidth && mine.y + 1 < difficulty.boardHeight) perimeter.push(new Position(mine.x + 1, mine.y + 1))
    if (mine.x + 1 < difficulty.boardWidth ) perimeter.push(new Position(mine.x + 1, mine.y ))
    if (mine.y + 1 < difficulty.boardHeight) perimeter.push(new Position(mine.x, mine.y + 1))
    if (mine.x - 1 >= 0 && mine.y -1 >= 0) perimeter.push(new Position(mine.x - 1, mine.y - 1))
    if (mine.x - 1 >= 0) perimeter.push(new Position(mine.x - 1, mine.y))
    if (mine.y -1 >= 0) perimeter.push(new Position(mine.x, mine.y - 1))
    if (mine.x + 1 < difficulty.boardWidth && mine.y -1 >= 0) perimeter.push(new Position(mine.x + 1, mine.y - 1))
    if (mine.x - 1 >= 0 && mine.y + 1 < difficulty.boardHeight) perimeter.push(new Position(mine.x - 1, mine.y + 1))
    return perimeter
}

function existsIn(position : Position, perimeterCells: PerimeterCell[]){
    return perimeterCells.some(x => x.position.sameAs(position))
}
function existsInMines(position : Position, mines: Position[]){
    return mines.some(x => x.sameAs(position))
}