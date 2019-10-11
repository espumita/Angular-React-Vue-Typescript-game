import reducer from '../../src/reducers/minesReducer' 
import { BeginerDifficulty, Difficulty } from '../../src/store/initialState'
import { DeployMinesAction } from '../../src/actions/gameActions'
import { DEPLOY_MINES_ACTION } from '../../src/actions/actionsTypes'

describe('Mines reducer should', () => {

    test('set empty mines and perimeters state at the beginning', () => {
        const deployMinesAction : DeployMinesAction = {
            type: DEPLOY_MINES_ACTION
        }
        const aDifficutly = new BeginerDifficulty()

        const newState = reducer(undefined, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(0)
        expect(newState.perimeterCells.length).toBe(0)
    })

    test('set mines and perimeters when react to deploy mines action for one mine', () => {
        const deployMinesAction : DeployMinesAction = {
            type: DEPLOY_MINES_ACTION
        }
        const aDifficutly : Difficulty = {
            boardWidth: 2,
            boardHeight: 1,
            minesNumber: 1
        }
        const state = {
            positions: [],
            perimeterCells: []
        }

        const newState = reducer(state, deployMinesAction, aDifficutly)

        expect(newState.positions.length).toBe(aDifficutly.minesNumber)
        expect(newState.perimeterCells.length).toBe(1)
        expect(newState.perimeterCells[0].numberOfClosestsMines).toBe(1)
    })

})