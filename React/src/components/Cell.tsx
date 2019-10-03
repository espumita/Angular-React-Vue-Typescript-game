import * as React from 'react'
import { Position } from '../store/initialState'

const Cell = function Cell(props: Position) {
    return (
      <div style={{ width: '40px', height: '40px', backgroundColor: 'grey', borderBlockColor: 'black', borderStyle: 'solid', borderWidth: '1px'}}>
        ({props.x},{props.y})
      </div>
    )
  }
  
export default Cell