import initialState from '../store/initialState'
import { GameState } from '../model'
import { START_GAME_MUTATION } from './mutationTypes'

export default {
    [START_GAME_MUTATION]: (state: { state: GameState }) => {
        //return 90
        state.state = 90
    }
}