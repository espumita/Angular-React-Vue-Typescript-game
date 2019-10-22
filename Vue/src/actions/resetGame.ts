import { RESET_GAME } from './actionsTypes'
import { RESET_GAME_MUTATION } from '../mutations/mutationTypes'

export function dispatchResetGameAction(dispatch: Function) {
    dispatch(RESET_GAME)
}


export default {
    [RESET_GAME]: (context: any) => context.commit(RESET_GAME_MUTATION)
}