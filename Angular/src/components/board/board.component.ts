import { Component } from '@angular/core'
import { CellType } from 'src/model'
import { Position, GameState, Mines, PerimeterCell } from '../../model'
import { Store as NgrxStore } from '@ngrx/store'
import { Store } from '../../store/store'
import { Observable } from 'rxjs'
import { createStartGameAction } from '../../actions/startGame'
import { createMakeMovementAction } from 'src/actions/makeMovement'


@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent {
  rows$ : Observable<number>
  columns$ : Observable<number>
  gameState: GameState
  showableCells: Position[]
  mines: Mines

  constructor(private store: NgrxStore<Store>){
    this.rows$ = this.store.select( state => state.difficulty.boardWidth)
    this.columns$ = this.store.select( state => state.difficulty.boardHeight)
    this.store.select(state => state.gameState).subscribe(gameState => this.gameState = gameState)
    this.store.select(state => state.showableCells).subscribe(showableCells => this.showableCells = showableCells)
    this.store.select(state => state.mines).subscribe(mines => this.mines = mines)
  }
  
  cellClikedAction(position: Position, cellType: CellType){
    if (this.gameState === GameState.NotStarted){
      this.store.dispatch(createStartGameAction(position))
    } else if(cellType === CellType.None){
      this.store.dispatch(createMakeMovementAction(position))
    }
  }
  rangeOf(size: number) : number[] {
    return [...Array(size).keys()]
  }
  position(x: number, y: number){
    return new Position(x, y)
  }
  getCellType(position: Position){
    if (this.isNotShowable(position, this.showableCells)) return CellType.None
    if (this.isMine(position, this.mines.positions)) return CellType.Mine
    if (this.isPerimeterCell(position, this.mines.perimeterCells))  {
        const perimeterCell = this.mines.perimeterCells.find(x => position.sameAs(x.position))
        if (perimeterCell) return perimeterCell.cellType()
    }
    return CellType.EmptyCell
  }
  isNotShowable(position: Position, showableCells : Position[]) {
    return !showableCells.some(x => position.sameAs(x))
  }
  isMine(position: Position, minesPositions : Position[]) {
    return minesPositions.some(x => x.sameAs(position))
  }
  isPerimeterCell(position: Position, perimeterCell : PerimeterCell[]) {
    return perimeterCell.some(x => x.position.sameAs(position))
  }


}
