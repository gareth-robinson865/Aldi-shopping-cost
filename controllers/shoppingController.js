const Shopping = require('../models/shopping');

const shopping_create_post = (req, res) => {
    console.log(req.body)
    const item = new Shopping(req.body)
    item.save()
        .then((result)) 
        .catch((err) => {
            console.log(err)
        })
}