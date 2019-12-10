import * as React from 'react'
import {useEffect} from 'react';
import {loadFeed} from '../../actions/loadFreed'
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {FeedContent} from "../../model/FeedContent";


function feed(feedContent: Array<FeedContent>) {
    const contentStyle = {
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
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        height: `${content.length/5 * 250}px`,
        width: '1260px',
        maxWidth: '1260px'
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={feedWall}>
                {feed(content)}
            </div>
        </div>
    )
}

export default Page1