import * as React from 'react'
import {useEffect} from 'react';
import {loadFeed} from '../../actions/loadFreed'
import {useDispatch, useSelector} from "react-redux";
import {Feed} from "../../model/Feed";
import {Store} from "../../store/store";
import {FeedContent} from "../../model/FeedContent";


function feed(feedContent: Array<FeedContent>) {
    const contentStyle = {
        display: 'flex',
        paddingTop: '0px',
        paddingRight: '8px',
        paddingLeft: '8px',
        paddingBottom: '16px',
        width: '236px',
        minWidth: '236px',
        minHeight: '162px'
    }
    const imageStyle = {
        width: '236px',
        minWidth: '236px',
        borderStyle: 'none',
        borderWidth: '0px',
        borderRadius: '14px',
        minHeight: '162px'

    }
    return feedContent.map((content, i) => (
        <div key={`content-${i}`} >
            <div style={contentStyle}>
                <img src={content.url} style={Object.assign({backgroundColor: content.color},imageStyle)}/>
            </div>
        </div>
    ))
}

const Page1 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        loadFeed(dispatch)
    }, [])
    const { content } = useSelector((state: Store) => state.feed)
    const feedWall = {
        paddingTop: '24px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '500px'

    }
    return (
        <div style={feedWall}>
            {feed(content)}
        </div>
    )
}

export default Page1