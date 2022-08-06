// Requiring express
const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// Importing modules folder
const Product = require('./models/consoles')
const consoleData = require('./utilities/consolesData')
// Setting up port
const port = process.env.PORT || 3003


//setting up our views
app.set('view engine', 'jsx')
//Initialzing my engine
app.engine('jsx', require('express-react-views').createEngine()) 

// Home page 
app.get('/', (req, res) => {
    res.send('Welcome to 1HP-Gaming')
})


// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the site
    console.log(`I am listening on http://localhost:${port}`) 
})