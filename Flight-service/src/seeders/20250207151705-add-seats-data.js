'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row: 1,
        col: "A",
        seatType: "first_class",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "B",
        seatType: "first_class",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "C",
        seatType: "business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 1,
        col: "D",
        seatType: "business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 2,
        row: 1,
        col: "F",
        seatType: "premium_economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 3,
        row: 2,
        col: "A",
        seatType: "premium_economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 3,
        row: 2,
        col: "B",
        seatType: "economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: 2,
        col: "C",
        seatType: "economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: 2,
        col: "D",
        seatType: "economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: 2,
        col: "E",
        seatType: "economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 4,
        row: 2,
        col: "F",
        seatType: "economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    );

  },

  async down (queryInterface, Sequelize) {
    
  }
};
