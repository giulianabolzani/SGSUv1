const database = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//helpers
const createUserToken = require('../../helpers/create-user-token')
const getToken = require('../../helpers/get-token')

class UserController{
    
    //criar usuario
    static async criarUsuario(req, res){
        const novoUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmasenha: req.body.confirmasenha,
            telefone: req.body.telefone
        }

        //validations
        if(!novoUsuario.nome){
            res.status(422).json({message: 'O nome é obrigatório.'})
            return
        }
        if(!novoUsuario.email){
            res.status(422).json({message: 'O email é obrigatório.'})
            return
        }
        if(!novoUsuario.telefone){
            res.status(422).json({message: 'O telefone é obrigatório.'})
            return
        }
        if(!novoUsuario.senha){
            res.status(422).json({message: 'A senha é obrigatória.'})
            return
        }
        if(!novoUsuario.confirmasenha){
            res.status(422).json({message: 'A confirmação de senha é obrigatória.'})
            return
        }

        if(novoUsuario.senha !== novoUsuario.confirmasenha){
            res.status(422).json({
                message: 'A senha e a confirmação de senha precisam ser iguais!',
            })
            return
        }

        //verificar se o usuário existe
        const userExists = await database.Users.findOne({
            where: { 
                email: req.body.email
            }
        })

        if (userExists){
            res.status(422).json({
                message: 'Usuário já existe, utilize outro email!',
            })
            return
        }

        //create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(novoUsuario.senha, salt)

        const user = new database.Users({
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            senha: passwordHash,
            telefone: novoUsuario.telefone
        })

        try{
            const novoUsuarioCriado = await user.save()
            return res.status(200).json(novoUsuarioCriado, req, res)
        } catch(error){
            res.status(500).json({ message: error })
        }
    }

    //login
    static async login(req, res) {
        const user = {
            email: req.body.email,
            senha: req.body.senha
        } 
        
        if(!user.email){
            res.status(422).json({message: 'O e-mail é obrigatório'})
            return
        }
        
        if(!user.senha){
            res.status(422).json({message: 'A senha é obrigatória'})
            return
        }

        //verificar se o usuário existe
        const userVerify = await database.Users.findOne({
            where: { 
                email: req.body.email
            }
        })

        if(!userVerify){
            res.status(422).json({
                message: 'Não existe usuário cadastrado com esse email.',
            })
            return
        }

        //verificar se a senha bate com a senha enviada
        const checkPassword = await bcrypt.compare(user.senha, userVerify.senha)

        if(!checkPassword){
            res.status(422).json({
                message: "Senha incorreta!"
            })
            return
        } else{
            await createUserToken(user, req, res)
        }  
    }

    //Buscar todos usuários
    static async buscarTodosUsuarios(req, res){

        const users = await database.Users.findAll({raw: true})

        res.status(200).json( {users} )
    }

    //checkUsers - verify headers
    static async verificarUsuario(req, res){
        let currentUser
        
        console.log(req.headers.authorization)
        if(req.headers.authorization){

            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')
            
            currentUser = await database.Users.findByPk(decoded.id)
        } else {
            currentUser = null
        }

        res.status(200).json(currentUser)
    }

     //Resgatando usuário por id
     static async buscarUsuarioPorId(req, res){
        const id = req.params.id
        
        const user = await database.Users.findByPk(id)
        
        if(!user){
            res.status(422).json({
                message: 'Usuário não encontrado!',
            })
            return
        }
        res.status(200).json({ user })
    }
}

module.exports = UserController