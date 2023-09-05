import { useState } from 'react';
import Input from './InputMaterials.js';
import Styles from './MaterialsForm.module.css';
import {AiFillCloseSquare} from 'react-icons/ai';

function MaterialsForm({handleSubmit, materialsData, btnText, active}){
  const [materials, setMaterials] = useState(materialsData || {}) 
  
  const submit = (e) => {
    e.preventDefault()
    handleSubmit(materials)
  }

  function handleChange(e){
    setMaterials({...materials, [e.target.name]: e.target.value})
    console.log(materials)
  }

  function closeForm(){
    active(false)
  }

  return(
    <form className={Styles.materials_card} form={active}>
      <Input
        text="Nome"
        type="text"
        name="nome"
        handleOnChange={handleChange}
        value={materials.nome}
      />
      <Input
        text="Tipo"
        type="text"
        name="tipo"
        handleOnChange={handleChange}
        value={materials.type}
      />
      <Input
        text="Valor"
        type="text"
        name="valor"
        handleOnChange={handleChange}
        value={materials.valor}
      />
      <div className={Styles.submit}>
        <AiFillCloseSquare onClick={closeForm}/>
        <input type="button" value={btnText} onClick={submit}/>
      </div>
    </form>
  )
}

export default MaterialsForm;