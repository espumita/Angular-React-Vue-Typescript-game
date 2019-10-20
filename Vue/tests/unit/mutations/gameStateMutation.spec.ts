import gameStateMutations from '@/mutations/gameStateMutation' 
import { START_GAME_MUTATION } from '@/mutations/mutationTypes'
import { GameState } from '@/model'

describe('Game state mutation should set game state to', () => {

    test('started when the game start', () => {
        const state = { state: GameState.NotStarted }

        gameStateMutations[START_GAME_MUTATION](state)

        expect(state).toStrictEqual({ state: GameState.Started})
    })

})