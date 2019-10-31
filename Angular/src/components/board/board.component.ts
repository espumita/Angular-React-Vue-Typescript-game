import { Component } from '@angular/core';
import { CellType } from 'src/model';
import { Position } from '../../model'
import { Store as ngrxStore } from '@ngrx/store';
import { Store } from '../../store/store'
import { Observable } from 'rxjs';

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {
  rows$ : Observable<number>
  columns$ : Observable<number>

  constructor(private store: ngrxStore<Store>){
    console.log(this.store)
    this.rows$ = this.store.select( state => state.difficulty.boardWidth)
    this.columns$ = this.store.select( state => state.difficulty.boardHeight)
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
