export interface Store {
    difficulty: Difficulty
    gameState: GameState
    mines: Mines
    showableCells: Position[]
}

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

export class IntermediateDifficulty  implements Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number

    constructor(){
        this.minesNumber = 40
        this.boardWidth = 16
        this.boardHeight = 16
    }
}

export class ExpertDifficulty  implements Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number

    constructor(){
        this.minesNumber = 99
        this.boardWidth = 30
        this.boardHeight = 16
    }
}


export enum GameState {
    NotStarted = 0,
    Started = 1
}

export enum CellType {
    None = 0,
    EmptyCell = 1,
    Mine = 2,
    OneMineClose = 3,
    TwoMinesClose = 4,
    TreeMinesClose = 5,
    FourMinesClose = 6,
    FiveMinesClose = 7,
    SixMinesClose = 8,
    SevenMinesClose = 9,
    EightMinesClose = 10
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

    sameAs(position : Position) : boolean {
        return this.x === position.x && this.y === position.y
    }
}

const initialState: Store = {
    difficulty: new ExpertDifficulty(),
    gameState: GameState.NotStarted,
    mines: {
        positions: [],
        perimeterCells: []
    },
    showableCells: []
}

export default initialState