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

const food_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Food.findById(id)
        .then(result => {
            res.render('details', { food: result, title: 'Food details' })
        })
        .catch((err) => {
            console.log(err)
        })
}

const food_create_post = (req, res) => {
    console.log(req.body)
    const food = new Food(req.body)
    food.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

const food_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = {
    food_index,
    food_details,
    food_create_post,
    food_delete
}
