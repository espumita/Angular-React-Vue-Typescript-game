import initialState from '../store/initialState'
import { Position, Mines, PerimeterCell, Difficulty } from '../model'
import { DeployMinesAction } from '../actions/deployMines'
import { DEPLOY_MINES } from '../actions/actionsTypes'

export default (state: Mines = undefined, action: DeployMinesAction, difficulty : Difficulty) => {
    if (state == undefined) return initialState.mines
    switch(action.type){
        case DEPLOY_MINES: {
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
        const widthIndex = Math.floor(Math.random() * (difficulty.boardWidth))
        const heightIndex = Math.floor(Math.random() * (difficulty.boardHeight))
        if (mines.every(x => !x.sameAs(new Position(widthIndex, heightIndex)))){
            mines.push(new Position(widthIndex, heightIndex))
        }
    }
    return mines
}

function getPerimetersOf(mines: Position[], difficulty: Difficulty){
    const newPerimeter : PerimeterCell[] = []
    const allPerimetersPositions = getAllPerimeterPosition(mines, difficulty)

    allPerimetersPositions.forEach(position => {
        if (hasNotBeenAddedTo(newPerimeter, position)){
            if(isNotAMine(position, mines)) newPerimeter.push(new PerimeterCell(position))
        } else {
            const addedCellPerimeter = newPerimeter.find(perimeter => perimeter.position.sameAs(position))
            addedCellPerimeter.updateNumberOfClosestsMines()
        }
    })
    return newPerimeter
}

function getAllPerimeterPosition(mines: Position[], difficulty: Difficulty) : Position[] {
    return [].concat(...mines.map(mine => getPerimeterOf(mine, difficulty)))
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

function hasNotBeenAddedTo(perimeterCells: PerimeterCell[], position : Position){
    return !perimeterCells.some(x => x.position.sameAs(position))
}

function isNotAMine(position : Position, mines: Position[]){
    return !mines.some(x => x.sameAs(position))
}