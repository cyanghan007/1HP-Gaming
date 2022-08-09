// Requiring express
const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// Importing modules folder
const GameConsoles = require('./models/gameConsoles')
const gameConsolesData = require('./utilities/gameConsolesData')
// Setting up port
const port = process.env.PORT || 3003

// DB connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// Middelware
app.use(express.urlencoded({extended:false}))
// Calling method
app.use(methodOverride('_method'))
app.use(express.static('public'))

//setting up our views
app.set('view engine', 'jsx')
//Initialzing my engine
app.engine('jsx', require('express-react-views').createEngine()) 

// Home page 
app.get('/api/vi/Gamers-HQ/', (req, res) => {
    GameConsoles.find({}, (error, allGameConsoles) => {
        res.render('Home', {
            gameconsoles: allGameConsoles
        })
    })
})

// Grabbing consoles to display products
app.get('/api/vi/gameconsoles/', (req, res) => {
    GameConsoles.find({}, (error, allGameConsoles) => {
        res.render('Index', {
            gameconsoles: allGameConsoles
        })
    })
})

// Takes to new page and does not render link on this page
// app.get('/api/vi/nintendo/', (req, res) => {
//     Nintendo.find({}, (error, allnintendo) => {
//         res.render('Home', {
//             nintendo: allnintendo
//         })
//     })
// })

// Show route for console game products
app.get('/gamingConsoles/:id', (req, res) => {
    GamingConsole.findById(req.params.id, (err, foundGameConsole) => {
        res.render('Show', {
            gameconsole: foundGameConsole
        })
    })
 })


// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the page
    console.log(`I am listening on http://localhost:${port}/api/vi/Gamers-HQ/`) 
})
