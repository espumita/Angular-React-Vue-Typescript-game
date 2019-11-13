import configureMockStore from 'redux-mock-store'
import { Store } from '../src/store/store'
import { GameState, Difficulty, BeginnerDifficulty, Position, PerimeterCell } from '../src/model'

export function storeBuilder(){
    return new MockStoreBuilder()
}

export class MockStoreBuilder {
    initialStore : Store

    constructor(){
        this.initialStore = {
            difficulty: new BeginnerDifficulty(),
            gameState: GameState.NotStarted,
            mines: { positions: [], perimeterCells: []},
            showableCells: []
        }
    }

    withDifficulty(difficulty: Difficulty): MockStoreBuilder {
        this.initialStore.difficulty = difficulty
        return this
    }

    withGameState(gameState: GameState) : MockStoreBuilder {
        this.initialStore.gameState = gameState
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

    build(){
        const mockStore = configureMockStore<Store>([])
        return mockStore(this.initialStore)
    }
}