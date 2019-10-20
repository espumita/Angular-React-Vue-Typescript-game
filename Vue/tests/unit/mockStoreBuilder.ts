import { Store } from '../../src/store/store'
import { GameState, Difficulty, BeginnerDifficulty, Position, PerimeterCell, Mines } from '../../src/model'
import Vuex, { Module } from 'vuex'
import initialState from '@/store/initialState'

export function storeBuilder(){
    return new MockStoreBuilder()
}

function createStoreModuleWith<T>(initialStore : T) : Module<T, any> {
    return {
        state: initialStore
    }
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

    withActions() : MockStoreBuilder{
        this.mockDispatch = true
        return this
    }

    build(){
        const store = new Vuex.Store({
            modules: {
                difficulty: createStoreModuleWith(this.initialStore.difficulty),
                gameState: createStoreModuleWith(this.initialStore.gameState),
                mines: createStoreModuleWith(this.initialStore.mines),
                showableCells : createStoreModuleWith(this.initialStore.showableCells)
            }
        })
        if (this.mockDispatch) store.dispatch = jest.fn()
        return store
    }
}
