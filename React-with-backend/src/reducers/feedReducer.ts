import initialState from '../store/initialState'
import { FEED_LOADED, LOAD_FEED_REQUESTED } from '../actions/actionTypes'
import {FeedLoaded, FeedLoadedRequested} from "../actions/loadFreed"
import {Feed} from "../model/Feed"
import {Action} from "redux";

export default (state: Feed = undefined, action: Action) => {
    if (state == undefined ) return initialState.feed
    switch(action.type){
        case LOAD_FEED_REQUESTED : return feedLoadedRequested(state, action as FeedLoadedRequested)
        case FEED_LOADED : return feedLoaded(state, action as FeedLoaded)
    }
    return state
}

function feedLoadedRequested(state: Feed, action: FeedLoadedRequested) {
    return {
        isFeedLoading: true,
        content: state.content
    }
}

function feedLoaded(state: Feed, action: FeedLoaded) {
    return {
        isFeedLoading: false,
        content: Object.assign(state.content, action.feedContents)
    }
}