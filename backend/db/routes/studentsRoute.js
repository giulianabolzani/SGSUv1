const { Router } = require('express')
const StudentsController = require('../controllers/StudentsController')

const router = Router()
router
 .post('/create', StudentsController.criarStudents)
 .get('/all', StudentsController.buscarTodosStudents)
 .get('/:id', StudentsController.studentsPorId)
 .patch('/edit/:id', StudentsController.atualizarStudents)
 .delete('/:id', StudentsController.deletaStudents)
module.exports = router

