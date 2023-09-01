require('dotenv').config()
const connectDB = require('./utils/connectDB')
const express = require('express')

const app = express()
const PORT = 3000

const Flight = require('./models/Flight')

connectDB()



app.get('/', (req, res) => {
    res.send('Working!')
})



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})