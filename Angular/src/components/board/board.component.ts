import { Component } from '@angular/core';
import { CellType } from 'src/model';
import { Position, GameState } from '../../model'
import { Store as NgrxStore } from '@ngrx/store';
import { Store } from '../../store/store'
import { Observable } from 'rxjs';
import {  createStartGameAction } from '../../actions/startGame'

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {
  rows$ : Observable<number>
  columns$ : Observable<number>
  gameState$ : Observable<GameState>

  constructor(private store: NgrxStore<Store>){
    this.rows$ = this.store.select( state => state.difficulty.boardWidth)
    this.columns$ = this.store.select( state => state.difficulty.boardHeight)
    this.gameState$ = this.store.select( state => state.gameState)
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

  cellClikedAction(position: Position, cellType: CellType){
    this.store.dispatch(createStartGameAction(position))
  }

}
