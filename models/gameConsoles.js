// calling in mongoose databse with require
const mongoose = require('mongoose')

// format for pokemon data
const gameConsolesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
})

const GameConsoles = mongoose.model('GamingConsoles', gameConsolesSchema)

// exporting out pokemon.js file into server.js
module.exports = GameConsoles
