import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RootComponent } from './root.component'
import { BoardComponent } from '../board/board.component'
import { CellComponent } from '../cell/cell.component'
import { TopBarComponent } from '../topBar/topBar.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { difficultyReducer } from '../../reducers/difficulty.reducer'
import { showableCellsReducer } from '../../reducers/showableCells.reducer'
import { gameStateReducer } from '../../reducers/gameState.reducer'
import { minesReducer } from '../../reducers/mines.reducer'

@NgModule({
  declarations: [
    RootComponent,
    BoardComponent,
    CellComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      difficulty: difficultyReducer,
      gameState: gameStateReducer,
      mines: minesReducer,
      showableCells: showableCellsReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10})
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
