
import initialState, { Position } from '../store/initialState'
import { MakeMovementAction } from '../actions/gameActions'
import { MAKE_MOVEMENT } from '../actions/actions'

export default (state: Position[] = undefined, action: MakeMovementAction) => {
    if (state == undefined) return initialState.showableCells
    switch(action.type){
        case MAKE_MOVEMENT: {
            console.log('Movement made', action.position.x, action.position.y)
            if(!state.some(x => action.position.sameAs(x))) return [...state, action.position ]
        }
        default: return state
    }
}
