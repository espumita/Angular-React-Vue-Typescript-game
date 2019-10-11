import reducer from '../../src/reducers/minesReducer' 
import { BeginerDifficulty } from '../../src/store/initialState'
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

})