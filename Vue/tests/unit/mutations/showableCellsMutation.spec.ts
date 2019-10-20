import mutations from '@/mutations/showableCellsMutation'
import { MAKE_MOVEMENT_MUTATION } from '@/mutations/mutationTypes'
import { Position, Mines, Difficulty } from '@/model'

describe('Showable cells mutations should', () => {

    test('show a single cell', () => {
        const position = new Position(0, 0)
        const state :Position[] = []

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
})