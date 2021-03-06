import * as React from 'react'
import { Position, CellType } from '../model'

const Cell = function Cell(props: { position: Position, type: CellType, clickAction : Function }) {
    const color = getColor(props.type)
    const number = getNumber(props.type)

    return (
      <div onClick={() => props.clickAction()} style={{ display:'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: color, borderBlockColor: 'black', borderStyle: 'solid', borderWidth: '1px' }}>
        <div>{number}</div>
      </div>
    )
  }
  
function getColor(type : CellType) {
  if (type === CellType.None) return 'grey'
  if (type === CellType.Mine) return 'red'
  return 'yellow'
}

function getNumber(type : CellType) {
  if (type === CellType.OneMineClose) return '1'
  if (type === CellType.TwoMinesClose) return '2'
  if (type === CellType.TreeMinesClose) return '3'
  if (type === CellType.FourMinesClose) return '4'
  if (type === CellType.FiveMinesClose) return '5'
  if (type === CellType.SixMinesClose) return '6'
  if (type === CellType.SevenMinesClose) return '7'
  if (type === CellType.EightMinesClose) return '8'
  return ''
}
  
export default Cell