const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

//!Food routes
router.get('/', foodController.food_index);

router.post('/', foodController.food_create_post);

//!router.get('/:id', foodController.food_details); removed and put back into the main server

router.delete('/:id', foodController.food_delete);

module.exports = router;