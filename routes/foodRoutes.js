const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

//!Food routes
router.get('/', foodController.food_index);

router.post('/', foodController.food_create_post);

router.get('/details/:id', foodController.food_details);

router.delete('/:id', foodController.food_delete);

module.exports = router;