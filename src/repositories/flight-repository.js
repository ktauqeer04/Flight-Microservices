const crudRespository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends crudRespository {
    constructor(){
        super(Flight)
    }

    async getCustomFlights(filter){

        const response = await this.model.findAll({
            where: filter,
        });
        
        return response;
    }

    //additional functionalities for airplanes specific
}

module.exports = FlightRepository;