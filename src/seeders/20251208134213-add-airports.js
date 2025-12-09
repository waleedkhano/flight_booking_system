"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Islamabad International Airport",
          address: "south-west of Islamabad, Pakistan",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benazir Bhutto International Airport",
          address: "Chaklala area",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thana National Airport",
          address: "Main Bypass, Thana",
          cityId: 4,
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
