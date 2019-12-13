import {Store} from '../store/store'
import {Action} from 'redux'
import feedReducer from './feedReducer'

export default (state: Store, action: Action) => {
    return {
        feed: feedReducer(state.feed, action)
    }
}