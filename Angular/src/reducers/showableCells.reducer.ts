import { createReducer, on } from '@ngrx/store'
import initialState from 'src/store/initialState'
import { Position, Mines, Difficulty, PerimeterCell } from '../model'
import { makeMovement } from 'src/actions/makeMovement'

export function showableCellsReducer(state : Position[], action) : Position[]{
    return _showableCellsReducer(action.mines, action.difficulty)(state, action)
}

const _showableCellsReducer = (mines: Mines, difficulty: Difficulty) => createReducer(initialState.showableCells,
    on(makeMovement, (state, { selectedPosition } ) => {
        if(IsNotShowedYet(selectedPosition, state)) {
            if (IsMine(selectedPosition, mines.positions)) return [ ...state, ...mines.positions]
            const showedCells = [...state, selectedPosition ]
            return [ ...showedCells, ...showPerimeterFor(selectedPosition, showedCells, mines, difficulty) ]
        }
    })
)

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
