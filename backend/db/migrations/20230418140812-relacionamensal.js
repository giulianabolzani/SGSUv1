'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Mensalidades', 'students_id', {
            allowNull: false,
            type: Sequelize.INTEGER,
            after: 'status',
            references: {
              model: 'Students',
              key: 'id'
            }
        }, { transaction: t }),
      ]);
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Mensalidades', 'students_id', { transaction: t }),
      ]);
    });
  }
};