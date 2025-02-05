const crudRespository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends crudRespository {
    constructor(){
        super(Flight)
    }

    async getCustomFlights(filter, sort){

        const response = await this.model.findAll({
            where: filter,
            order: [sort]
        });
        
        return response;
    }

    //additional functionalities for airplanes specific
}

module.exports = FlightRepository;