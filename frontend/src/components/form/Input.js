import Styles from './Input.module.css';

function Input({
    type, 
    text, 
    name, 
    placeholder, 
    handleOnChange, 
    value
}){
    return(
        <section className={Styles.section}>
            <div className={Styles.form_control}>
                <label htmlFor={name}>{text}:</label>
                <input 
                    type={type} 
                    name={name} 
                    id={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    defaultValue={value}
                />
            </div>
        </section>
    )
}

export default Input;