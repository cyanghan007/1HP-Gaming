// calling in mongoose databse with require
const mongoose = require('mongoose')

// format for game consoles product data
const gameConsolesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true},
    description: { type: String, required: true },
    stock: { type: String, required: true },
    price: { type: String, required: true },
})

const GameConsoles = mongoose.model('GameConsoles', gameConsolesSchema)

module.exports = GameConsoles
