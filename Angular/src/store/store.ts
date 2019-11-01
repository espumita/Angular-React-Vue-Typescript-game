import { Difficulty, GameState, Mines, Position } from '../model'

export interface Store {
    difficulty: Difficulty          
    gameState: GameState
    mines: Mines
    showableCells: Position[]
}

