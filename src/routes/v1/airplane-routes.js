const express = require('express');
const { airplaneController } = require('../../controllers');
const { ValidateAirplane } = require('../../middlewares');
const router = express.Router();

// /api/v1/airplanes
console.log('inside airplane route');

router.post('/', ValidateAirplane.validateRequest ,airplaneController.createAirplane);

module.exports = router
