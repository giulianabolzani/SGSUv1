const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const VerifyToken = require('../../helpers/verify-token')

const router = Router()
router
 .post('/create', UsersController.criarUsuario)
 .get('/', UsersController.buscarTodosUsuarios)
 .get('/:id', UsersController.buscarUsuarioPorId)
 .get('/checkuser', VerifyToken, UsersController.verificarUsuario)
 .post('/login', UsersController.login)
module.exports = router