const express = require('express');
const shoppingController = require('../controllers/shoppingController');

const shoppingRouter = express.Router();

shoppingRouter.post('/', function(req, res){
    shoppingController.shopping_create_post
});

module.exports = shoppingRouter;