'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Flights', [
    {
      flightNumber: "AI101",
      airplaneId: 1,
      departureAirportId: "BOM",
      arrivalAirportId: "DEL",
      departureTime: new Date("2025-03-15T08:30:00"),
      arrivalTime: new Date("2025-03-15T10:45:00"),
      price: 7500,
      boardingGate: "A12",
      totalSeats: 189,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "6E202",
      airplaneId: 2,
      departureAirportId: "DEL",
      arrivalAirportId: "BLR",
      departureTime: new Date("2025-03-16T14:00:00"),
      arrivalTime: new Date("2025-03-16T17:30:00"),
      price: 8800,
      boardingGate: "B5",
      totalSeats: 220,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "UK303",
      airplaneId: 3,
      departureAirportId: "MAA",
      arrivalAirportId: "HYD",
      departureTime: new Date("2025-03-17T10:00:00"),
      arrivalTime: new Date("2025-03-17T11:30:00"),
      price: 6200,
      boardingGate: "C7",
      totalSeats: 180,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "SG404",
      airplaneId: 4,
      departureAirportId: "CCU",
      arrivalAirportId: "BOM",
      departureTime: new Date("2025-03-18T18:45:00"),
      arrivalTime: new Date("2025-03-18T21:15:00"),
      price: 7200,
      boardingGate: "D10",
      totalSeats: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "AI505",
      airplaneId: 5,
      departureAirportId: "HYD",
      arrivalAirportId: "BLR",
      departureTime: new Date("2025-03-19T06:15:00"),
      arrivalTime: new Date("2025-03-19T07:30:00"),
      price: 4800,
      boardingGate: "E3",
      totalSeats: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "6E606",
      airplaneId: 6,
      departureAirportId: "BLR",
      arrivalAirportId: "MAA",
      departureTime: new Date("2025-03-20T13:45:00"),
      arrivalTime: new Date("2025-03-20T15:00:00"),
      price: 5100,
      boardingGate: "F9",
      totalSeats: 190,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "UK707",
      airplaneId: 7,
      departureAirportId: "DEL",
      arrivalAirportId: "CCU",
      departureTime: new Date("2025-03-21T09:30:00"),
      arrivalTime: new Date("2025-03-21T12:15:00"),
      price: 6700,
      boardingGate: "G4",
      totalSeats: 175,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: "SG808",
      airplaneId: 8,
      departureAirportId: "BOM",
      arrivalAirportId: "MAA",
      departureTime: new Date("2025-03-22T17:00:00"),
      arrivalTime: new Date("2025-03-22T19:15:00"),
      price: 7400,
      boardingGate: "H2",
      totalSeats: 185,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
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
