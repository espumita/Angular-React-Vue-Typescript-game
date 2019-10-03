export interface Store {
    difficulty: Difficulty 
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

export interface Position {
    x: number
    y: number
}

const initialState: Store = {
    difficulty: new BeginerDifficulty()
}

export default initialState