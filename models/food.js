const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    aisle: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Food = mongoose.model('food', foodSchema);
module.exports = Food;