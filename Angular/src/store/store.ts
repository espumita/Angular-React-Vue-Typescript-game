import { Difficulty, GameState, Mines, Position } from '../model/index'

export interface Store {
    difficulty: Difficulty          
    gameState: GameState
    mines: Mines
    showableCells: Position[]
}

