import img404 from "../../../assets/img/pag404.png";
import Styles from './Construction.module.css';

function Construction() {
    return (
        <section className={Styles.section}>
            <div className={Styles.headers}>
                <h1>Page 404</h1>
                <h2>Not Found</h2>
            </div>
            <div className={Styles.img}>
                <img src={img404}/>
            </div>
        </section>
    )
}

export default Construction;