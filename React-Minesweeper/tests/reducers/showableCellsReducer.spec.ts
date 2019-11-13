import reducer from '../../src/reducers/showableCellsReducer' 
import { BeginnerDifficulty, Position, Mines, Difficulty, PerimeterCell } from '../../src/model'
import { MakeMovementAction } from '../../src/actions/makeMovement'
import { MAKE_MOVEMENT } from '../../src/actions/actionsTypes'

describe('Showable cells reducer should', () => {

    test('not show any cell at the beginning', () => {
        const makeMovementAction : MakeMovementAction = {
            type: undefined,
            position: new Position(0, 0)
            
        }
        const aDifficutly = new BeginnerDifficulty()
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
            minesNumber: 1
        }
        const mines : Mines = { positions: [
            new Position(1, 0)
        ], perimeterCells: [
            new PerimeterCell(new Position(0, 0))
        ] }

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(1)
    })

    test('show all mines when there is a mine', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 2,
            boardHeight: 2, 
            minesNumber: 2
        }
        const mines : Mines = { positions: [
            new Position(0, 0),
            new Position(1, 0)
        ], perimeterCells: [
            new PerimeterCell(new Position(1, 1), 2),
            new PerimeterCell(new Position(0, 1), 2)
         ]
        }
        const state = [
            new Position(1, 1)
        ]
        const newState = reducer(state, makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(3)
    })

    test('show adjacent number cells when click on empty cell', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 3,
            boardHeight: 1, 
            minesNumber: 1
        }
        const mines : Mines = { positions: [
            new Position(2, 0)
        ], perimeterCells: [ 
            new PerimeterCell(new Position(1, 0))
        ]}

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(2)
        expect(newState.some(x => x.sameAs(mines.positions[0]))).toBeFalsy()
    })

    test('show adjacent empty cells and cells with numbers when click on empty cell', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 3,
            boardHeight: 3, 
            minesNumber: 1
        }
        const mines : Mines = { positions: [
            new Position(2, 2)
        ], perimeterCells: [ 
            new PerimeterCell(new Position(2, 1)),
            new PerimeterCell(new Position(1, 2)),
            new PerimeterCell(new Position(1, 1))
        ]}

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(8)
        expect(newState.some(x => x.sameAs(mines.positions[0]))).toBeFalsy()
    })

    test('show all cells when there is a empty board', () => {
        const makeMovementAction : MakeMovementAction = {
            type: MAKE_MOVEMENT,
            position: new Position(0, 0)
            
        }
        const aDifficutly :  Difficulty = {
            boardWidth: 10,
            boardHeight: 10, 
            minesNumber: 0
        }
        const mines : Mines = { positions: [], perimeterCells: [ ]}

        const newState = reducer([], makeMovementAction, mines, aDifficutly)

        expect(newState.length).toBe(100)
    })
})