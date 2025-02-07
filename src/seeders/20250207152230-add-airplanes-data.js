'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: "Boeing 737-800",
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 747-8",
        capacity: 467,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 777-300ER",
        capacity: 396,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing 787-9 Dreamliner",
        capacity: 296,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A320neo",
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A321XLR",
        capacity: 244,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A330-900neo",
        capacity: 310,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Airbus A350-1000",
        capacity: 410,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Embraer E195-E2",
        capacity: 146,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "ATR 72-600",
        capacity: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
