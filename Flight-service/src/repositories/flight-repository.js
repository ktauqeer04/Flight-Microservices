const crudRespository = require('./crud-repository');
const { Sequelize } = require('sequelize');
const { Flight, Airplane, airports } = require('../models');

class FlightRepository extends crudRespository {

    constructor(){
        super(Flight)
    }

    async getCustomFlights(filter, sort){
        
        
        const response = await Flight.findAll({
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


    async updateSeats({flightId, seats, decrease}){

        console.log(flightId);
        const flights = await Flight.findByPk(flightId);

        if(decrease){
            await flights.decrement('totalSeats', {by: seats});
        }else{
            await flights.increment('totalSeats', {by: seats});
        }

        return flights;

    }

}

module.exports = FlightRepository;