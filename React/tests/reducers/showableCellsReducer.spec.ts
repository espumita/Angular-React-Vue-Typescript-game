import reducer from '../../src/reducers/showableCellsReducer' 
import { BeginerDifficulty, Position, Mines, Difficulty, PerimeterCell } from '../../src/store/initialState'
import { MakeMovementAction } from '../../src/actions/gameActions'
import { MAKE_MOVEMENT } from '../../src/actions/actionsTypes'

describe('Showable cells reducer should', () => {

    test('not show any cell at the beginning', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly = new BeginerDifficulty()
        const mines : Mines = { positions: [], perimeterCells: [] }

        const newState = reducer(undefined, makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(0)
    })

    test('show a single cell', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 1,
            boardHeight: 1, 
            minesNumber: 0
        }
        const mines : Mines = { positions: [], perimeterCells: [] }

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(1)
    })

    test('show cell with number', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 2,
            boardHeight: 1, 
            minesNumber: 0
        }
        const mines : Mines = { positions: [
            new Position(1, 0)
        ], perimeterCells: [
            new PerimeterCell(new Position(0, 0))
        ] }

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(1)
    })

})