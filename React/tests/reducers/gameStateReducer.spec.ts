import reducer from '../../src/reducers/gameStateReducer' 
import { GameState, Position } from '../../src/store/initialState'
import { StartGaneAction } from '../../src/actions/gameActions'
import { START_GAME_ACTION } from '../../src/actions/actionsTypes'

describe('Game state reducer should set game state to', () => {

    test('not started at the beginning', () => {
        const startGaneAction : StartGaneAction= {
            type: START_GAME_ACTION,
            position: new Position(0, 0)
        }

        const newState = reducer(undefined, startGaneAction)

        expect(newState).toBe(GameState.NotStarted)
    })

    test('started when the game start', () => {
        const state = GameState.NotStarted
        const startGaneAction : StartGaneAction= {
            type: START_GAME_ACTION,
            position: new Position(0, 0)
        }

        const newState = reducer(state, startGaneAction)

        expect(newState).toBe(GameState.Started)
    })

})