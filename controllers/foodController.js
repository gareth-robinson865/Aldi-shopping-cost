const Food = require('../models/food');

const food_index = (req, res) => {
    Food.find().sort({ aisle: -1 })
        .then((result) => {
            res.render('index', { title: 'home', foods: result })
        })
        .catch((err) => {
            console.log(err)
        })
}