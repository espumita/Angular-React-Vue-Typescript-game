import { Component } from '@angular/core';
import { CellType } from 'src/model';

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {

  getCellType(){
    return CellType.SevenMinesClose
  }
}
