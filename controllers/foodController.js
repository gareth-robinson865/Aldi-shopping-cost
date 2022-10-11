const Shopping = require('../models/shopping');

const food_index = (req, res) => {
    Shopping.find().sort({ aisle: -1 })
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
            res.render('details', { food: result, title: 'Food details' });
        })
        .catch((err) => {
            console.log(err)
        });
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
    console.log('deletion pending')
    const id = req.params.id;
    Food.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/shopping' })
        })
        .catch(error => {
            console.log(error);
        });
}//testing to be put back into routes file

module.exports = {
    food_index,
    food_details,
    food_create_post,
    food_delete
}
