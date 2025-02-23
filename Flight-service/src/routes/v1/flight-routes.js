const express = require('express');
const { flightController } = require('../../controllers');
const { ValidateFlight } = require('../../middlewares');
// const { ValidateAirplane } = require('../../middlewares');
const router = express.Router();


//inside city route
router.post('/', ValidateFlight.validateRequest, flightController.createFlight);
router.get('/', flightController.findFlights);
router.get('/:id', flightController.getSpecificFlight);


module.exports = router;