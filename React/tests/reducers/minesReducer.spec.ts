import reducer from '../../src/reducers/minesReducer' 
import { BeginnerDifficulty, Difficulty } from '../../src/model/index'
import { DeployMinesAction } from '../../src/actions/deployMines'
import { DEPLOY_MINES } from '../../src/actions/actionsTypes'

describe('Mines reducer should', () => {

    test('set empty mines and perimeters state at the beginning', () => {
        const deployMinesAction : DeployMinesAction = {
            type: undefined
        }
        const aDifficutly = new BeginnerDifficulty()

        const newState = reducer(undefined, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(0)
        expect(newState.perimeterCells.length).toBe(0)
    })

    test('set mines and perimeters when react to deploy mines action for one mine', () => {
        const deployMinesAction : DeployMinesAction = {
            type: DEPLOY_MINES
        }
        const aDifficutly : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 1
        }
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(3)
        expect(newState.perimeterCells[0].numberOfClosestsMines).toBe(1)
        expect(newState.perimeterCells[1].numberOfClosestsMines).toBe(1)
        expect(newState.perimeterCells[2].numberOfClosestsMines).toBe(1)
    })

    test('set mines and perimeters when react to deploy mines action for tree mines', () => {
        const deployMinesAction : DeployMinesAction = {
            type: DEPLOY_MINES
        }
        const aDifficutly : Difficulty = {
            boardWidth: 2,
            boardHeight: 2,
            minesNumber: 3
        }
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(1)
        expect(newState.perimeterCells[0].numberOfClosestsMines).toBe(3)
    })

    test('set mines and perimeters when react to deploy mines action for eight mines', () => {
        const deployMinesAction : DeployMinesAction = {
            type: DEPLOY_MINES
        }
        const aDifficutly : Difficulty = {
            boardWidth: 3,
            boardHeight: 3,
            minesNumber: 8
        }
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(1)
        const closestMines = newState.perimeterCells[0].numberOfClosestsMines 
        expect(closestMines === 3 || closestMines === 5 || closestMines === 8 ).toBeTruthy()
    })
})