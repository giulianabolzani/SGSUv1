const database = require('../models')

class TeamsController {

    //criar equipe
    static async criarFuncionario(req, res){
        const novoFuncionario = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            banco: req.body.banco,
            agencia: req.body.agencia,
            conta: req.body.conta,
            role: req.body.role
        }

        if(!novoFuncionario.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novoFuncionario.telefone){
            res.status(422).json({ message: 'O telefone é obrigatório!'})
            return
        }
        if(!novoFuncionario.role){
            res.status(422).json({ message: 'A função é obrigatória!'})
            return
        }

        try{
            const novoFuncionarioCriado = await database.Teams.create(novoFuncionario)
            return res.status(200).json({message: `Funcionário cadastrado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Buscar todos os funcionários
    static async buscarTodosFuncionarios(req, res){
        try{
            const todosFuncionarios = await database.Teams.findAll()
            return res.status(200).json(todosFuncionarios)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Buscar funcionário pelo ID
    static async funcionarioPorId(req, res){
        const { id } = req.params

        try{
            const umFuncionario = await database.Teams.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umFuncionario)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Atualizar funcionario por ID
    static async atualizarFuncionario(req, res){
        const { id } = req.params
        const novasInfos = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            banco: req.body.banco,
            agencia: req.body.agencia,
            conta: req.body.conta,
            role: req.body.role
        }

        if(!novasInfos.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novasInfos.telefone){
            res.status(422).json({ message: 'O telefone é obrigatório!'})
            return
        }
        if(!novasInfos.role){
            res.status(422).json({ message: 'A função é obrigatória!'})
            return
        }

        try {
            await database.Teams.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const funcionarioAtualizado = await database.Teams.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Funcionário atualizado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar funcionario pelo ID
    static async deletaFuncionario(req, res){
        const { id } = req.params
        
        try{
            await database.Teams.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Funcionário deletado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TeamsController;