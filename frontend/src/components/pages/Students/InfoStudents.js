import api from "../../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Styles from './InfoStudents.module.css';

function InfoStudents() {
    const [student, setStudents] = useState([])
    const [mensalidade, setMensalidade] = useState([])
    const { id } = useParams()

    useEffect(() => {
        api.get(`/students/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log(typeof response.data)
            setStudents(response.data)
        })

        console.log(student)
    }, [id])

    const { 
        nome, 
        data_nascimento, 
        endereco, 
        telefone, 
        email, 
        nome_responsavel, 
        telefone_responsavel, 
        mensalidade_id,
        materials_id
    } = student


    return (
        <section className={Styles.section}>
            <div className={Styles.headers}>
                <h1>Informações do Aluno</h1>
            </div>
            <div className={Styles.infos}>
                <p> Nome: 
                    <span>{nome}</span>
                </p>
                <p> Data de Nascimento:
                    <span>{data_nascimento}</span>
                </p>
                <p> Endereço:
                    <span>{endereco}</span>
                </p>
                <p> Telefone:
                    <span>{telefone}</span>
                </p>
                <p> Email:
                    <span>{email}</span>
                </p>
                <p> Nome do Responsável:
                    <span>{nome_responsavel}</span>
                </p>
                <p> Telefone do Responsável:
                    <span>{telefone_responsavel}</span>
                </p>
            </div>
        </section>
    )
}

export default InfoStudents;