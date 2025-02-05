const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

// data -> 
const createFlight = async (data) => {
    try {
        
        console.log(data);
        const flight = await flightRepository.create(data);
        return flight;

    } catch (error) {
        // console.error(error);
        console.error(error);
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            console.error(`explanation array : ${explanation}`);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Something went wrong', StatusCodes.BAD_REQUEST);
    }
}

const getAllFlights = async (query) => {

    let customFLightObject = {};

    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        if(departureAirportId == arrivalAirportId){
            throw new AppError('Departure Airport Id and Arrival Airport ID cannot be same', StatusCodes.BAD_REQUEST);
        }
        customFLightObject.departureAirportId = departureAirportId;
        customFLightObject.arrivalAirportId = arrivalAirportId;
    }   

    if(query.price){
        [minPrice, maxPrice] = query.price.split("-");
        customFLightObject.price = {
            [Op.between]: [minPrice, maxPrice]
        }
    }
    console.log(customFLightObject);

    try {
        const flights = await flightRepository.getCustomFlights(customFLightObject);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot fetch Flights', StatusCodes.BAD_REQUEST);
    }

}

module.exports = {
    createFlight,
    getAllFlights
}