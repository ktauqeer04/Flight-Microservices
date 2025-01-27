const express = require('express');
const { cityController } = require('../../controllers');
const { ValidateCity } = require('../../middlewares');
// const { ValidateAirplane } = require('../../middlewares');
const router = express.Router();


//inside city route
router.post('/', ValidateCity.validateRequest, cityController.CreateCity);
router.delete('/:id', cityController.RemoveCity);


module.exports = router;