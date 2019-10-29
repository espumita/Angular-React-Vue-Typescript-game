import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component'
import { BoardComponent } from '../board/board.component'
import { CellComponent } from '../cell/cell.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { difficultyReducer } from '../../reducers/difficulty.reducer'


@NgModule({
  declarations: [
    RootComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      difficulty: difficultyReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10})
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
