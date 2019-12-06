import server, { router } from 'server'
import fs from 'fs'
const { get } = router

server({ port: 8080 }, [
    get('/images/:imageId', context => {
        const imagePath = `./images/${context.req.params.imageId}.jpg`;
        const fileBuffer = fs.readFileSync(imagePath)
        const base64ImageContent = Buffer.from(fileBuffer).toString('Base64')

        context.res.writeHead(200, { 'Content-Type': 'image/jpeg'})
        context.res.end(base64ImageContent, 'Base64')
    })
])
