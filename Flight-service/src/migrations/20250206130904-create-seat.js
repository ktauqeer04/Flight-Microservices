'use strict';
/** @type {import('sequelize-cli').Migration} */
const { enums } = require('../utils/common');
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = enums.SEAT_TYPES;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seatType: {
        type: Sequelize.ENUM(BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS),
        defaultValue: ECONOMY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};