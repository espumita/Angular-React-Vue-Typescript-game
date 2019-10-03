import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty } from '../store/initialState'
import Cell from './Cell'

export function Board(props: Difficulty) {
  return (
    <div>
      {cells(props.boardWidth, props.boardHeight)}
    </div>
  )
}
  
function cells(width: number, height : Number) {
  const cells = []
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      cells.push(<Cell x={i} y={j} key={`cell-${i}-${j}`}/>)
    }
  }
  return cells
}

export default connect(
  (state: Store) : Difficulty => { return { ...state.difficulty } }
)(Board)