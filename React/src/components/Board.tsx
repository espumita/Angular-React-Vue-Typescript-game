import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty } from '../store/initialState'
import Cell from './Cell'

export function Board(props: Difficulty) {
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.boardWidth, props.boardHeight)}
    </div>
  )
}
  
function cells(width: number, height : Number) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    cellsRow.push(<Cell x={j} y={rowNumber} key={`cell-${j}-${rowNumber}`}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`}>
      {cellsRow}
    </div>
  ) 
}


export default connect(
  (state: Store) : Difficulty => { return { ...state.difficulty } }
)(Board)