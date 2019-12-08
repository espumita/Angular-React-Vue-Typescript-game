import initialState from '../store/initialState'
import { LOAD_FEED } from '../actions/actionTypes'
import {LoadFeedAction} from "../actions/loadFreed"
import {Feed} from "../model/Feed"

export default (state: Feed = undefined, action: LoadFeedAction) => {
    if (state == undefined) return initialState.feed
    switch(action.type){
        case LOAD_FEED: return { content: Object.assign(state.content, action.feedContents) }
        default: return state
    }
}