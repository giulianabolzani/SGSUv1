import style from './Loading.module.css';
import loading from '../../assets/img/loading.svg';

function Loading(){
    return(
        <div className={style.loader_container}>
            <img className={style.loader} src={loading} alt="Loading" />
        </div>
    )
}


export default Loading;