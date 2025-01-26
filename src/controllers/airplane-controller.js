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

module.exports = {
    createAirplane
};