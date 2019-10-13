import { Position } from './position'

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

}