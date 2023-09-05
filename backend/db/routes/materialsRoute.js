const { Router } = require('express')
const MaterialsController = require('../controllers/MaterialsController')

const router = Router()
router
 .post('/create', MaterialsController.criarMaterial)
 .get('/all', MaterialsController.buscarTodosMateriais)
 .get('/:id', MaterialsController.materialPorId)
 .patch('/edit/:id', MaterialsController.atualizarMaterial)
 .delete('/:id', MaterialsController.deletaMaterial)
module.exports = router