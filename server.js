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

// Seed route // comment out before deploying
app.get('/api/vi/gameconsoles/seed', async (req,res) => {
    await GameConsoles.deleteMany({})
    await GameConsoles.create(gameConsolesData)
    res.redirect('/api/vi/gameconsoles')
})

// Home page 
app.get('/api/vi/Gamers-HQ', (req, res) => {
   res.render('Home')
})

// Grabbing consoles to display products
app.get('/api/vi/gameconsoles', (req, res) => {
    GameConsoles.find({}, (error, allGameConsoles) => {
        res.render('Index', {
            gameconsoles: allGameConsoles
        })
    })
})

app.get('/api/vi/gameconsoles/new', (req, res) => {
    res.render('New')
})

app.post('/api/vi/gameconsoles', (req, res) => {
    // let name = req.body.name.split('')
    // name[0] = name[0].toUpperCase()
    // req.body.name = name.join('')

    GameConsoles.create(req.body, (err, createdGameConsole) => {
        res.redirect('/api/vi/gameconsoles')
    })
})

// Show route for console game products
app.get('/api/vi/gameconsoles/:id', (req, res) => {
    GameConsoles.findById(req.params.id, (err, foundGameConsole) => {
        // console.log(req.params.id)
        // console.log(foundGameConsole)
        res.render('Show', {
            gameconsole: foundGameConsole
        })
    })
 })

 app.get('/api/vi/gameconsoles/:id/edit', (req,res) => {
    GameConsoles.findById(req.params.id, (error, foundGameConsole) => {
        if(!error) {
            res.render('Edit', {
                gameconsole: foundGameConsole
            })
        } else {
            res.send({
                message: error.message
            })
        }
    })
})

// Update route
app.put('/api/vi/gameconsoles/:id', (req, res) => {
    GameConsoles.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, GameConsole) => {
        res.redirect(`/api/vi/gameconsoles/${req.params.id}`)
    })
})

//  Delete route
app.delete('/api/vi/gameconsoles/:id', (req, res) => {
    GameConsoles.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/api/vi/gameconsoles')
    })
})

// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the page
    console.log(`I am listening on http://localhost:${port}/api/vi/Gamers-HQ`) 
})
