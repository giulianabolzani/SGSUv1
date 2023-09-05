const { Router } = require('express')
const TeamsController = require('../controllers/TeamsController')

const router = Router()
router
 .post('/create', TeamsController.criarFuncionario)
 .get('/all', TeamsController.buscarTodosFuncionarios)
 .get('/:id', TeamsController.funcionarioPorId)
 .patch('/edit/:id', TeamsController.atualizarFuncionario)
 .delete('/:id', TeamsController.deletaFuncionario)
module.exports = router