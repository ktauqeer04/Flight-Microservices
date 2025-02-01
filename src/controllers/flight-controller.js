const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


const createFlight = async (req, res) => {
    try {
        
        const { flightNumber, 
                airplaneId, 
                departureAirportId, 
                arrivalAirportId, 
                arrivalTime, 
                departureTime, 
                price, 
                boardingGate, 
                totalSeats 
        } = req.body;

        const flight = await FlightService.createFlight( { 
            flightNumber, 
            airplaneId, 
            departureAirportId, 
            arrivalAirportId, 
            arrivalTime, 
            departureTime, 
            price, 
            boardingGate, 
            totalSeats 
         } );
        
        SuccessResponse.data = {
            flightNumber, 
            airplaneId, 
            departureAirportId, 
            arrivalAirportId, 
            arrivalTime, 
            departureTime, 
            price, 
            boardingGate, 
            totalSeats 
        };
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {

        // console.error(error);
        console.log(error);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}


const findFlights = async (req, res) => {
    try {

        const query = req.query;

        const flight = await FlightService.getAllFlights(query);

        SuccessResponse.data = flight;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {
        console.log(error);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    findFlights 
};