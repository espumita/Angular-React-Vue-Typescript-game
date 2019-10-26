import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { BoardComponent } from '../board/board.component';
import { CellComponent } from '../cell/cell.component';

@NgModule({
  declarations: [
    RootComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
