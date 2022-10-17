const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

//!Food routes
router.post('/', foodController.food_create_post);

router.get('/:name', foodController.food_find);

router.get('/:id', foodController.food_details);

router.delete('/:id', foodController.food_delete);

module.exports = router;