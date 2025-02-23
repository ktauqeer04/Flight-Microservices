const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

const validateRequest = async (req, res, next) => {
    if(!req.body.name){

        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError(['Name is required', StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.code){

        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError(['code is required', StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.cityId){

        ErrorResponse.message = "Something went wrong while creating Airport";
        ErrorResponse.error = new AppError(['CityId is required', StatusCodes.BAD_REQUEST])
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    
    next();
}

module.exports = {
    validateRequest
}