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
        const page = Number(req.query.page) <= 0 || !Number(req.query.page) ? 1 : Number(req.query.page);

        const flight = await FlightService.getAllFlights(query, page);

        SuccessResponse.data = flight;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {
        console.log(error);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


const getSpecificFlight = async (req, res) => {

    try {

        const id = req.params.id;
        
        const flight = await FlightService.getFlightsByPk(id);
        
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {

        // console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }

}


const updateFlightSeats = async (req, res) => {

    try {

        const { seats, decrease } = req.body;
        const { id } = req.params;

        const flightId = parseInt(id);

        console.log({ flightId, seats, decrease });
        const updateSeat = await FlightService.updateFLightSeats({ flightId, seats, decrease });
        
        SuccessResponse.data = updateSeat;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }

}


module.exports = {
    createFlight,
    findFlights,
    getSpecificFlight,
    updateFlightSeats
};