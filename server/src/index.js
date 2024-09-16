import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const mockData = [
    { id: 1, companyName: "Amazon", ideas: 101 },
    { id: 2, companyName: "Microsoft", ideas: 101 },
    { id: 3, companyName: "CoinSwitch", ideas: 101 },
    { id: 4, companyName: "Nirmata", ideas: 101 },
    { id: 5, companyName: "Nvdia", ideas: 101 },
]

app.get('/home', (req, res) => {
    res.json(mockData);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})