import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentsForm from '../../form/StudentsForm';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from './CreateStudent.module.css';

function NewStudents(){
    const {setFlashMessage} = useFlashMessage()
    const navigate = useNavigate()

    async function createStudents(students){
        let msgType = 'sucess'
        students.students = 0

        const data = await api.post('/students/create', students, {
            'Content-type': "application/json",
        })
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        if(msgType !== 'error'){
            navigate('/students/all')
            setFlashMessage(data.message, msgType)
        }
        
    }
    return(
        <section className={Styles.section}>
            <div className={Styles.text}>
                <h1>Cadastro de Alunos</h1>
                <StudentsForm handleSubmit={createStudents} btnText="Cadastrar"/>
            </div>
        </section>
    )
}

export default NewStudents;

