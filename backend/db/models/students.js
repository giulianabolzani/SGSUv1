'use strict';
module.exports = (sequelize, DataTypes) => {
	const Students = sequelize.define('Students', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    nome_responsavel: DataTypes.STRING,
    telefone_responsavel: DataTypes.STRING,
	email: DataTypes.STRING,
	endereco: DataTypes.STRING,
	valor_mensalidade: DataTypes.NUMBER
	}, {});
	Students.associate = function(models){
		Students.hasMany(models.Turmas, {
			foreignKey: 'students_id'
		});
		Students.hasMany(models.Mensalidades, {
			foreignKey: 'students_id'
		});
   		Students.belongsTo(models.Materials, {
			foreignKey: 'materials_id'
		});
   		Students.belongsTo(models.Mensalidades, {
			foreignKey: 'mensalidade_id'
		});
	};
	return Students;
};