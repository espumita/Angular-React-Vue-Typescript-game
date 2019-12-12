import * as React from 'react'
import {CSSProperties, useEffect} from 'react';
import {loadFeed} from '../../actions/loadFreed'
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {FeedContent} from "../../model/FeedContent";

//TODO
//Send random text in some images
//Inifite load
//do not reload in theme change

function chunkArray(myArray : Array<FeedContent>, numberOfChunks : number) : Array<Array<FeedContent>>{
    if (myArray.length === 0) return []
    const chunk_size = Math.floor(myArray.length / numberOfChunks)
    const difference = myArray.length - numberOfChunks * chunk_size
    let index = 0;
    const tempArray: Array<Array<FeedContent>> = [];
    for (index = 0; index + chunk_size <= myArray.length - difference; index += chunk_size) {
        const a:  Array<FeedContent> = myArray.slice(index, index + chunk_size)
        tempArray.push(a);
    }
    if (difference > 0) {
        const restContentList = myArray.slice(myArray.length - difference , myArray.length )
        restContentList.forEach(content => {
            const randomNumber = Math.floor(Math.random() * numberOfChunks)
            tempArray[randomNumber].push(content)
        })
    }
    return tempArray;
}

function feeds(feedContent: Array<FeedContent>) {
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
    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    } as CSSProperties
    const chunkedFeedContent = chunkArray(feedContent, 5) //This should change in column template too
    return chunkedFeedContent.map((chunk, i: number) => {
        return (
            <div key={`column-${i}`} style={columnStyle}>
                {chunk.map((content, j: number) => (
                    <div key={`content-${i}-${j}`} >
                        <div style={contentStyle}>
                            <img src={content.url} style={Object.assign({backgroundColor: content.color},imageStyle)}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    })
}

const InfiniteScrollExamplePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        loadFeed(dispatch)
    }, [])
    const { content } = useSelector((state: Store) => state.feed)
    const feedWall = {
        paddingTop: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '731px' }}>
            <div style={feedWall}>
                {feeds(content)}
            </div>
        </div>
    )
}

export default InfiniteScrollExamplePage