export interface Difficulty {
    minesNumber: number
    boardWidth: number
    boardHeight: number
}

export class BeginnerDifficulty implements Difficulty {
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
