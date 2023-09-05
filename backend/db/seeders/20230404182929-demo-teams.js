'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', [
      {
        nome: 'Gustavo Mioto',
        telefone: '5531977776666',
        email: 'gustavo@mioto.com',
        banco: 'Santander',
        agencia: '001',
        conta: '4455-6',
        role: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Miley Cyrus',
        telefone: '5531977773333',
        email: 'miley@cyrus.com',
        banco: 'Nubank',
        agencia: '0001',
        conta: '7878-9',
        role: 'Administrativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'João Pereira',
        telefone: '5531977772222',
        email: 'joao@pereira.com',
        banco: 'Bradesco',
        agencia: '0334',
        conta: '9191-3',
        role: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
