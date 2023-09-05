'use strict';
module.exports = (sequelize, DataTypes) => {
	const Mensalidades = sequelize.define('Mensalidades', {
    valor_mensalidade: DataTypes.STRING,
    status: DataTypes.STRING
	}, {});
	Mensalidades.associate = function(models){
		Mensalidades.hasMany(models.Students, {
			foreignKey: 'mensalidade_id'
		});
   		 Mensalidades.hasMany(models.Financeiros, {
			foreignKey: 'mensalidade_id'
		});
		Mensalidades.belongsTo(models.Students, {
			foreignKey: 'students_id'
		});
	};
	return Mensalidades;
};