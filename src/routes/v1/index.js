const express = require('express');
const { infoController } = require('../../controllers/index');

const router = express.Router();

// Call the `info` function from `infoController`
router.get('/temp', infoController);

module.exports = router;
