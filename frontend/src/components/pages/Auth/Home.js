import { Link } from "react-router-dom";
import Img from '../../../assets/img/apresentacao.png';

import Styles from './Home.module.css';

function Home() {
    return (
        <section>
            <div className={Styles.header}>
                <h1>Seja bem-vindo ao SGSU!</h1>
                <h4>O Sistema de Gerenciamento que vai revolucionar a sua organização.</h4>
            </div>
            <div className={Styles.main}>
                <div className={Styles.funcionalidades_img}>
                    <img src={Img} alt="Apresentação" />
                </div>
                <div className={Styles.novas_funcionalidades}>   
                    <h1>Novas funcionalidades disponíveis no Sistema!</h1>
                    <ul>
                        <li>
                            <Link to='/students/all'>CADASTRO DE ALUNOS</Link>
                            <p>Veja as informações completas de cada aluno individualmente.</p>
                        </li>
                        <li>
                            <Link to='/teams/all'>CADASTRO DE FUNCIONÁRIOS</Link>
                            <p>Agora é possível cadastrar os funcionários que fazem parte da sua equipe.</p>
                        </li>
                        <li>
                            <Link to='/financeiros'>FINANCEIRO</Link>
                            <p>- Painéis com informações financeiras sobre as mensalidades e materiais vendidos; <br/>
                               - Relatório com o nome do aluno e o valor da sua mensalidade; <br/>
                               - Relatório com sobre o material vendido e o aluno que comprou; <br/>
                               - Todas as informações estão disponíveis para fazer o Download em PDF!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>           
        </section>
        
    )
}

export default Home;