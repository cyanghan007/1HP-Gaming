const mongoose = require('mongoose')

// format for pokemon data
const nintendoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
})

const Nintendo = mongoose.model('nintendo', nintendoSchema)

// exporting out pokemon.js file into server.js
module.exports = Nintendo
