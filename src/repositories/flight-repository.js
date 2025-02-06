const crudRespository = require('./crud-repository');
const { Sequelize } = require('sequelize');
const { Flight, Airplane, airports } = require('../models');

class FlightRepository extends crudRespository {

    constructor(){
        super(Flight)
    }

    async getCustomFlights(filter, sort){
        
        
        const response = await this.model.findAll({
            where: filter,
            include: [
                {
                    model: Airplane,
                    required: true
                },
                {
                    model: airports,
                    as: "departureAirport",
                    required: true,
                    on: {
                        "$Flight.departureAirportId$": { [Sequelize.Op.eq]: Sequelize.col("departureAirport.code") }
                    }
                },
                {
                    model: airports,
                    as: "arrivalAirport",
                    required: true,
                    on: {
                        "$Flight.arrivalAirportId$": { [Sequelize.Op.eq]: Sequelize.col("arrivalAirport.code") }
                    }
                }
            ]
        });
        
        
        return response;
    }

}

module.exports = FlightRepository;