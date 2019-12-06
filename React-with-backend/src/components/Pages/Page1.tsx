import * as React from 'react'
import {useEffect} from 'react';
import {getFeed} from '../../clients/feedClient'
const Page1 = () => {
        useEffect(() =>{
               getFeed()
        }, [])

    return(
        <div>

        </div>
    )
}

export default Page1