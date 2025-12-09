"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 777-200LR",
          capacity: 317,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777-300ER",
          capacity: 393,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A320-200",
          capacity: 180,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "ATR 42-500",
          capacity: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "ATR 72-500",
          capacity: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A321",
          capacity: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A320",
          capacity: 170,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 737-800",
          capacity: 189,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
