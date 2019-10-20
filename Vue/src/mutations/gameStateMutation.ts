import initialState from '../store/initialState'
import { GameState } from '../model'
import { START_GAME_MUTATION } from './mutationTypes'

export default {
    [START_GAME_MUTATION]: (game: { state: GameState}) => {
        //return 90
        game.state = 90
    }
}