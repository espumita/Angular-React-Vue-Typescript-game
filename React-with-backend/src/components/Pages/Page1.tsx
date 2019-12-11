import * as React from 'react'
import {useEffect} from 'react';
import {loadFeed} from '../../actions/loadFreed'
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../store/store";
import {FeedContent} from "../../model/FeedContent";

function chunkArray(myArray : Array) {
    if (myArray.length === 0) return []
    const numberOfColumns = 5;
    const chunk_size = Math.floor(myArray.length / numberOfColumns)
    const difference = myArray.length - numberOfColumns * chunk_size
    let index = 0;
    const tempArray = [];
    for (index = 0; index + chunk_size <= myArray.length - difference; index += chunk_size) {
        const a = myArray.slice(index, index + chunk_size)
        tempArray.push(a);
    }
    if (difference > 0) {
        const restContentList = myArray.slice(myArray.length - difference , myArray.length )
        restContentList.forEach(content => {
            const randomNumber = Math.floor(Math.random() * numberOfColumns)
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
    const aasd = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    }

    const chunkedFeedContent = chunkArray(feedContent)

    return chunkedFeedContent.map((chunk, i) => {
        return (
            <div key={`column-${i}`} style={aasd}>
                {chunk.map((content, j) => (
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

const Page1 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        loadFeed(dispatch)
    }, [])
    const { content } = useSelector((state: Store) => state.feed)
    const feedWall = {
        paddingTop: '24px',
        display: 'gird',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={feedWall}>
                {feeds(content)}
            </div>
        </div>
    )
}

export default Page1