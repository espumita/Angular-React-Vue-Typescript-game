import mutations from '@/mutations/showableCellsMutation'
import { MAKE_MOVEMENT_MUTATION } from '@/mutations/mutationTypes'
import { Position, Mines, Difficulty, PerimeterCell } from '@/model'

describe('Showable cells mutations should', () => {

    test('show a single cell', () => {
        const position = new Position(0, 0)
        const state : Position[] = []

        const difficulty :  Difficulty = {
            boardWidth: 1,
            boardHeight: 1, 
            minesNumber: 0
        }
        const mines : Mines = { positions: [], perimeterCells: [] }
        const rootGetters = {
            difficulty,
            mines
        }

        mutations[MAKE_MOVEMENT_MUTATION](state, { position, rootGetters })

        expect(state.length).toBe(1)
    })

    test('show cell with number', () => {
        const position = new Position(0, 0)
        const state : Position[] = []
        const difficulty :  Difficulty = {
            boardWidth: 2,
            boardHeight: 1, 
            minesNumber: 1
        }
        const mines : Mines = { positions: [
            new Position(1, 0)
        ], perimeterCells: [
            new PerimeterCell(new Position(0, 0))
        ] }
        const rootGetters = {
            difficulty,
            mines
        }

        mutations[MAKE_MOVEMENT_MUTATION](state, { position, rootGetters })

        expect(state.length).toBe(1)
    })

    test('show all mines when there is a mine', () => {
        const position = new Position(0, 0)
        const state : Position[] = [ new Position(1, 1) ]
        const difficulty :  Difficulty = {
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
        const rootGetters = {
            difficulty,
            mines
        }

        mutations[MAKE_MOVEMENT_MUTATION](state, { position, rootGetters })

        expect(state.length).toBe(3)
    })

})