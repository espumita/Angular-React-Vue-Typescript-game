import reducer from '../../src/reducers/gameStateReducer' 
import { GameState, Position } from '../../src/store/initialState'
import { StartGaneAction } from '../../src/actions/gameActions'
import { START_GAME_ACTION } from '../../src/actions/actions'

describe('Game state reducer should', () => {

    test('start initialized to', () => {
        const state = GameState.NotStarted
        const startGaneAction : StartGaneAction= {
            type: START_GAME_ACTION,
            position: new Position(0, 0)
        }

        const newState = reducer(undefined, startGaneAction)

        expect(newState).toBe(GameState.NotStarted)
    })

})