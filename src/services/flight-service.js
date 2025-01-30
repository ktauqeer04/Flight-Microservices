const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

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

module.exports = {
    createFlight
}