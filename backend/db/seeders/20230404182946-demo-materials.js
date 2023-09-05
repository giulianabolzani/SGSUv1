'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Materials', [
        {
          nome: 'Livro: Inglês Básico 1',
          tipo: 'Didático',
          valor: '150.00',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Livro: Inglês Intermediário 1',
          tipo: 'Didático',
          valor: '200.00',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Materials', null, {});
  }
};
