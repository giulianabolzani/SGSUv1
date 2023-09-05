'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Students', 'email', {
          type: Sequelize.DataTypes.STRING,
          after: 'telefone_responsavel',
        }, { transaction: t }),
        queryInterface.addColumn('Students', 'endereco', {
          type: Sequelize.DataTypes.STRING,
          after: 'email'
        }, { transaction: t })
      ]);
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'email', { transaction: t }),
        queryInterface.removeColumn('Students', 'endereco', { transaction: t })
      ]);
    });
  }
};