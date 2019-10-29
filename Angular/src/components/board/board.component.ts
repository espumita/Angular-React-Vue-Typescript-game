import { Component } from '@angular/core';
import { CellType, ExpertDifficulty, BeginnerDifficulty } from 'src/model';
import { Position } from '../../model'

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {

  rows(){
    const difficulty = new BeginnerDifficulty()
    return difficulty.boardWidth
  }
  columns(){
    const difficulty = new BeginnerDifficulty()
    return difficulty.boardHeight
  }
  rangeOf(size: number) : number[] {
    return [...Array(size).keys()]
  }
  position(x: number, y: number){
    return new Position(x, y)
  }
  getCellType(position: Position){
    return CellType.None
  }

  cellClikedAction($event){
    console.log($event)
  }
}
