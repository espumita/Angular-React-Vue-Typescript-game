import { MAKE_MOVEMENT } from './actionsTypes'
import { MAKE_MOVEMENT_MUTATION } from '../mutations/mutationTypes'
import { Position } from '../model'

export function dispatchCreateMakeMovementAction(position: Position){
    return (dispatch: Function) => {
        dispatch(MAKE_MOVEMENT, position)
    }
}

export default {
    [MAKE_MOVEMENT]: ({commit, rootGetters }: any, position : Position) => commit(MAKE_MOVEMENT_MUTATION, { position, rootGetters })
}