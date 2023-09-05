'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        nome: 'Joel Amavel',
        telefone: '553199998888',
        data_nascimento: '2023-01-11',
        email: 'joel@joel.com',
        endereco: 'Rua Um, 02 - Bairro Tres, Belo Horizonte',
        nome_responsavel: 'Não possui',
        telefone_responsavel: 'Não possui',
        materials_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joana dArc',
        telefone: '5531977776666',
        data_nascimento: '2023-01-11',
        email: 'joana@joana.com',
        endereco: 'Rua Dois, 03 - Bairro Quatro, Belo Horizonte',
        nome_responsavel: 'Aparecida dArc',
        telefone_responsavel: '5531977776666',
        materials_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Antonio Ribeiro',
        telefone: '5531998987575',
        data_nascimento: '2023-01-11',
        email: 'antonio@antonio.com',
        endereco: 'Rua Tres, 04 - Bairro Cinco, Belo Horizonte',
        nome_responsavel: 'João Ribeiro',
        telefone_responsavel: '5531998987575',
        materials_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
