import Styles from './Container.module.css';

function Container({ children }){
    return(
        <main className={Styles.container}>
            {children}
        </main>
    )
}

export default Container;