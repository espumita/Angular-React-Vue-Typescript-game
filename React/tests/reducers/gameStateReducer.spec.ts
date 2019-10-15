import reducer from '../../src/reducers/gameStateReducer' 
import { GameState, Position } from '../../src/model/index'
import { StartGameAction } from '../../src/actions/startGame'
import { START_GAME } from '../../src/actions/actionsTypes'

describe('Game state reducer should set game state to', () => {

    test('not started at the beginning', () => {
        const startGaneAction : StartGameAction = {
            type: START_GAME,
            position: new Position(0, 0)
        }

        const newState = reducer(undefined, startGaneAction)

        expect(newState).toBe(GameState.NotStarted)
    })

    test('started when the game start', () => {
        const state = GameState.NotStarted
        const startGaneAction : StartGameAction = {
            type: START_GAME,
            position: new Position(0, 0)
        }

        const newState = reducer(state, startGaneAction)

        expect(newState).toBe(GameState.Started)
    })

})