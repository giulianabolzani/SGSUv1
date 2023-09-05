'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Financeiros', [
        {
          mes: '2023-01-01',
          students_id: 1,
          materials_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mes: '2023-01-01',
          students_id: 1,
          materials_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mes: '2023-01-01',
          students_id: 2,
          materials_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          mes: '2023-01-01',
          students_id: 3,
          materials_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Financeiros', null, {});
  }
};