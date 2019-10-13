import initialState from '../store/initialState'
import { Position, Mines, Difficulty, PerimeterCell } from '../model/index'
import { MakeMovementAction } from '../actions/gameActions'
import { MAKE_MOVEMENT } from '../actions/actionsTypes'

export default (state: Position[] = undefined, action: MakeMovementAction, mines: Mines, difficulty : Difficulty) => {
    if (state == undefined) return initialState.showableCells
    switch(action.type){
        case MAKE_MOVEMENT: {
            if(IsNotShowedYet(action.position, state)) {
                if (IsMine(action.position, mines.positions)) return [ ...state, ...mines.positions]
                const showedCells = [...state, action.position ]
                return [ ...showedCells, ...showPerimeterFor(action.position, showedCells, mines, difficulty) ]
            }
        }
        default: return state
    }
}

function IsNotShowedYet(position: Position, positionsToShow: Position[]){
    return !positionsToShow.some(x => x.sameAs(position))
}

function IsMine(position: Position, mines: Position[]){
    return mines.some(x => x.sameAs(position))
}

function showPerimeterFor(position: Position, showedCells: Position[], mines: Mines, difficulty : Difficulty) : Position [] {
    if (!IsAEmptyCell(position, mines)) return []
    return getEmptyCellPerimeter(position, showedCells, mines, difficulty)
}

function getEmptyCellPerimeter(position: Position, showedCells: Position[], mines: Mines, difficulty : Difficulty){
    const perimeter = getPerimeterFor(position, difficulty)
    const numberCells = perimeter.filter(x => IsACellWithNumber(x, mines.perimeterCells) && IsNotShowedYet(x, showedCells))
    const emptyCells = perimeter.filter(x => IsAEmptyCell(x, mines) && IsNotShowedYet(x, showedCells))
    const emptyCellPropagation : Position[] = []
    showCells(numberCells, emptyCells, showedCells)
    emptyCells.forEach(y => {
        emptyCellPropagation.push(...getEmptyCellPerimeter(y, showedCells, mines, difficulty))
    })
    return [ ...numberCells, ...emptyCells ,...emptyCellPropagation ]
}

function getPerimeterFor(position : Position, difficulty : Difficulty){
    const perimeter = []
    if (position.x + 1 < difficulty.boardWidth && position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x + 1, position.y + 1))
    if (position.x + 1 < difficulty.boardWidth ) perimeter.push(new Position(position.x + 1, position.y ))
    if (position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x, position.y + 1))
    if (position.x - 1 >= 0 && position.y -1 >= 0) perimeter.push(new Position(position.x - 1, position.y - 1))
    if (position.x - 1 >= 0) perimeter.push(new Position(position.x - 1, position.y))
    if (position.y -1 >= 0) perimeter.push(new Position(position.x, position.y - 1))
    if (position.x + 1 < difficulty.boardWidth && position.y -1 >= 0) perimeter.push(new Position(position.x + 1, position.y - 1))
    if (position.x - 1 >= 0 && position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x - 1, position.y + 1))
    return perimeter
}

function IsACellWithNumber(position: Position, cellsWithNumber: PerimeterCell[]){
    return cellsWithNumber.some(x => x.position.sameAs(position))
}

function IsAEmptyCell(position: Position, mines: Mines){
    return !mines.perimeterCells.some(x => x.position.sameAs(position))
            && !IsMine(position, mines.positions)
}

function showCells(numberCells: Position[], emptyCells: Position[], showedCells: Position[]){
    numberCells.forEach(x => showedCells.push(x))
    emptyCells.forEach(x => showedCells.push(x))
}












