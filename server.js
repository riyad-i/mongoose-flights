require('dotenv').config()
const connectDB = require('./utils/connectDB')
const express = require('express')

const app = express()
const PORT = 3000

const Flight = require('./models/Flight')

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.json())






//index
app.get('/', async (req, res) => {
    try {
        const flights = await Flight.find({})
        res.render('Index', {flights})
        // res.send(flights)
    } catch (error) {
        console.log(error);
    }

})






app.post('/', async (req, res) => {
    try {
        const newFlight = await Flight.create(req.body)
        res.send(newFlight)
    } catch (error) {
        console.log(error);
    }
})








connectDB()


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})