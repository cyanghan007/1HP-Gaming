// Requiring express
const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// Importing modules folder
const Product = require('./models/consoles')
const consolesData = require('./utilities/consolesData')
const { Console } = require('console')
// Setting up port
const port = process.env.PORT || 3003

// DB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo')
// })

// Middelware
app.use(express.urlencoded({extended:false}))
// Calling method
app.use(methodOverride('_method'))

//setting up our views
app.set('view engine', 'jsx')
//Initialzing my engine
app.engine('jsx', require('express-react-views').createEngine()) 

// Home page 
app.get('/', (req, res) => {
    res.render('Home')
})

// Grabbing consoles to display products
app.get('/consoles', (req, res) => {
    Console.find({}, (error, allConsole) => {
        res.render('Index', {
            pokemon: allConsole
        })
    })
})


// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the page
    console.log(`I am listening on http://localhost:${port}`) 
})
