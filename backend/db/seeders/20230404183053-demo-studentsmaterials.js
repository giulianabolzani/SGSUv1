'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Studentsmaterials', [
        {
          id: 1,
          students_id: 1,
          materials_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          students_id: 1,
          materials_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          students_id: 2,
          materials_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Studentsmaterials', null, {});
  }
};
