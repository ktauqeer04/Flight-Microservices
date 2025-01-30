const crudRespository = require('./crud-repository');
const { Flight } = require('../models');


class FlightRepository extends crudRespository {
    constructor(){
        super(Flight)
    }

    //additional functionalities for airplanes specific
}

module.exports = FlightRepository;