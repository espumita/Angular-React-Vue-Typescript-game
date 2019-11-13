import { DEPLOY_MINES, MAKE_MOVEMENT, RESET_GAME } from '../actions/actionsTypes'
import { storeReducer } from './store.reducer'
export function rootStateInjectorReducer( reducer ) {
    return function newReducer( prevState, action ) {
        if (action.type === DEPLOY_MINES) action = { ...action, difficulty: prevState.difficulty }
        if (action.type === MAKE_MOVEMENT) action = { ...action, difficulty: prevState.difficulty, mines: prevState.mines }
        if (action.type === RESET_GAME) return storeReducer(prevState, action)
        const nextState = reducer(prevState, action);
        return nextState;
    }
}