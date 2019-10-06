import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty, Position, GameState, CellType, Mines } from '../store/initialState'
import Cell from './Cell'
import { distpatchCreateStartGameAction, dispatchCreateMakeMovementAction } from '../actions/gameActions' 

export function Board(props: { difficulty: Difficulty, gameState: GameState, showableCells : Position[], mines : Mines } & BoardActions) {
  const clickAction = cellAction(props.gameState, props.startGame, props.makeMovement)
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.difficulty.boardWidth, props.difficulty.boardHeight, clickAction, props.showableCells, props.mines)}
    </div>
  )
}

function cellAction(gameState : GameState, startGame: Function, makeMovement: Function) : Function {
  if (gameState === GameState.NotStarted) return (position: Position) => startGame(position)
  return (position: Position) => makeMovement(position)
}
  
function cells(width: number, height : Number, clickAction : Function, showableCells : Position[], mines: Mines) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i, clickAction, showableCells, mines))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number, clickAction : Function, showableCells : Position[], mines: Mines) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    const cellType = getCellType(new Position(rowNumber, j), showableCells, mines)
    cellsRow.push(<Cell x={rowNumber} y={j} type={cellType} key={`cell-${rowNumber}-${j}`} clickAction={() => clickAction(new Position(rowNumber, j))}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`} style={{backgroundColor: 'red'}}>
      {cellsRow}
    </div>
  ) 
}

function getCellType(position : Position, showableCells : Position[], mines : Mines) : CellType {
  if (showableCells.some(x => position.sameAs(x))){
    if (mines.positions.some(x => x.sameAs(position))) return CellType.Mine
    if (mines.perimeterCells.some(x => x.position.sameAs(position))) {
      const perimeterCell = mines.perimeterCells.find(x => x.position.sameAs(position))
      if(perimeterCell.numberOfClosestsMines === 1) return CellType.OneMineClose
      if(perimeterCell.numberOfClosestsMines === 2) return CellType.TwoMinesClose
      if(perimeterCell.numberOfClosestsMines === 3) return CellType.TreeMinesClose
      if(perimeterCell.numberOfClosestsMines === 4) return CellType.FourMinesClose
      if(perimeterCell.numberOfClosestsMines === 5) return CellType.FiveMinesClose
      if(perimeterCell.numberOfClosestsMines === 6) return CellType.SixMinesClose
      if(perimeterCell.numberOfClosestsMines === 7) return CellType.SevenMinesClose
      if(perimeterCell.numberOfClosestsMines === 8) return CellType.EightMinesClose
    }
    return CellType.EmptyCell
  } 
  return CellType.None
}

export default connect(
  (state: Store) : { difficulty: Difficulty, mines: Mines, gameState: GameState, showableCells: Position[] } => { return { difficulty: {...state.difficulty }, gameState: state.gameState, showableCells: state.showableCells, mines: state.mines } },
  (dispatch: Function) : BoardActions => { return {
    startGame: (position: Position) => distpatchCreateStartGameAction(position)(dispatch),
    makeMovement: (position: Position) => dispatchCreateMakeMovementAction(position)(dispatch)
  }}
)(Board)

interface BoardActions {
  startGame: Function,
  makeMovement: Function
}