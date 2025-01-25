const express = require('express');
const airplaneRoutes = require('./airplane-routes');

const router = express.Router();

// Call the `info` function from `infoController`
// router.get('/temp', infoController);

console.log('inside v1 route');

router.use('/airplanes', airplaneRoutes);


module.exports = router;
