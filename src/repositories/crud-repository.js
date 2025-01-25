const { logger } = require('../config');

class crudRespository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            logger.error('Something went wrong in the repo : Create');
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            })
        } catch (error) {
            logger.error('Something went wrong in the repo : destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error('Something went wrong in the repo : get');
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data, {
                where:{
                    id: id
                }
            })
        } catch (error) {
            logger.error('Something went wrong in the repo : update');
            throw error;
        }
    }

}

module.exports = {
    crudRespository
}