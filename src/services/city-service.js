const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository = new CityRepository();


const createCity = async (name) => {

    try {
        
        const createThisCity = await cityRepository.create(name);
        return createThisCity;

    } catch (error) {
        if(error.name == 'SequelizeUniqueConstraintError'){
            throw new AppError('City already Exists', StatusCodes.BAD_REQUEST);
        }
        throw new AppError('something went wrong in service layer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

const removeCity = async (id) => {
    try {        
        const removeThisCity = await cityRepository.destroy(id);
        return removeThisCity;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The City you requested doesnt exists', StatusCodes.NOT_FOUND);
        }
        throw new AppError('something went wrong in service layer', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createCity,
    removeCity
}