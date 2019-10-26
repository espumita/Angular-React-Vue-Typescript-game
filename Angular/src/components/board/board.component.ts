import { Component } from '@angular/core';
import { CellType, BeginnerDifficulty, ExpertDifficulty } from 'src/model';
import { Position } from '../../model'

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {

  rows(){
    const difficulty = new ExpertDifficulty()
    return difficulty.boardWidth
  }
  columns(){
    const difficulty = new ExpertDifficulty()
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
