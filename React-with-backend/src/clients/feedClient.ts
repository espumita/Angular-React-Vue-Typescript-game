import axios from 'axios'
import {FeedContent} from "../model/FeedContent"

export async function getFeed(): Promise<Array<FeedContent>>{
    const {data} = await axios.get('http://localhost:8080/feeds')
    return data
}
