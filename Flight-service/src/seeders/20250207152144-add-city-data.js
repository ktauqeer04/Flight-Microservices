'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        name: "Mumbai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Navi Mumbai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Delhi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chennai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bengaluru",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kolkata",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hyderabad",
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
