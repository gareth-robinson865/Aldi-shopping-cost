const Shopping = require('../models/shopping');

const shopping_index = (req, res) => {
    Shopping.find().sort({ aisle: -1 })
        .then((result) => {
            res.render('index', { title: 'home', shopping: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const shopping_create_post = (req, res) => {
    console.log('hello');
    
    
    //console.log(req.body)
    //console.log('creating something');
    //const item = new Shopping(req.body)
    //item.save()
    //    .then((result)) 
    //    .catch((err) => {
    //        console.log(err)
    //    })
}

module.exports = {
    shopping_create_post,
    shopping_index
}
