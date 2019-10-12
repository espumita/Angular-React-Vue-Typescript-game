import reducer from '../../src/reducers/showableCellsReducer' 
import { BeginerDifficulty, Position, Mines } from '../../src/store/initialState'
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


})