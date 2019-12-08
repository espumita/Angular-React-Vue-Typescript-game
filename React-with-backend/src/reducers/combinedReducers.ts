import {Store} from '../store/store'
import {Action} from 'redux'
import feedReducer from './feedReducer'
import {LoadFeedAction} from "../actions/loadFreed";

export default (state: Store, action: Action) => {
    return {
        feed: feedReducer(state.feed, action as LoadFeedAction)
    }
}