const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

const validateRequest = async (req, res, next) => {
    if(!req.body.modelNumber){

        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = new AppError(['Model Number required', StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    next();
}

module.exports = {
    validateRequest
}