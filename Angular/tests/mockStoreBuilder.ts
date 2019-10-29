import { Store } from '../src/store/store'
import { GameState, Difficulty, BeginnerDifficulty, Position, PerimeterCell } from '../src/model'

export function storeBuilder(){
    return new MockStoreBuilder()
}

export class MockStoreBuilder {
    initialStore : Store
    mockDispatch : boolean

    constructor(){
        this.initialStore = {
            difficulty: new BeginnerDifficulty(),
            gameState: { state: GameState.NotStarted },
            mines: { positions: [], perimeterCells: []},
            showableCells: []
        }
        this.mockDispatch = false
    }

    withDifficulty(difficulty: Difficulty): MockStoreBuilder {
        this.initialStore.difficulty = difficulty
        return this
    }

    withGameState(gameState: GameState) : MockStoreBuilder {
        this.initialStore.gameState.state = gameState
        return this
    }

    withShowableCell(position: Position) : MockStoreBuilder {
        this.initialStore.showableCells.push(position)
        return this
    }

    withPerimeterCell(perimeterCell: PerimeterCell) : MockStoreBuilder {
        this.initialStore.mines.perimeterCells.push(perimeterCell)
        return this
    }

    withDispatch() : MockStoreBuilder {
        this.mockDispatch = true
        return this
    }

    build(){
        return {}
    }
}
