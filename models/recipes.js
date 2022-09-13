const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    ingredients: {
        type: [string],
        required: true
    }
}, { timestamps: true });