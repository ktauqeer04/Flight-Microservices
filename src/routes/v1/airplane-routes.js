const express = require('express');
const { airplaneController } = require('../../controllers');
const { ValidateAirplane } = require('../../middlewares');
const router = express.Router();

// /api/v1/airplanes
router.post('/', ValidateAirplane.validateRequest ,airplaneController.createAirplane);
router.get('/', airplaneController.getAllAirplanes);
router.get('/:id', airplaneController.getSpecificAirplane);
router.delete('/:id', airplaneController.deleteAirplane);
router.put('/:id', airplaneController.updateAiplane);

module.exports = router
