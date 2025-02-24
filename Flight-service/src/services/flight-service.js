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
    let customSortObject = {};
    const EndTime = " 23:59:59";

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
            [Op.between]: [(minPrice) ? minPrice : 0, (maxPrice) ? maxPrice : 20000]
        }
    }


    if(query.travellers){
        [adult, children, infants] = query.travellers.split("-");
        const totalTravellers = Number(adult) + Number(children) + Number(infants);
        customFLightObject.totalSeats = {
            [Op.gte]: totalTravellers
        }
    }

    if(query.time){
        customFLightObject.departureTime = {
            [Op.gte]: [query.trips, query.trips + EndTime] // 120325 + "00:00:00" to 120325 + "23:59:59"
        }
    }

    if(query.sort){
        const params = query.sort.split(",");
        const sortFilter = params.map((query) => query.split("_"));
        customSortObject = sortFilter;
    }

    try {
        const flights = await flightRepository.getCustomFlights(customFLightObject, customSortObject);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot fetch Flights', StatusCodes.BAD_REQUEST);
    }

}


const getFlightsByPk = async (data) => {
    try {
        const specificFlight = await flightRepository.getByPK(data);
        // console.log(`specifix airplane ${specificAirport}`);
        return specificFlight;
    } catch (error) {

        // console.log(`Status code is ${error.statusCode}`);
        console.log(`error is ${error}`);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new Error('Something went wrong', StatusCodes.BAD_REQUEST);

    }
}


const updateFLightSeats = async (data) => {

    try {

        const updateSeat = await flightRepository.updateSeats(data);
        return updateSeat;

    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong', StatusCodes.BAD_REQUEST);
    }

}

module.exports = {
    createFlight,
    getAllFlights,
    getFlightsByPk,
    updateFLightSeats
}