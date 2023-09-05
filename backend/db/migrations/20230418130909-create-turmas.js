'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      turno: {
        type: Sequelize.STRING
      },
      dias_semana: {
        type: Sequelize.STRING
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id'
        }
      },
      students_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
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
    await queryInterface.dropTable('Turmas');
  }
};