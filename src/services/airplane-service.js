const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

// data -> req.body.modelNumber && req.body.capacity
const createAirplane = async (data) => {
    try {
        
        const airplane = await airplaneRepository.create(data);
        return airplane;

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


const getAirplanes = async() => {
    try {
        const airplanes = await airplaneRepository.get();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch airplanes', StatusCodes.BAD_REQUEST);
    }
}


// data -> req.params.id
const getAirplanesByPK = async (data) => {
    try {
        const specificAirplane = await airplaneRepository.getByPK(data);
        console.log(`specifix airplane ${specificAirplane}`);
        return specificAirplane;
    } catch (error) {

        // console.log(`Status code is ${error.statusCode}`);
        // console.log(`error is ${error}`);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new Error('Something went wrong', StatusCodes.BAD_REQUEST);

    }
}


const deleteAirplane = async (data) => {
    try {
        
        const airplane = await airplaneRepository.destroy(data);
        return airplane;

    } catch (error) {
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Something went wrong in Service layer', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

const updatesAirplane = async (id, data) => {

    try {
        const updateThisAirplane = await airplaneRepository.update(id, data);
        return updateThisAirplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you Requested does not Exists', StatusCodes.NOT_FOUND);
        }
        throw new AppError('something went wrong in service layer', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplanesByPK,
    deleteAirplane,
    updatesAirplane
}