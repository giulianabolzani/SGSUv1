import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from '../Students/Dashboard.module.css';
import Table from 'react-bootstrap/Table';
import { AiOutlineEdit, AiOutlineInfoCircle, AiFillDelete } from 'react-icons/ai';

function AllTeams(){
    const [teams, setTeams] = useState([])
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        api.get('http://localhost:5000/teams/all', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            setTeams(response.data)
        })
    }, [])

    async function removeTeams(id){
        let msgType = 'sucess'

        const data = await api.delete(`/teams/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            const updatedTeams = teams.filter((teams => teams.id !== id))
            setTeams(updatedTeams)
            return response.data
        })
        .catch((error) => {
            msgType = 'error'
                return error.response.da
        })
        setFlashMessage(data.message, msgType)
    }

    return(
        <section className={Styles.container}>
            <div className={Styles.studentlist_header}>
                <h1>Equipe</h1>
                <Link to="/teams/create">Cadastrar Funcionário</Link>
            </div>
            <Table className={Styles.studentlist_container}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {teams &&
                        teams.map((teams) =>
                            <tr key={teams.id}>
                                <td>{teams.nome}</td>
                                <td>{teams.telefone}</td>
                                <td>{teams.email}</td>
                                <td>{teams.role}</td>
                                <td>
                                    <Link to={`/teams/${teams.id}`}><AiOutlineInfoCircle /></Link>
                                    <Link to={`/teams/edit/${teams.id}`}><AiOutlineEdit /></Link>
                                    <AiFillDelete onClick={() => { removeTeams(teams.id) }} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className={Styles.condicao}>
                {teams.length === 0 && <p>Você não possui funcionários cadastrados</p>}
            </div>
        </section>
    )
}

export default AllTeams;