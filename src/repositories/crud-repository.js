const { logger } = require('../config');

class crudRespository{    

    constructor(model){
        this.model = model;
    }

    async create(data){

        const response = await this.model.create(data);
        return response;
        
    }

    async destroy(data){
        try {
            console.log('inside crud destroy repository');
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            })
            return response;
        } catch (error) {
            logger.error('Something went wrong in the repo : destroy');
            throw error;
        }
    }

    async get(){
        try {
            console.log('inside crud get repository');
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error('Something went wrong in the repo : get');
            throw error;
        }
    }

    async update(id, data){
        try {

            console.log('inside crud update repository');
            
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

module.exports = crudRespository;