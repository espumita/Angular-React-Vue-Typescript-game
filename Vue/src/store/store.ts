import { Difficulty, GameState, Mines, Position } from '../model'

export interface Store {
    difficulty: Difficulty          
    gameState: { state: GameState }
    mines: Mines
    showableCells: Position[]
}
