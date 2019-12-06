import {get} from 'axios'

export function getFeed(){
    get('http://localhost:8080/feeds')
        .then(out => {
            const { data } = out
            console.log(data)
        }).catch(out => {
            console.log(out)
        })
}
