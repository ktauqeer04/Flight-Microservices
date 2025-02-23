const express = require('express');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');
const router = express.Router();

// Call the `info` function from `infoController`
// router.get('/temp', infoController);

console.log('inside v1 route');

router.use('/cities', cityRoutes);
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);

module.exports = router;
