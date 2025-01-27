const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


const createAirplane = async (req, res) => {
    try {
        
        const { modelNumber, capacity } = req.body;
        const airplane = await AirplaneService.createAirplane( { modelNumber, capacity } );
        
        SuccessResponse.data = {modelNumber, capacity};
        return res.status(StatusCodes.CREATED).json(SuccessResponse);

    } catch (error) {

        // console.error(error);
        console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}

const getAllAirplanes = async (req, res) => {

    try{

        const airplanes = await AirplaneService.getAirplanes();

        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){

        console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }

}

const getSpecificAirplane = async (req, res) => {
    try {

        const id = req.params.id;
        const airplane = await AirplaneService.getAirplanesByPK(id);

        console.log(airplane);
        
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {

        // console.log(`error is: ${error.statusCode}`);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}

const deleteAirplane = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteThisAirplane = await AirplaneService.deleteAirplane(id);
        SuccessResponse.data = deleteThisAirplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const updateAiplane = async (req, res) => {

    try {

        const id = req.params.id;
        const data = req.body;
        const response = await AirplaneService.updatesAirplane(id, data);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }

}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getSpecificAirplane,
    deleteAirplane,
    updateAiplane
};