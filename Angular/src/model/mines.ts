import { Position } from './position'
import { CellType } from './cellType'

export interface Mines {
    positions: Position[]
    perimeterCells: PerimeterCell[]
}

export class PerimeterCell {
    position: Position
    numberOfClosestsMines: number

    constructor(position : Position, numberOfClosestsMines: number = 1){
        this.position = position
        this.numberOfClosestsMines = numberOfClosestsMines
    }

    updateNumberOfClosestsMines(){
        this.numberOfClosestsMines = this.numberOfClosestsMines + 1
    }

    cellType(): CellType {
        if(this.numberOfClosestsMines === 1) return CellType.OneMineClose
        if(this.numberOfClosestsMines === 2) return CellType.TwoMinesClose
        if(this.numberOfClosestsMines === 3) return CellType.TreeMinesClose
        if(this.numberOfClosestsMines === 4) return CellType.FourMinesClose
        if(this.numberOfClosestsMines === 5) return CellType.FiveMinesClose
        if(this.numberOfClosestsMines === 6) return CellType.SixMinesClose
        if(this.numberOfClosestsMines === 7) return CellType.SevenMinesClose
        if(this.numberOfClosestsMines === 8) return CellType.EightMinesClose
    }

}