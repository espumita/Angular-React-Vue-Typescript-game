import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty, Position, GameState, CellType } from '../store/initialState'
import Cell from './Cell'
import { distpatchCreateStartGameAction, createMakeMovementAction } from '../actions/gameActions' 

export function Board(props: { difficulty: Difficulty } & { gameState: GameState, showableCells : Position[] } & BoardActions) {
  const clickAction = cellAction(props.gameState, props.startGame, props.difficulty, props.makeMovement)
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.difficulty.boardWidth, props.difficulty.boardHeight, clickAction, props.showableCells)}
    </div>
  )
}

function cellAction(gameState : GameState, startGame: Function, difficulty: Difficulty, makeMovement: Function) : Function {
  if (gameState === GameState.NotStarted) return (position: Position) => startGame(position, difficulty)
  return makeMovement
}
  
function cells(width: number, height : Number, clickAction : Function, showableCells : Position[]) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i, clickAction, showableCells))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number, clickAction : Function, showableCells : Position[]) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    const cellType = getCellType(new Position(j, rowNumber), showableCells)
    cellsRow.push(<Cell x={j} y={rowNumber} type={cellType} key={`cell-${j}-${rowNumber}`} clickAction={() => clickAction(new Position(j, rowNumber))}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`}>
      {cellsRow}
    </div>
  ) 
}

function getCellType(position : Position, showableCells : Position[]) : CellType {
  if (showableCells.some(x => position.sameAs(x))) return CellType.NoneCliked
  return CellType.None
}

export default connect(
  (state: Store) : { difficulty: Difficulty } & { gameState: GameState, showableCells: Position[] } => { return { difficulty: {...state.difficulty }, gameState: state.gameState, showableCells: state.showableCells } },
  (dispatch: Function) : BoardActions => { return {
    startGame: (position: Position, difficulty: Difficulty) => distpatchCreateStartGameAction(position, difficulty)(dispatch),
    makeMovement: (position: Position) => dispatch(createMakeMovementAction(position))
  }}
)(Board)

interface BoardActions {
  startGame: Function,
  makeMovement: Function
}