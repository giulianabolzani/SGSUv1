'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Turmas', [
        {
          nome: 'Classe A',
          turno: 'Manhã',
          students_id: 1,
          docente_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Classe B',
          turno: 'Manhã',
          students_id: 2,
          docente_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Classe C',
          turno: 'Tarde',
          students_id: 2,
          docente_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Classe D',
          turno: 'Noite',
          students_id: 3,
          docente_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
