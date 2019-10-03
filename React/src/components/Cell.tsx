import * as React from 'react'
import { Position } from '../store/initialState'

const Cell = function Cell(props: Position) {
    return (
      <div>
        ({props.x},{props.y})
      </div>
    )
  }
  
export default Cell