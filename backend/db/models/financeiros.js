'use strict';
module.exports = (sequelize, DataTypes) => {
	const Financeiros = sequelize.define('Financeiros', {
    mes_referencia: DataTypes.DATEONLY
	}, {});
	Financeiros.associate = function(models){
		Financeiros.belongsTo(models.Mensalidades, {
			foreignKey: 'mensalidade_id'
		});
    Financeiros.belongsTo(models.Materials, {
			foreignKey: 'materials_id'
		});
	};
	return Financeiros;
};