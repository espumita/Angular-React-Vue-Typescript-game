import * as React from 'react'
import {useEffect} from 'react';
import {createLoadFeedAction} from '../../actions/loadFreed'
import {useDispatch} from "react-redux";


const Page1 = () => {
        const dispatch = useDispatch()
        useEffect(() => {
            createLoadFeedAction(dispatch)
        }, [])

    return(
        <div>

        </div>
    )
}

export default Page1