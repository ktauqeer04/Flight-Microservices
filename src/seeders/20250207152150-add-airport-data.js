'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Airports', [
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        code: "BOM",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Navi Mumbai International Airport",
        code: "NMIA",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indira Gandhi International Airport",
        code: "DEL",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chennai International Airport",
        code: "MAA",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        code: "BLR",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhas Chandra Bose International Airport",
        code: "CCU",
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajiv Gandhi International Airport",
        code: "HYD",
        cityId: 7,
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
