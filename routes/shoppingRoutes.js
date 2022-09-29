const express = require('express');
const shoppingController = require('../controllers/shoppingController');

const shoppingRouter = express.Router();

router.post('/', shoppingController.shopping_create_post);

module.exports = shoppingRouter;