import mutations from '@/mutations/minesMutation'
import { DEPLOY_MINES_MUTATION } from '@/mutations/mutationTypes'
import { Position, Mines, Difficulty, PerimeterCell } from '@/model'

describe('Mines mutations should', () => {

    test('set mines and perimeters when react to deploy mines action for one mine', () => {
        const difficulty : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 1
        }
        const state : Mines = {
            positions: [],
            perimeterCells: []
        }
        const rootGetters = {
            difficulty
        }

        mutations[DEPLOY_MINES_MUTATION](state, rootGetters)

        expect(state.positions.length).toBe(difficulty.minesNumber)
        expect(state.perimeterCells.length).toBe(3)
        expect(state.perimeterCells[0].numberOfClosestsMines).toBe(1)
        expect(state.perimeterCells[1].numberOfClosestsMines).toBe(1)
        expect(state.perimeterCells[2].numberOfClosestsMines).toBe(1)
    })

    test('set mines and perimeters when react to deploy mines action for tree mines', () => {
        const difficulty : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 3
        }
        const state : Mines ={
            positions: [],
            perimeterCells: []
        }
        const rootGetters = {
            difficulty
        }

        mutations[DEPLOY_MINES_MUTATION](state, rootGetters)

        expect(state.positions.length).toBe(difficulty.minesNumber)
        expect(state.perimeterCells.length).toBe(1)
        expect(state.perimeterCells[0].numberOfClosestsMines).toBe(3)
    })

    test('set mines and perimeters when react to deploy mines action for eight mines', () => {
        const difficulty : Difficulty = {
            boardWidth: 3,
            boardHeight: 3,
            minesNumber: 8
        }
        const state : Mines = {
            positions: [],
            perimeterCells: []
        }
        const rootGetters = {
            difficulty
        }

        mutations[DEPLOY_MINES_MUTATION](state, rootGetters)

        expect(state.positions.length).toBe(difficulty.minesNumber)
        expect(state.perimeterCells.length).toBe(1)
        const closestMines = state.perimeterCells[0].numberOfClosestsMines 
        expect(closestMines === 3 || closestMines === 5 || closestMines === 8 ).toBeTruthy()
    })
})