import { useEffect, useState } from 'react';
import Input from '../../form/Input';
import Styles from '../../form/StudentsForm.module.css';

function EditStudentsForm({handleSubmit, studentData, btnText}){
  const [student, setStudent] = useState(studentData || {}) 

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(student)
  }

  function handleChange(e){
    setStudent({...student, [e.target.name]: e.target.value})
    console.log(student)
  }

  return(
    <form onSubmit={submit} className={Styles.form_container}>
      <Input
        text="Nome"
        type="text"
        name="nome"
        placeholder="Digite o nome do aluno"
        handleOnChange={handleChange}
        value={studentData.nome}
      />
      <Input
        text="Telefone"
        type="text"
        name="telefone"
        placeholder="Informe o telefone do Aluno"
        handleOnChange={handleChange}
        value={studentData.telefone}
      />
      <Input
        text="Data de nascimento"
        type="date"
        name="data_nascimento"
        placeholder="Informe a data de nascimento"
        handleOnChange={handleChange}
        value={studentData.data_nascimento}
      />
      <Input
        text="Endereço"
        type="text"
        name="endereco"
        placeholder="Informe o Endereço do Aluno"
        handleOnChange={handleChange}
        value={studentData.endereco}
      />
      <Input
        text="E-mail"
        type="text"
        name="email"
        placeholder="Informe o email do Aluno"
        handleOnChange={handleChange}
        value={studentData.email}
      />
      <Input
        text="Nome do Responsável"
        type="text"
        name="nome_responsavel"
        placeholder="Informe o nome do responsável do Aluno"
        handleOnChange={handleChange}
        value={studentData.nome_responsavel}
      />
      <Input
        text="Telefone do Responsável"
        type="text"
        name="telefone_responsavel"
        placeholder="Informe o telefone do responsável do Aluno"
        handleOnChange={handleChange}
        value={studentData.telefone_responsavel}
      />
      <div className={Styles.submit}>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default EditStudentsForm;