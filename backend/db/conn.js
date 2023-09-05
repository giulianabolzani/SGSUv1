const { Sequelize } = require('sequelize')
	
	const sequelize = new Sequelize('sgsudb', 'root', '123465Giu.', {
		host: 'localhost',
		dialect: 'mysql',
	})
	
	try {
		sequelize.authenticate()
		console.log('Conectamos ao MySQL')
	} catch (error) {
		console.log(`Não foi possível conectar: ${error}`)
	}
	
module.exports = sequelize