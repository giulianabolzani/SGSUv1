import styles from './SubmitButton.module.css';

function SubmitButton({text}){ //para deixar o input dinamico e aproveitar em qlqr form que quisermos
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton;