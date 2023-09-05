import { useNavigate } from 'react-router-dom';
import TeamsForm from '../../form/teamsForm/TeamsForm';
import useFlashMessage from '../../../hooks/useFlashMessage';
import api from '../../../utils/api';
import Styles from '../Auth/CreateStudent.module.css';

function NewTeams(){
    const {setFlashMessage} = useFlashMessage()
    const navigate = useNavigate()

    async function createTeams(teams){
        let msgType = 'sucess'
        teams.teams = 0

        const data = await api.post('/teams/create', teams, {
            'Content-type': "application/json",
        })
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
        if(msgType !== 'error'){
            navigate('/teams/all')
        }
    }


    return(
        <section className={Styles.section}>
            <div className={Styles.text}>
                <h1>Cadastro de Funcionários</h1>
                <TeamsForm handleSubmit={createTeams} btnText="Cadastrar"/>
            </div>
        </section>
    )
}

export default NewTeams;