import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty } from '../store/initialState'
import Cell from './Cell'

export function Board(props: Difficulty) {
    const a = []
    for (let i = 0; i < props.boardWidth; i++) {
      for (let j = 0; j < props.boardHeight; j++) {
        a.push(<Cell key={`cell-${i}-${j}`} x={i} y={j}/>)
      }
    }

    return (
      <div>
        {
          a
        }
      </div>
    )
  }
  
export default connect(
  (state: Store) : Difficulty => { return { ...state.difficulty } }
)(Board)