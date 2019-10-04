import * as React from 'react'
import { Position, CellType, Positionable } from '../store/initialState'

function getColor(type : CellType) {
  if (type === CellType.None) return 'grey'
  if (type === CellType.Mine) return 'red'
  return 'yellow'
}

const Cell = function Cell(props: Positionable & { clickAction : Function, type: CellType }) {
    const color = getColor(props.type)
    return (
      <div onClick={() => props.clickAction()} style={{ width: '40px', height: '40px', backgroundColor: color, borderBlockColor: 'black', borderStyle: 'solid', borderWidth: '1px'}}>
        
      </div>
    )
  }
  
export default Cell