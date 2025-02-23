const crudRespository = require("./crud-repository");
const { City } = require('../models');


class CityRepository extends crudRespository{
    constructor(){
        super(City);
    }

    //additional functionalities for airplanes specific
}

module.exports = CityRepository;