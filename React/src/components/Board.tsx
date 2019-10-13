import * as React from 'react'
import { Position, Mines, CellType, GameState, Difficulty, PerimeterCell } from '../model/index'
import { Store } from '../store/store'
import Cell from './Cell'
import { distpatchCreateStartGameAction, dispatchCreateMakeMovementAction } from '../actions/index' 
import { useSelector, useDispatch } from 'react-redux'

const Board  = () => {
  const { difficulty, gameState, mines, showableCells } = useSelector((state: Store) => state)
  const dispatch = useDispatch()
  const action = getGameClickAction(gameState, dispatch)
  return (
    <div style={{ display: 'flex' }}>
      {createRows(difficulty, action, showableCells, mines)}
    </div>
  )
}

function getGameClickAction(gameState : GameState, dispatch: Function) : Function {
  if (gameState === GameState.NotStarted) return (position: Position) => distpatchCreateStartGameAction(position)(dispatch)
  return (position: Position) => dispatchCreateMakeMovementAction(position)(dispatch)
}
  
function createRows(difficulty: Difficulty, clickAction : Function, showableCells : Position[], mines: Mines) {
  return rangeOf(difficulty.boardWidth)
            .map(rowNumber => createRow(rowNumber, difficulty.boardHeight, clickAction, showableCells, mines))
}

function rangeOf(size: number) : number[] {
  return [...Array(size).keys()]
}

function createRow(rowNumber: number, height : number, clickAction : Function, showableCells : Position[], mines: Mines) {
  return (
    <div key={`cell-row-${rowNumber}`} style={{backgroundColor: 'red'}}>
      {rangeOf(height)
        .map(columnNumber => {
            const position = new Position(rowNumber, columnNumber)
            const type = getCellType(position, showableCells, mines)
            const action = getCellClickAction(type, clickAction)
            return <Cell
              position={position}
              type={type}
              clickAction={() => action(position)}
              key={`cell-${rowNumber}-${columnNumber}`}
            />
      })}
    </div>
  ) 
}

function getCellType(position : Position, showableCells : Position[], mines : Mines) : CellType {
  if (isNotShowable(position, showableCells)) return CellType.None
  if (isMine(position, mines.positions)) return CellType.Mine
  if (isPerimeterCell(position, mines.perimeterCells)) return mines.perimeterCells.find(x => position.sameAs(x.position)).cellType()
  return CellType.EmptyCell
}

function isNotShowable(position: Position, showableCells : Position[]) {
  return !showableCells.some(x => position.sameAs(x))
}

function isMine(position: Position, minesPositions : Position[]) {
  return minesPositions.some(x => x.sameAs(position))
}

function isPerimeterCell(position: Position, perimeterCell : PerimeterCell[]) {
  return perimeterCell.some(x => x.position.sameAs(position))
}

function getCellClickAction(type : CellType, clickAction: Function): Function {
  if(type === CellType.None) return clickAction
  return () => {}
}

export default Board
