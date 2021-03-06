import { GameState } from '../model'
import { START_GAME_MUTATION } from './mutationTypes'

export default {
    [START_GAME_MUTATION]: (state: { state: GameState }) => {
        state.state = GameState.Started
    }
}