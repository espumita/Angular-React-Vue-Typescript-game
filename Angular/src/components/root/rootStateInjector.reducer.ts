import { DEPLOY_MINES } from '../../actions/actionsTypes'

export function rootStateInjectorReducer( reducer ) {
    return function newReducer( prevState, action ) {
        if (action.type=== DEPLOY_MINES) action = { ...action, difficulty: prevState.difficulty }
        const nextState = reducer(prevState, action);
        return nextState;
    }
}