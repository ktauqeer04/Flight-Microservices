const express = require('express');
const { airportController } = require('../../controllers');
const { ValidateAirport } = require('../../middlewares');
const router = express.Router();


//inside airport route
router.post('/', ValidateAirport.validateRequest, airportController.createAirport);
router.get('/', airportController.getAllAirport);
router.get('/:id', airportController.getSpecificAirport);
router.delete('/:id', airportController.deleteAirport);
router.put('/:id', airportController.updateAirport);


module.exports = router;