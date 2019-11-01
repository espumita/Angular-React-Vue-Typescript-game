import { storeReducer as reducer } from '../../src/reducers/store.reducer' 
import { RESET_GAME } from '../../src/actions/actionsTypes'
import { Store } from '../../src/store/store'
import { ExpertDifficulty, GameState, Position, PerimeterCell } from '../../src/model'


describe('Combined reducers should', () => {

    test('reset game state and mines but not difficulty', () => {
        const expertDifficulty  = new ExpertDifficulty()
        const resetGameAction = {
            type: RESET_GAME
        }
        const state : Store = {
            difficulty: expertDifficulty,
            gameState: GameState.Started,
            mines: {
                positions: [ new Position(0, 0) ],
                perimeterCells: [
                    new PerimeterCell(new Position(1, 0))
                ]
            },
            showableCells: [ new Position(1, 0) ]
        }

        const newState = reducer(state, resetGameAction)

        expect(newState.difficulty).toStrictEqual(expertDifficulty)
        expect(newState.gameState).toBe(GameState.NotStarted)
        expect(newState.mines.positions.length).toBe(0)
        expect(newState.mines.perimeterCells.length).toBe(0)
        expect(newState.showableCells.length).toBe(0)
    })

})