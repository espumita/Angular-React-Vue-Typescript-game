import { Action, Dispatch } from 'redux'
import {FEED_LOADED, LOAD_FEED_REQUESTED} from "./actionTypes"
import {getFeed} from '../clients/feedClient'
import {FeedContent} from "../model/FeedContent"
import {Observable, timer} from "rxjs";
import {debounce} from "rxjs/operators";

export interface FeedLoadedRequested extends Action {
    type: typeof LOAD_FEED_REQUESTED
}

export interface FeedLoaded extends Action {
    type: typeof FEED_LOADED,
    feedContents: Array<FeedContent>
}

export const loadFeed = async (dispatch: Dispatch) => {
    const loadFeedRequested : FeedLoadedRequested = {
        type: LOAD_FEED_REQUESTED
    }
    dispatch(loadFeedRequested)
    const feedContents = await getFeed()
    console.log('Execute loadFeed Action')// Multiple execution found
    new Observable(subscribe => subscribe.next(feedContents)).pipe(
        debounce(() => timer(3000))
    ).subscribe(contents => {
        const feedLoaded : FeedLoaded = {
            type: FEED_LOADED,
            feedContents: feedContents
        }
        dispatch(feedLoaded)
    })

}
