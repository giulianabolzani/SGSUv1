import api from "../../../utils/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import EditStudentsForm from './EditStudentForm';
import useFlashMessage from "../../../hooks/useFlashMessage";
import Styles from './EditStudents.module.css';


function EditStudents() {
    const [student, setStudents] = useState({})
    const { id } = useParams()
    const {setFlashMessage} = useFlashMessage()
    const navigate = useNavigate()

   useEffect(() => {
        api.get(`/students/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            setStudents(response.data)
        })

        console.log(student)
   }, [id])
    
   const {nome} = student

   async function updateStudent(student){
        let msgType = 'sucess'

        const formData = new FormData()

        await Object.keys(student).forEach((key) => {
            formData.append(key, student[key])
            
        })

        const data = await api.patch(`students/edit/${student.id}`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
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
    
   return (
        <section className={Styles.section}>
            <div className={Styles.headers}>
                <h1>Você está editando o aluno: </h1>
                <span>"{nome}"</span>
            </div>
            <div>
                {
                    student.nome &&
                    <EditStudentsForm handleSubmit={updateStudent} btnText="Atualizar" studentData={student}/>
                }
            </div>
            
        </section>
    )
}

export default EditStudents;