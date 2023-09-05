const database = require('../models')

class MaterialsController {

    //criar material
    static async criarMaterial(req, res){
        const novoMaterial = {
            nome: req.body.nome,
            tipo: req.body.tipo,
            valor: req.body.valor
        }

        if(!novoMaterial.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novoMaterial.tipo){
            res.status(422).json({ message: 'O tipo do material é obrigatório!'})
            return
        }
        if(!novoMaterial.valor){
            res.status(422).json({ message: 'O valor do material é obrigatório!'})
            return
        }

        try{
            const novoMaterialCriado = await database.Materials.create(novoMaterial)
            return res.status(200).json({message: `Material cadastrado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }

    }

    //buscar todos os materiais cadastrados
    static async buscarTodosMateriais(req, res){
        try{
            const todosMateriais = await database.Materials.findAll()
            return res.status(200).json(todosMateriais)
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    //buscar material por id
    static async materialPorId(req, res){
        const { id } = req.params

        try{
            const umMaterial = await database.Materials.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umMaterial)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //atualizar material por id
    static async atualizarMaterial(req, res){
        const { id } = req.params

        const novasInfos = {
            nome: req.body.nome,
            tipo: req.body.tipo,
            valor: req.body.valor
        }

        if(!novasInfos.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novasInfos.tipo){
            res.status(422).json({ message: 'O tipo do material é obrigatório!'})
            return
        }
        if(!novasInfos.valor){
            res.status(422).json({ message: 'O valor do material é obrigatório!'})
            return
        }
        try {
            await database.Materials.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const materialAtualizado = await database.Materials.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Material atualizado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar material por id
    static async deletaMaterial(req, res){
        const { id } = req.params
        
        try{
            await database.Materials.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Material deletado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MaterialsController;