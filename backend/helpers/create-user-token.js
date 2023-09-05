const jwt = require("jsonwebtoken")

const createUserToken = async(user, req, res) => {
	
	//create token
	const token = jwt.sign({
		nome: user.nome,
		id: user.id,
	}, 'nossosecret')
	
	//return token
	res.status(200).json({
		message: 'Você está autenticado',
        auth: true,
		token: token,
        userId: user.id
	})
	
}

module.exports = createUserToken;