import express from 'express'
import cors from 'cors'
import mockData from './utils/mockData.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/home', (req, res) => {
    res.json(mockData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})