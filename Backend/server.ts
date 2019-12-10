import server, { router } from 'server'
import fs from 'fs'
const { get } = router

function getShuffledArrayOf(length : number) : Array<number>{
    const numbers = [...Array(length).keys()]
    return numbers.sort(() => 0.5 - Math.random());
}
const cors = [
    context => server.reply.header("Access-Control-Allow-Origin", "*"),
    context => server.reply.header("Access-Control-Allow-Methods", "GET"),
    context => server.reply.header("Access-Control-Allow-Headers", "Origin")
]

server({ port: 8080 }, [
    ...cors,
    get('/images/:imageId', context => {
        const imagePath = `./images/${context.req.params.imageId}.jpg`;
        const fileBuffer = fs.readFileSync(imagePath)
        const base64ImageContent = Buffer.from(fileBuffer).toString('Base64')

        context.res.writeHead(200, { 'Content-Type': 'image/jpeg'})
        context.res.end(base64ImageContent, 'Base64')
    }),
    get('/feeds', context => {
        const numbers = getShuffledArrayOf(15)
        const feeds = numbers.map(i =>
            Object.assign({}, { url: `http://localhost:8080/images/${i}`, width: 520 + i*8, height: 500 + i*10, color: "#"+((1<<24)*Math.random()|0).toString(16)})
        )
        context.res.writeHead(200, { 'Content-Type': 'application/json'})
        context.res.end(JSON.stringify(feeds))
    })
])
