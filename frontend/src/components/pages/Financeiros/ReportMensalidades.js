import { Link } from 'react-router-dom';
import api from '../../../utils/api';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useFlashMessage from '../../../hooks/useFlashMessage';
import Styles from './ReportMensalidades.module.css';
import {AiOutlineArrowLeft, AiOutlineFilePdf} from 'react-icons/ai';
import studentsPdf from './ImportPdfMensal';

function ReportMensalidades(){
    const [students, setStudents] = useState([])
    const [mensalidades, setMensalidades] = useState([])
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        api.get('http://localhost:5000/financeiros/students/report', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            setStudents(response.data)
        })
        console.log(students[0])
    }, [])

    useEffect(() => {
        setTimeout(() => {
            api.get('http://localhost:5000/financeiros/mensalidades/totais', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data)
                setMensalidades(response.data)
            })
        }, 1000)
    }, )

    return(
       <section>
            <div className={Styles.header}>
                <h1>Mensalidades</h1>
            </div>
            <div className={Styles.menu}>
                <div className={Styles.menu_link}>
                    <Link to={'/financeiros'}><AiOutlineArrowLeft /></Link>
                    <Link to={'/financeiros'}>Voltar</Link>
                </div>
                <div>
                    <button className={Styles.button_pdf} 
                        onClick={(e) => studentsPdf(students, mensalidades)}>
                            <AiOutlineFilePdf/>Gerar PDF
                    </button>
                </div>
            </div>
            <div>
                <Table className={Styles.studentlist_container}>
                    <thead>
                        <tr>
                            <th>Aluno</th>
                            <th>Valor da Mensalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        { students &&
                            students.map((student) => 
                                <tr key={student.id}>
                                    <td>{student.nome}</td>
                                    <td>R${student.valor_mensalidade},00</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div className={Styles.total}>
                    <h3>VALOR TOTAL</h3>
                    <h3>R${mensalidades},00</h3>
                </div>
            </div>
       </section>
    )
}

export default ReportMensalidades;