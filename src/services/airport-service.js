const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

// data -> 
const createAirport = async (data) => {
    try {
        
        const airport = await airportRepository.create(data);
        return airport;

    } catch (error) {
        // console.error(error);
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


const getAirports = async() => {
    try {
        const airports = await airportRepository.get();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch airports', StatusCodes.BAD_REQUEST);
    }
}


// data -> 
const getAirportsByPk = async (data) => {
    try {
        const specificAirport = await airportRepository.getByPK(data);
        console.log(`specifix airplane ${specificAirport}`);
        return specificAirport;
    } catch (error) {

        // console.log(`Status code is ${error.statusCode}`);
        console.log(`error is ${error}`);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new Error('Something went wrong', StatusCodes.BAD_REQUEST);

    }
}


const deleteAirport = async (data) => {
    try {
        
        const airport = await airportRepository.destroy(data);
        return airport;

    } catch (error) {
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Something went wrong in Service layer', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

const updatesAirport = async (id, data) => {

    try {
        const updateThisAirport = await airportRepository.update(id, data);
        return updateThisAirport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new AppError('something went wrong in service layer', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports = {
    createAirport,
    getAirports,
    getAirportsByPk,
    deleteAirport,
    updatesAirport
}