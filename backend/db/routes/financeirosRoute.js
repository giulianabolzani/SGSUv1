const { Router } = require('express');
const FinanceirosController = require('../controllers/FinanceirosController');

const router = Router()
router
    .get('/students/report', FinanceirosController.buscarStudents) //Alunos e mensalidade
    .get('/students/materials', FinanceirosController.materialsAndStudents) //alunos e materiais
    .get('/students/quantidade/materials', FinanceirosController.qtdMaterialsAndStudents)//Total de material vendidos
    .get('/materials/valortotal', FinanceirosController.somarMaterialStudents) //valor total dos materiais vendidos
    .get('/students/totalalunos', FinanceirosController.totalAlunos) //Quantidade de alunos
    .get('/mensalidades/totais', FinanceirosController.somarMensalidades) //Valor total das mensalidades
    .get('/materials/totais', FinanceirosController.somarMaterial) //valor total de todos os materiais cadastrados (não tem vinculo com o aluno)
    
module.exports = router;