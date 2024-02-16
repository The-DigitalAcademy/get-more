require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./Database/db')
const port = process.env.PORT || 60000

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/users', require('./Routes/routes'))


app.get('', (req, res) => {
    res.sta
    tus(200).json({server: 'The derver is up'})
})
app.listen(port, () => {
    console.log(`server is up http://localhost:${port}`)
})