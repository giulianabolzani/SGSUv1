import {useState, useContext} from 'react';
import Input from '../../form/Input';
import { Link } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';

import styles from './Login.module.css';

//context
import { Context } from '../../../context/UserContext';

function Login(){
    const [user, setUser] = useState({})
    const {login} = useContext(Context)
    const setFlashMessage = useFlashMessage()

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    //verificando o backend
    function handleSubmit(e){
        e.preventDefault()
        login(user)
    }

    return(
        <section className={styles.container}>
            <div>
                <h1>LOGIN</h1>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <Input 
                        text="E-mail"
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        handleOnChange={handleChange}
                    />
                    <Input 
                        text="Senha"
                        type="password"
                        name="senha"
                        placeholder="Digite a sua senha"
                        handleOnChange={handleChange}
                    />
                    <input className={styles.submit} type="submit" value="Entrar" />
                    <p>Não possui uma conta? <Link to="/users/create">Clique aqui</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Login;