const { CityService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


const CreateCity = async (req, res) => {
    try {

        const city_name = req.body;
        const response = await CityService.createCity(city_name);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        // console.log(error);
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const RemoveCity = async (req, res) => {
    try {

        const id = req.params.id;
        const response = await CityService.removeCity(id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    CreateCity,
    RemoveCity
}