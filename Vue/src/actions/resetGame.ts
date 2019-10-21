import { RESET_GAME } from './actionsTypes'
import { RESET_GAME_MUTATION, RESET_GAME_STATE_MUTATION } from '../mutations/mutationTypes'

export default {
    [RESET_GAME]: (context: any) => {
        context.commit(RESET_GAME_STATE_MUTATION)
        context.commit(RESET_GAME_MUTATION)
    }
}