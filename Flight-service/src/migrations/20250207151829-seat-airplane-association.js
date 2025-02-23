'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Seats', {
      fields: ['airplaneId'],
      type: 'foreign key',
      name:'seats-airplane-fk',
      references: {
        table: 'Airplanes',
        field: 'id',
      },
      onDelete: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Seats', 'seats-airplane-fk');
  }
};
