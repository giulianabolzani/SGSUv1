'use strict';
module.exports = (sequelize, DataTypes) => {
	const Turmas = sequelize.define('Turmas', {
    nome: DataTypes.STRING,
    turno: DataTypes.STRING,
    dias_semana: DataTypes.STRING
	}, {});
	Turmas.associate = function(models){
    Turmas.belongsTo(models.Teams, {
			foreignKey: 'docente_id'
		});
    Turmas.belongsTo(models.Students, {
			foreignKey: 'students_id'
		})
	};
	return Turmas;
};