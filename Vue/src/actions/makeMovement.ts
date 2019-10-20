import { MAKE_MOVEMENT } from './actionsTypes'
import { Position } from '../model'

export function dispatchCreateMakeMovementAction(position: Position){
    return (dispatch: Function) => {
        dispatch(MAKE_MOVEMENT, position)
    }
}

export default {
    [MAKE_MOVEMENT]: (context: any, position : Position) => {}
}