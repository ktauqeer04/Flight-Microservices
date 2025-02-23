'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('Flights', {
      fields: ['airplaneId'],
      type: 'foreign key',
      name:'flight-airplane-fk',
      references: {
        table: 'Airplanes',
        field: 'id',
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Flights', {
      fields: ['arrivalAirportId'],
      type: 'foreign key',
      name: 'flight-arr-airport-fk',
      references:{
        table: 'airports',
        field: 'code'
      },
      onDelete: 'cascade'
    })

    await queryInterface.addConstraint('Flights', {
      fields: ['departureAirportId'],
      type: 'foreign key',
      name: 'flight-dept-airport-fk',
      references:{
        table: 'airports',
        field: 'code'
      },
      onDelete: 'cascade'
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Flights', 'flight-airplane-fk');
    await queryInterface.removeConstraint('Flights', 'flight-arr-airport-fk');
    await queryInterface.removeConstraint('Flights', 'flight-dept-airport-fk');
  }
};
