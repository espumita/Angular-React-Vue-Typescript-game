import { Component, Input } from '@angular/core';
import { CellType, Position } from '../../model'

@Component({
  selector: 'Cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() type : CellType
  @Input() postion : Position

  classes() {
    return {
      cell: true,
      mineColor: this.isMine(),
      noneColor: this.isNone(),
      otherColor: this.isOther()
    }
  }
  isMine() {
    return this.type === CellType.Mine
  }
  isNone() {
    return this.type === CellType.None
  }
  isOther() {
    return this.type != CellType.None && this.type != CellType.Mine
  }
  getNumber() {
    if (this.type === CellType.OneMineClose) return '1'
    if (this.type === CellType.TwoMinesClose) return '2'
    if (this.type === CellType.TreeMinesClose) return '3'
    if (this.type === CellType.FourMinesClose) return '4'
    if (this.type === CellType.FiveMinesClose) return '5'
    if (this.type === CellType.SixMinesClose) return '6'
    if (this.type === CellType.SevenMinesClose) return '7'
    if (this.type === CellType.EightMinesClose) return '8'
    return ''
  }
}
