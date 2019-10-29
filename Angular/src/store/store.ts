import { Difficulty, GameState, Mines, Position } from '../model/index'

export interface Store {
    difficulty: Difficulty          
    gameState: { state: GameState }
    mines: Mines
    showableCells: Position[]
}
