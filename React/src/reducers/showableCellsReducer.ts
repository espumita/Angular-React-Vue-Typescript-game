
import initialState, { Position } from '../store/initialState'

export default (state: Position[] = undefined, action: any) => {
    if (state == undefined) return initialState.showableCells
    switch(action.type){
        default: return state
    }
}
