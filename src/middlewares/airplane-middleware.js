const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

const validateRequest = async (req, res, next) => {
    if(!req.body.modelNumber){

        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = "Model Number required";

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    next();
}

module.exports = {
    validateRequest
}