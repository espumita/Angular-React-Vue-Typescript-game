import reducer from '../../src/reducers/combinedReducers' 
import { RESET_GAME } from '../../src/actions/actionsTypes'
import { ResetGameAction } from '../../src/actions/resetGame'
import initialState from '../../src/store/initialState'

describe('Combined reducers should', () => {

    test('reset game', () => {
        const resetGameAction : ResetGameAction = {
            type: RESET_GAME
        }

        const newState = reducer(undefined, resetGameAction)

        expect(newState).toBe(initialState)
    })

})