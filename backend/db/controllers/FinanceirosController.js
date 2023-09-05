const { QueryTypes } = require('sequelize')
const database = require('../models')

class FinanceirosController {

    //Alunos e mensalidade
    static async buscarStudents(req, res){
        try{
            const nameAndValue = await database.sequelize
                .query('select a.nome, b.valor_mensalidade from students a join mensalidades b on a.id = b.students_id;', 
                {type: QueryTypes.SELECT})
            return res.status(200).json(nameAndValue)
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    //Alunos e materiais
    static async materialsAndStudents(req, res){
       try{
          const total = await database.sequelize
          .query('select b.nome, b.valor, a.nome as "nome_st" from students a join materials b on a.materials_id = b.id;', 
          {type: QueryTypes.SELECT})
          const count = total.length;
          return res.status(200).json(total)
       }
       catch(error){
         res.status(500).json(error.message)
       }
    }

    //Quantidade de materiais vendidos
    static async qtdMaterialsAndStudents(req, res){
        try{
           const total = await database.sequelize
           .query('select b.nome, b.valor, a.nome as "nome_st" from students a join materials b on a.materials_id = b.id;', 
           {type: QueryTypes.SELECT})
           const count = total.length;
           return res.status(200).json(count)
        }
        catch(error){
          res.status(500).json(error.message)
        }
     }

    //Quantidade de alunos
    static async totalAlunos(req, res){
        try{
            const totalMensalidade = await database.Students.findAll()
            const count = totalMensalidade.length;
            return res.status(200).json(count)
        }
        catch(error){
            res.status(500).json(error.message) 
        }
    }

    //Valor total das mensalidades
    static async somarMensalidades(req, res){
        try{
            const totalMensalidade = await database.Students.findAll()
            return res.status(200).json(totalMensalidade.map((mensalidades) => parseInt(mensalidades.valor_mensalidade))
            .reduce((valorAnt, novoValor) => (valorAnt + novoValor)))
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //valor total dos materiais vendidos
    static async somarMaterialStudents(req, res){
        try{
            const total = await database.sequelize
            .query('select students.nome, materials.nome, materials.valor from students join materials on materials_id = materials.id;', 
            {type: QueryTypes.SELECT})
            return res.status(200).json(total.map((materials) => parseInt(materials.valor))
            .reduce((valorAnt, novoValor) => (valorAnt + novoValor)))
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //valor total de todos os materiais cadastrados (não tem vinculo com o aluno)
    static async somarMaterial(req, res){
        try{
            const totalMaterial = await database.Materials.findAll()
            return res.status(200).json(totalMaterial.map((material) => parseInt(material.valor))
            .reduce((valorAnt, novoValor) => (valorAnt + novoValor)))
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = FinanceirosController;