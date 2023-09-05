const database = require('../models')

class StudentsController{

    //criar estudante
    static async criarStudents(req, res){
        const novoStudents = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
            email: req.body.email,
            endereco: req.body.endereco,
            nome_responsavel: req.body.nome_responsavel,
            telefone_responsavel: req.body.telefone_responsavel,
            materials_id: req.body.materials_id,
            valor_mensalidade: req.body.valor_mensalidade
        }

       

        console.log(novoStudents)

        if(!novoStudents.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novoStudents.telefone){
            res.status(422).json({ message: 'O telefone é obrigatório!'})
            return
        }

        try{
            const novoStudentsCriado = await database.Students.create(novoStudents)
            const { id, valor_mensalidade} = novoStudentsCriado;
        
            console.log(id, valor_mensalidade)

            const novaMensalidade = {
                valor_mensalidade: valor_mensalidade,
                status: "Pendente",
                students_id: id
            }

            const createMensalidade = await database.Mensalidades.create(novaMensalidade)
            console.log(novaMensalidade)
            return res.status(200).json({message: 'Aluno criado com sucesso!'})
        } catch(error){
            return res.status(500).json(error.message)
        } 
    }   
    
    //Buscar todos os students
    static async buscarTodosStudents(req, res){
        try{
            const todosStudents = await database.Students.findAll()
            return res.status(200).json(todosStudents)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Buscar students pelo ID
    static async studentsPorId(req, res){
        const { id } = req.params

        try{
            const umStudents = await database.Students.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umStudents)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Atualizar students por ID
    static async atualizarStudents(req, res){
        const { id } = req.params

        const novasInfos = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            data_nascimento: req.body.nascimento,
            email: req.body.email,
            endereco: req.body.endereco,
            nome_responsavel: req.body.nome_responsavel,
            telefone_responsavel: req.body.telefone_responsavel,
            materials_id: req.body.materials_id,
            mensalidade_id: req.body.mensalidade_id
        }

        if(!novasInfos.nome){
            res.status(422).json({ message: 'O nome é obrigatório!'})
            return
        }
        if(!novasInfos.telefone){
            res.status(422).json({ message: 'O telefone é obrigatório!'})
            return
        }

        try{
            await database.Students.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const studentsAtualizado = await database.Students.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Aluno atualizado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar students pelo ID
    static async deletaStudents(req, res){
        const { id } = req.params
        
        try{
            await database.Students.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({message: `Aluno deletado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = StudentsController;