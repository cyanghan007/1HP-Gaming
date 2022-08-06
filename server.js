const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003



// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the site
    console.log(`I am listening on http://localhost:${port}`) 
})