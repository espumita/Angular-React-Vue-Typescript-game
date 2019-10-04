export interface Store {
    difficulty: Difficulty
    gameState: GameState
    mines: Mine[]
    showableCells: Position[]
}

export interface Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number
}

export class BeginerDifficulty implements Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number

    constructor(){
        this.minesNumber = 10
        this.boardWidth = 8
        this.boardHeight = 8
    }
}

export enum GameState {
    NotStarted = 0,
    Started = 1
}

export enum CellType {
    None = 0,
    NoneCliked = 1,
    Mine = 2
}


export interface Mine {
    position: Position
}

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

    sameAs(position : Position){
        return this.x === position.x && this.y === position.y
    }
}

const initialState: Store = {
    difficulty: new BeginerDifficulty(),
    gameState: GameState.NotStarted,
    mines: [],
    showableCells: []
}

export default initialState