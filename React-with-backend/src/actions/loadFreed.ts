import { Action, Dispatch } from 'redux'
import { LOAD_FEED } from "./actionTypes"
import {getFeed} from '../clients/feedClient'
import {FeedContent} from "../clients/FeedContent";

export interface LoadFeedAction extends Action {
    type: typeof LOAD_FEED,
    feedContents: Array<FeedContent>
}

export const createLoadFeedAction = async (dispatch: Dispatch) => {
    const feedContents = await getFeed()
    const action : LoadFeedAction = {
        type: LOAD_FEED,
        feedContents: feedContents
    }
    dispatch(action)
}