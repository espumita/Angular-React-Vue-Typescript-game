import { DEPLOY_MINES, MAKE_MOVEMENT } from '../../actions/actionsTypes'

export function rootStateInjectorReducer( reducer ) {
    return function newReducer( prevState, action ) {
        if (action.type=== DEPLOY_MINES) action = { ...action, difficulty: prevState.difficulty }
        if (action.type=== MAKE_MOVEMENT) action = { ...action, difficulty: prevState.difficulty, mines: prevState.mines }
        const nextState = reducer(prevState, action);
        return nextState;
    }
}