import { Link } from 'react-router-dom';
import { IoIosLogIn, IoMdPersonAdd } from 'react-icons/io'
import {AiOutlineHome, AiOutlineUser, AiOutlineTeam, AiOutlineHighlight, AiOutlineBook, AiOutlineLineChart, AiOutlineLogout} from 'react-icons/ai'
import Logo from '../../assets/img/logosg.png';
import Styles from './Navbar.module.css';
import { useContext } from 'react';

//context
import {Context} from '../../context/UserContext';

function Navbar(){
    const { authenticated, logout } = useContext(Context)

    return(
        <nav>
                {authenticated ? ( 
                    <div className={Styles.nav_auth}>
                        <ul>
                            <li>
                                <Link to="/home">
                                    <AiOutlineHome/>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/students/all">
                                    <AiOutlineUser/>
                                    <span>Alunos</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/teams/all">
                                    <AiOutlineTeam/>
                                    <span>Equipe</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/materials/all">
                                    <AiOutlineHighlight/>
                                    <span>Materiais</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/financeiros">
                                    <AiOutlineLineChart/>
                                    <span>Financeiro</span>
                                </Link>
                            </li>
                            <li className={Styles.nav_auth_logout} onClick={logout}>
                                <Link >
                                    <AiOutlineLogout/>
                                    <span>Sair</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className={Styles.navbar}>
                        <div className={Styles.navbar_logo}>
                            <Link to="/">
                                <img src={Logo} />
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <span className={Styles.icon}>
                                    <IoIosLogIn />
                                </span>
                                <Link to="/users/login">
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <span className={Styles.icon}>
                                    <IoMdPersonAdd />
                                </span>
                                <Link to="/users/create">
                                    Cadastrar
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
        </nav>
    )
}

export default Navbar;