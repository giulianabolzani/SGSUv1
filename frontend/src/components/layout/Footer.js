import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import {Context} from '../../context/UserContext';


function Footer(){
    const { authenticated, logout } = useContext(Context)
    
    return(
        <footer>
            {authenticated ? ( 
                <></>
            ) : (
                <div className={styles.footer_style}>
                    <ul className={styles.social_list}>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                    <p className={styles.copy_right}>
                        <span>GBDevs</span> &copy; 2023
                    </p> 
                </div>
            )}
        </footer>
    )
}

export default Footer;