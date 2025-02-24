const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

const validateRequest = (req, res, next) => {
    if(!req.body.flightNumber){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('flightNumber is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.airplaneId){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('airplaneId is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.departureAirportId){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('departureAirportId is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.arrivalAirportId){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('arrivalAirportId is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.arrivalTime){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('arrivalTime is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.departureTime){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('departureTime is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.price){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('price is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }

    if(!req.body.totalSeats){

        ErrorResponse.message = "Something went wrong while creating flight";
        ErrorResponse.error = new AppError('total Seat is required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);

    }
    
    next();
}


const validateInputs = (req, res, next) => {

    if(!req.body.seats){
        ErrorResponse.message = "Something went wrong while updating flight";
        ErrorResponse.error = new AppError('Seats are required', StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();

}

module.exports = {
    validateRequest,
    validateInputs
}