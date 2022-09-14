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

//const recipeSchema = new Schema({
//    name: {
//        type: string,
//        required: true
//    },
//    ingredients: {
//        type: [string],
//        required: true
//    }
//}, { timestamps: true });

const Food = mongoose.model('food', foodSchema);
//const Recipe = mongoose.model('recipe', recipeSchema);
//module.exports = Recipe;
module.exports = Food;