import styles from './Principal.module.css';
import aulaImg from '../../../assets/img/aula.png';
import { Link } from 'react-router-dom';

function Principal(){
    return(
        <main className={styles.home}>
            <section>
                <div className={styles.text}>
                    <h4>Sistema de <b>gestão escolar</b>: o que é e quais os benefícios</h4>
                    <ul>
                        <li>
                            <Link to="/users/create">GESTÃO PARA INSTITUIÇÕES DE ENSINO</Link>
                        </li>
                    </ul>
                    <h1>Sistema de Gerenciamento Escolar</h1>
                    <h4>Um sistema de gerenciamento escolar eficiente é uma ferramenta poderosa que pode <br />
                        revolucionar a maneira como as instituições educacionais funcionam. <br />
                        Ao integrar tecnologia e processos eficientes, um sistema de gerenciamento escolar <br/>
                        pode trazer uma série de benefícios para todos os envolvidos, desde alunos aos administradores.</h4>
                    <h1>Qual a importância de contar com um sistema de gestão escolar?</h1>
                    <h4>Universidades e escolas podem se beneficiar do sistema de gerenciamento pois trata-se <br />
                        de uma tecnologia que centraliza informações mais importantes de sua organização, como:<br />
                    </h4>
                </div>
                    <div className={styles.text_list}>
                        <ul>
                            <li>Secreataria Digital;</li>
                            <li>Acesso a Informações Educacionais;</li>
                            <li>Acesso a Informações Adminstrativas;</li>
                            <li>Acesso a Informações Financeiras;</li>
                        </ul>
                    </div>
            </section>
            <div className={styles.img_main}>
                <img src={aulaImg} alt="Aula" />
            </div>
        </main>
    )
}

export default Principal;