const crudRespository = require('./crud-repository');
const { Airplane } = require('../models');


class AirplaneRepository extends crudRespository {
    constructor(){
        super(Airplane)
    }

    //additional functionalities for airplanes specific
}

module.exports = AirplaneRepository;