import { Component } from '@angular/core';
import { CellType } from 'src/model';
import { Position } from '../../model'

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {


  position(x: number, y: number){
    return new Position(x, y)
  }
  getCellType(position: Position){
    return CellType.SevenMinesClose
  }

  cellClikedAction($event){
    console.log($event)
  }
}
