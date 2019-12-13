import {FeedContent} from "./FeedContent"

export interface Feed {
    isFeedLoading: Boolean,
    content: Array<FeedContent>
}