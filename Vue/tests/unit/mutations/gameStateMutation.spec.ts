import mutations from '@/mutations/gameStateMutation' 
import { START_GAME_MUTATION, RESET_GAME_STATE_MUTATION } from '@/mutations/mutationTypes'
import { GameState } from '@/model'

describe('Game state mutation should set game state to', () => {

    test('started when the game start', () => {
        const state = { state: GameState.NotStarted }

        mutations[START_GAME_MUTATION](state)

        expect(state).toStrictEqual({ state: GameState.Started})
    })

    test('not started when the game is reset', () => {
        const state = { state: GameState.Started }

        mutations[RESET_GAME_STATE_MUTATION](state)

        expect(state).toStrictEqual({ state: GameState.NotStarted})
    })

})