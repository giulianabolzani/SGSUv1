'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Students', 'valor_mensalidade', {
          type: Sequelize.DataTypes.STRING,
          after: 'endereco',
        }, { transaction: t }),
      ]);
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Students', 'valor_mensalidade', { transaction: t }),
      ]);
    });
  }
};