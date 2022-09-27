const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    aisle: {
        type: Number
    }
}, { timestamps: true });

const Shopping  = mongoose.model('food', shoppingSchema);
module.exports = Shopping;