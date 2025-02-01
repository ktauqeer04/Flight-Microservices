const crudRespository = require('./crud-repository');
const { Flight } = require('../models');
const { Op } = require('sequelize');

class FlightRepository extends crudRespository {
    constructor(){
        super(Flight)
    }

    async getCustomFlights(filter){

        const response = await this.model.findAll({
            where: filter,
        });

        console.log(response);

        for(let i = 0; i < response.length; i++){
            console.log(response[i]);
        }
        
        return response;
    }

    //additional functionalities for airplanes specific
}

module.exports = FlightRepository;