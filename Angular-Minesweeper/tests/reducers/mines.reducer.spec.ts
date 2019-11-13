import { minesReducer as reducer } from '../../src/reducers/mines.reducer' 
import { BeginnerDifficulty, Difficulty } from '../../src/model'
import { DEPLOY_MINES } from '../../src/actions/actionsTypes'

describe('Mines reducer should', () => {

    test('set empty mines and perimeters state at the beginning', () => {
        const aDifficutly = new BeginnerDifficulty()
        const deployMinesAction = {
            type: undefined,
            difficulty: aDifficutly
        }

        const newState = reducer(undefined, deployMinesAction)

        expect(newState.positions.length).toBe(0)
        expect(newState.perimeterCells.length).toBe(0)
    })

    test('set mines and perimeters when react to deploy mines action for one mine', () => {
        const aDifficutly : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 1
        }
        const deployMinesAction = {
            type: DEPLOY_MINES,
            difficulty: aDifficutly
        }
     
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(3)
        expect(newState.perimeterCells[0].numberOfClosestsMines).toBe(1)
        expect(newState.perimeterCells[1].numberOfClosestsMines).toBe(1)
        expect(newState.perimeterCells[2].numberOfClosestsMines).toBe(1)
    })

    test('set mines and perimeters when react to deploy mines action for tree mines', () => {
        const aDifficutly : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 3
        }

        const deployMinesAction = {
            type: DEPLOY_MINES,
            difficulty: aDifficutly
        }

        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(1)
        expect(newState.perimeterCells[0].numberOfClosestsMines).toBe(3)
    })

    test('set mines and perimeters when react to deploy mines action for eight mines', () => {
        const aDifficutly = {
            boardWidth: 3,
            boardHeight: 3,
            minesNumber: 8
        }
        const deployMinesAction = {
            type: DEPLOY_MINES,
            difficulty: aDifficutly
        }
  
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(1)
        const closestMines = newState.perimeterCells[0].numberOfClosestsMines 
        expect(closestMines === 3 || closestMines === 5 || closestMines === 8 ).toBeTruthy()
    })
})