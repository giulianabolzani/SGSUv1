'use strict';
module.exports = (sequelize, DataTypes) => {
	const Teams = sequelize.define('Teams', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    banco: DataTypes.STRING,
    agencia: DataTypes.STRING,
    conta: DataTypes.STRING,
    role: DataTypes.STRING
	}, {});
	Teams.associate = function(models){
    Teams.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })
	};
	return Teams;
};