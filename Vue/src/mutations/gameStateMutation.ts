import { GameState } from '../model'
import { START_GAME_MUTATION, RESET_GAME_STATE_MUTATION } from './mutationTypes'

export default {
    [START_GAME_MUTATION]: (state: { state: GameState }) => {
        state.state = GameState.Started
    },
    [RESET_GAME_STATE_MUTATION]: (state: { state: GameState }) => {
        state.state = GameState.NotStarted
    }
}