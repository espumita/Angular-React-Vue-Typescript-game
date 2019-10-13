export interface Positionable {
    x: number
    y: number
}

export class Position implements Positionable {
    x: number
    y: number

    constructor(x : number, y: number){
        this.x = x
        this.y = y
    }

    sameAs(position : Position) : boolean {
        return this.x === position.x && this.y === position.y
    }
}