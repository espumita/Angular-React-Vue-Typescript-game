import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty, Position, GameState } from '../store/initialState'
import Cell from './Cell'
import { createStartGameAction } from '../actions/exampleAction' 

export function Board(props: Difficulty & { gameState: GameState } & BoardActions) {
  const clickAction : Function = cellAction(props.gameState ,props.startGame)
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.boardWidth, props.boardHeight, clickAction)}
    </div>
  )
}

function cellAction(gameState : GameState, startGame: Function) : Function {
  if (gameState === GameState.NotStarted) return startGame
  return (position: Position) => console.log("arreadySarted, nice try on: ", position.x , position.y)
}
  
function cells(width: number, height : Number, clickAction : Function) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i, clickAction))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number, clickAction : Function) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    cellsRow.push(<Cell x={j} y={rowNumber} key={`cell-${j}-${rowNumber}`} clickAction={() => clickAction({x: j, y: rowNumber})}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`}>
      {cellsRow}
    </div>
  ) 
}

export default connect(
  (state: Store) : Difficulty & { gameState: GameState } => { return { ...state.difficulty, gameState: state.gameState } },
  (dispatch: Function) : BoardActions => { return {
    startGame: (position: Position) => dispatch(createStartGameAction(position))
  }}
)(Board)

interface BoardActions {
  startGame: Function
}