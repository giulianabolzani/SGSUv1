import Styles from './InputMaterials.module.css';

function InputMaterials({
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

export default InputMaterials;