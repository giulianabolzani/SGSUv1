import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from './Dashboard.module.css';
import Table from 'react-bootstrap/Table';
import { AiOutlineEdit, AiOutlineInfoCircle, AiFillDelete } from 'react-icons/ai';

function AllStudents() {
    const [students, setStudents] = useState([])
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        api.get('http://localhost:5000/students/all', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            setStudents(response.data)
        })
    }, [])

    async function removeStudent(id) {
        let msgType = 'sucess'

        const data = await api.delete(`/students/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                const updatedStudents = students.filter((students => students.id !== id))
                setStudents(updatedStudents)
                return response.data
            })
            .catch((error) => {
                msgType = 'error'
                return error.response.data
            })

        setFlashMessage(data.message, msgType)
    }

    return (
        <section className={Styles.container}>
            <div className={Styles.studentlist_header}>
                <h1>Alunos</h1>
                <Link to="/students/create">Cadastrar Aluno</Link>
            </div>
            <Table className={Styles.studentlist_container}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Classe</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map((students) =>
                            <tr key={students.id}>
                                <td>{students.nome}</td>
                                <td>{students.telefone}</td>
                                <td>{students.email}</td>
                                <td>{students.endereco}</td>
                                <td>
                                    <Link to={`/students/${students.id}`}><AiOutlineInfoCircle /></Link>
                                    <Link to={`/students/edit/${students.id}`}><AiOutlineEdit /></Link>
                                    <AiFillDelete onClick={() => { removeStudent(students.id) }} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className={Styles.condicao}>
                {students.length === 0 && <p>Você não possui alunos cadastrados.</p>}
            </div>
        </section>
    )
}

export default AllStudents;