'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('airports', {
      fields: ['cityId'],
      type: 'foreign key',
      name: 'city-airport-fk',
      references:{
        table: 'Cities',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('airports', 'city-airport-fk');
  }
};
