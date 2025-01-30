const crudRespository = require('./crud-repository');
const { airports } = require('../models');


class AirportRepository extends crudRespository {
    constructor(){
        super(airports)
    }

    //additional functionalities for airplanes specific
}

module.exports = AirportRepository;