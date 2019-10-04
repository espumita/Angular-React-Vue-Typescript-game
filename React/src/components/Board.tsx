import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty, Position } from '../store/initialState'
import Cell from './Cell'
import { createStartGameAction } from '../actions/exampleAction' 

export function Board(props: Difficulty & BoardActions) {
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.boardWidth, props.boardHeight, props.startGame)}
    </div>
  )
}
  
function cells(width: number, height : Number, startGame : Function) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i, startGame))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number, startGame : Function) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    cellsRow.push(<Cell x={j} y={rowNumber} key={`cell-${j}-${rowNumber}`} clickAction={() => startGame({x: j, y: rowNumber})}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`}>
      {cellsRow}
    </div>
  ) 
}

export default connect(
  (state: Store) : Difficulty => { return { ...state.difficulty } },
  (dispatch: Function) : BoardActions => { return {
    startGame: (position: Position) => dispatch(createStartGameAction(position))
  }}
)(Board)

interface BoardActions {
  startGame: Function
}