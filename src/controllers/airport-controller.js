const { AirportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


const createAirport = async (req, res) => {
    try {
        
        const { name, code, address, cityId } = req.body;
        const airport = await AirportService.createAirport( { name, code, address, cityId } );
        
        SuccessResponse.data = {name, code, address, cityId};
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {

        // console.error(error);
        console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}

const getAllAirport = async (req, res) => {

    try{

        const airports = await AirportService.getAirports();

        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){

        console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }

}

const getSpecificAirport = async (req, res) => {
    try {

        const id = req.params.id;
        const airport = await AirportService.getAirportsByPk(id);
        
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {

        // console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}

const deleteAirport = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteThisAirport = await AirportService.deleteAirport(id);
        SuccessResponse.data = deleteThisAirport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const updateAirport = async (req, res) => {

    try {

        const id = req.params.id;
        const data = req.body;
        const response = await AirportService.updatesAirport(id, data);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }

}

module.exports = {
    createAirport,
    getAllAirport,
    getSpecificAirport,
    deleteAirport,
    updateAirport
};