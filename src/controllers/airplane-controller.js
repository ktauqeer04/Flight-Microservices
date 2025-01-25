const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

console.log('inside airplane-controller');

const createAirplane = async (req, res) => {
    try {
        
        const { modelNumber, capacity } = req.body;
        const airplane = await AirplaneService.createAirplane( { modelNumber, capacity } );
        
        SuccessResponse.data = {modelNumber, capacity};
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {

        console.error(error);

        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

    }
}

module.exports = {
    createAirplane
};