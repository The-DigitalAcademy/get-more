require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 60000

app.use(cors())
app.use(express.json())


app.get('', (req, res) => {
    res.status(200).json({server: 'The derver is up'})
})

app.listen(port, () => {
    console.log(`server is up http://localhost:${port}`)
})