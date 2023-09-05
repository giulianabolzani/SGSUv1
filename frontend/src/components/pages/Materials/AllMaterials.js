import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from './Dashboard.module.css';
import Loading from '../../layout/Loading';
import MaterialsForm from '../../form/materialsform/MaterialsForm';

function AllMaterials(){
    const [ materials, setMaterials ] = useState([])
    const {setFlashMessage} = useFlashMessage()
    const [forms, setForms] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            api.get('/materials/all', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setMaterials(response.data)
                setRemoveLoading(true)
            })
        }, 1000)
    })

    async function removeMaterials(id){
        let msgType = 'sucess'

        const data = await api.delete(`/materials/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            const updatedMaterials = materials.filter((materials => materials.id !== id))
            setMaterials(updatedMaterials)
            return response.data
        })
        .catch((error) => {
            msgType = 'error'
            return error.response.data
        })

        setFlashMessage(data.message, msgType)
    }

    function showForm(){
        setForms(!forms)
    }

    async function createMaterials(materials){
        let msgType = 'sucess'
        materials.materials = 0

        const data = await api.post('/materials/create', materials, {
            'Content-type': "application/json",
        })
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            return err.response.data
        })
    }

    
    return(
        <section className={Styles.container}>
            <div className={Styles.materialslist_header}>
                <h1>Materiais</h1>
                <button onClick={showForm}>Cadastrar Material</button>
            </div>
            <div className={Styles.materialslist_container}>
                {forms && <MaterialsForm active={setForms} btnText="Cadastrar" handleSubmit={createMaterials}/>}
                {materials &&
                    materials.map((materials) => (
                        <div className={Styles.materials_card} key={materials.id}>
                            <p>
                                Nome: 
                                <span>{materials.nome}</span>
                            </p>
                            <p>
                                Tipo: 
                                <span>{materials.tipo}</span>
                            </p>
                            <p>
                                Valor:
                                <span>{materials.valor}</span>
                            </p>
                            <div className={Styles.materials_card_actions}>
                                <Link to={`/materials/edit/${materials.id}`}>Editar</Link>
                                <button
                                    onClick={() => {
                                        removeMaterials(materials.id)
                                    }}
                                >Excluir</button>
                            </div>
                        </div>
                    ))
                }
                {!removeLoading && <Loading />}
                <div className={Styles.condicao}>
                    {removeLoading && materials?.length < 1 &&<p>Você não possui materiais cadastrados.</p>}
                </div>
            </div>
        </section>
    )
}

export default AllMaterials;