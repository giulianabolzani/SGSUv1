import { useEffect, useState } from 'react';
import Input from '../Input';
import Styles from '../StudentsForm.module.css';

function TeamsForm({ handleSubmit, teamsData, btnText}){
    const [teams, setTeams] = useState([])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(teams)
    }

    function handleChange(e){
        setTeams({...teams, [e.target.name]: e.target.value})
        console.log(teams)
    }

    return(
        <form onSubmit={submit} className={Styles.form_container}>
            <div className={Styles.Input_one}>
                <Input
                    text="Nome"
                    type="text"
                    name="nome"
                    placeholder="Digite o nome do funcionário:"
                    handleOnChange={handleChange}
                    value={teams.nome}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="telefone"
                    placeholder="Digite o telefone do funcionário:"
                    handleOnChange={handleChange}
                    value={teams.telefone}
                />
            </div>
            <div className={Styles.input_two}>
                
                <Input
                    text="Email"
                    type="text"
                    name="email"
                    placeholder="Digite o telefone do funcionário:"
                    handleOnChange={handleChange}
                    value={teams.email}
                />
                <Input
                    text="Função"
                    type="text"
                    name="role"
                    placeholder="Digite a função do funcionário:"
                    handleOnChange={handleChange}
                    value={teams.role}
                />
            </div>
            <div className={Styles.input_three}>
                <h3>Dados Bancários</h3>
                <Input
                    text="Banco"
                    type="text"
                    name="banco"
                    placeholder="Digite o nome do Banco:"
                    handleOnChange={handleChange}
                    value={teams.banco}
                />
                <Input
                    text="Agência"
                    type="text"
                    name="agencia"
                    placeholder="Digite a agência:"
                    handleOnChange={handleChange}
                    value={teams.agencia}
                />
                <Input
                    text="Conta"
                    type="text"
                    name="conta"
                    placeholder="Digite a conta:"
                    handleOnChange={handleChange}
                    value={teams.conta}
                />
            </div>
            <div className={Styles.submit}>
                <input type="submit" value={btnText} />
            </div>
        </form>
    )
}

export default TeamsForm;