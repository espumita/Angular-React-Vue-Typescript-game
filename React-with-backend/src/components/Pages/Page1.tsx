import * as React from 'react'
import {useEffect} from 'react';
import {createLoadFeedAction} from '../../actions/loadFreed'
import {useDispatch, useSelector} from "react-redux";
import {Feed} from "../../model/Feed";
import {Store} from "../../store/store";


const Page1 = () => {
        const dispatch = useDispatch()
        useEffect(() => {
            createLoadFeedAction(dispatch)
        }, [])
        const { content } = useSelector((state: Store) => state.feed)
    return(
        <div>
            {content.length}
        </div>
    )
}

export default Page1