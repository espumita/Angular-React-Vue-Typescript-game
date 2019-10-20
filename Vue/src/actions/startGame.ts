import { START_GAME } from './actionsTypes'
import { MAKE_MOVEMENT } from './actionsTypes'
import { START_GAME_MUTATION } from '../mutations/mutationTypes'
import { Position } from '../model'

export function distpatchCreateStartGameAction(position: Position){
    return (dispatch: Function) => {
        dispatch(START_GAME, position)
        dispatch(MAKE_MOVEMENT, position)
    }
}

export default {
    [START_GAME]: (context: any, position : Position) => context.commit(START_GAME_MUTATION, position)
}