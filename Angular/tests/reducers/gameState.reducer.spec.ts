import { gameStateReducer as reducer } from '../../src/reducers/gameState.reducer' 
import { GameState } from '../../src/model/index'
import { START_GAME } from '../../src/actions/actionsTypes'

describe('Game state reducer should set game state to', () => {

    test('not started at the beginning', () => {
        const startGameAction = {
            type: undefined
        }

        const newState = reducer(undefined, startGameAction)

        expect(newState).toBe(GameState.NotStarted)
    })

    test('started when the game start', () => {
        const state = GameState.NotStarted
        const startGameAction = {
            type: START_GAME
        }

        const newState = reducer(state, startGameAction)

        expect(newState).toBe(GameState.Started)
    })

})