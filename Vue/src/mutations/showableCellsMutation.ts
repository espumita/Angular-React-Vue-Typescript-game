import { MAKE_MOVEMENT_MUTATION } from './mutationTypes'
import { Position, Difficulty, Mines, PerimeterCell } from '../model'

export default {
    [MAKE_MOVEMENT_MUTATION]: (state: Position[], payload: { position: Position, rootGetters: any }) => {
        const difficulty : Difficulty = payload.rootGetters.difficulty
        const mines : Mines = payload.rootGetters.mines
        
        if(IsNotShowedYet(payload.position, state)) {
            if (IsMine(payload.position, mines.positions)) return [ ...state, ...mines.positions]
            state.push(payload.position)
            const showedCells = [...state, payload.position ]
            const cellsToShow = showPerimeterFor(payload.position, showedCells, mines, difficulty)
            cellsToShow.forEach(x => state.push(x))
        }
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
