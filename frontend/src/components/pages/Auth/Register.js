import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../form/Input';
import alunoImg from '../../../assets/img/aluno.png';
import funcImg from '../../../assets/img/funcionarios.png';
import styles from './Register.module.css';

//contexts
import {Context} from '../../../context/UserContext';

function Register(){
    //objeto do usuário
    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        //enviar o usuário para o banco
        register(user)
    }

    return(
        <main className={styles.register}>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h1>Cadastre-se</h1>
                    <h4>E conheça os diversos benefícios do Sistema de Gerenciamento</h4>
                    <ul>
                        <li><img src={alunoImg} alt="Aula"/>
                            <p>
                                Obtenha informações dos alunos com facilidade.
                            </p>
                            </li>
                        <li><img src={funcImg} alt="Aula"/>
                            <p>
                                Gerencie turmas, funcionarios, professores e alunos com maior praticidade.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <h1>PREENCHA COM SEUS DADOS ABAIXO</h1>
                    <Input 
                            text="Nome"
                            type="text"
                            name="nome"
                            placeholder="Digite o seu nome"
                            handleOnChange={handleChange}
                        />
                        <Input 
                            text="Telefone"
                            type="text"
                            name="telefone"
                            placeholder="Digite o seu telefone"
                            handleOnChange={handleChange}
                        />
                        <Input 
                            text="E-mail"
                            type="email"
                            name="email"
                            placeholder="Digite o seu email"
                            handleOnChange={handleChange}
                        />
                        <Input 
                            text="Senha"
                            type="password"
                            name="senha"
                            placeholder="Digite uma senha"
                            handleOnChange={handleChange}
                        />
                        <Input 
                            text="Confirmação de senha"
                            type="password"
                            name="confirmasenha"
                            placeholder="Confirme sua senha"
                            handleOnChange={handleChange}
                        />
                        <input className={styles.submit} type="submit" value="Cadastrar" />
                        <p>Já possui uma conta? <Link to="/users/login">Clique aqui</Link></p>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Register;