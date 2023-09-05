import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from './Dashboard.module.css'



function Dashboard(){
    const [ mensalidades, setMensalidades ] = useState()
    const [ students, setStudents ] = useState()
    const [ materials, setMaterials ] = useState()
    const [ materialsQtd, setMaterialsQtd ] = useState()
    const { setFlasMessage } = useFlashMessage()
    const [removeLoading, setRemoveLoading] = useState(false)

    //Quantidade de alunos
    useEffect(() => {
        setTimeout(() => {
            api.get('http://localhost:5000/financeiros/students/totalalunos', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data)
                setStudents(response.data)
                
                setRemoveLoading(true)
            })
        }, 1000)
    }, )

    //Soma das mensalidades
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
                
                setRemoveLoading(true)
            })
        }, 1000)
    }, )

    //Quantidade de materiais vendidos
    useEffect(() => {
        setTimeout(() => {
            api.get('http://localhost:5000/financeiros/students/quantidade/materials', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data)
                setMaterialsQtd(response.data)
                
                setRemoveLoading(true)
            })
        }, 1000)
    }, )

    //Soma dos materiais vendidos
    useEffect(() => {
        setTimeout(() => {
            api.get('http://localhost:5000/financeiros/materials/valortotal', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data)
                setMaterials(response.data)
                
                setRemoveLoading(true)
            })
        }, 1000)
    }, )


    return(
        <section className={Styles.section}>
            <div className={Styles.header}>
                <h1>Financeiro</h1>
            </div>
            <div className={Styles.menu}>
                <div className={Styles.menu_top}>
                    <p>RELATÓRIOS</p>
                </div>
               <div className={Styles.menu_link}>
                    <Link to={'/financeiros/students/report'}>MENSALIDADES</Link>
                    <Link to={'/financeiros/students/materials'}>MATERIAIS</Link>
               </div>
            </div>
            <div className={Styles.dashboard}>
                <div className={Styles.dashboard_item}>
                    <h2>Mensalidades</h2>
                    <p> Total de alunos: <span>{students}</span></p>
                    <p>Valor total:  <span>R$ {mensalidades},00</span></p>
                </div>

                <div className={Styles.dashboard_item}>
                    <h2> Materiais</h2>
                    <p> Total de materiais: <span>{materialsQtd}</span></p>
                    <p>Valor total: <span>R$ {materials},00</span></p>
                    
                </div>
            </div>
        </section>
    )
}

export default Dashboard;