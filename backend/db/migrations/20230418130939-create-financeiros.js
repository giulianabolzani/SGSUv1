'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financeiros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mes_referencia: {
        type: Sequelize.DATEONLY
      },
      mensalidade_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Mensalidades',
          key: 'id'
        }
      },
      materials_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financeiros');
  }
};