import { useEffect, useState } from 'react';
import Input from './Input';
import api from '../../utils/api';
import Styles from './StudentsForm.module.css';
import Select from './Select';

function StudentsForm({ handleSubmit, studentData, btnText }) {
  const [materials, setMaterials] = useState([])
  const [student, setStudent] = useState(studentData || {})
  const [selected, setSelected] = useState('')
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get('/materials/all', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setMaterials(response.data)
      })
  }, [token])

  console.log(selected)

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(student)
  }

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value })
    console.log(student)
  }


  return (
    <form onSubmit={submit} className={Styles.form_container}>
      <div className={Styles.input_one}>
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Digite o nome do aluno"
          handleOnChange={handleChange}
          value={student.nome}
        />
        <Input
          text="Email"
          type="text"
          name="email"
          placeholder="Informe o email"
          handleOnChange={handleChange}
          value={student.email}
        />
      </div>
      <div className={Styles.input_two}>
        <Input
          text="Data de nascimento"
          type="date"
          name="data_nascimento"
          placeholder="Informe a data de nascimento"
          handleOnChange={handleChange}
          value={student.data_nascimento}
        />
        <Input
          text="Endereço"
          type="text"
          name="endereco"
          placeholder="Informe o Endereço do Aluno"
          handleOnChange={handleChange}
          value={student.endereco}
        />
         <Input
          text="Telefone"
          type="text"
          name="telefone"
          placeholder="Informe o telefone do Aluno"
          handleOnChange={handleChange}
          value={student.telefone}
        />
      </div>
      <div className={Styles.input_three}>
        <Input
          text="Nome do Responsável"
          type="text"
          name="nome_responsavel"
          placeholder="Informe o nome do responsável do Aluno"
          handleOnChange={handleChange}
          value={student.nome_responsavel}
        />
        <Input
          text="Telefone do Responsável"
          type="text"
          name="telefone_responsavel"
          placeholder="Informe o telefone do responsável do Aluno"
          handleOnChange={handleChange}
          value={student.telefone_responsavel}
        />
      </div>
      <div className={Styles.input_for}>
        <Select
          name="materials"
          text="Selecione o material"
          options={materials}
          handleOnChange={(e) => {
            setStudent({ ...student, materials_id: parseInt(e.target.value) })
            setSelected(e.target.value)
          }}
          value={selected}
        />
         <Input
          text="Mensalidade"
          type="text"
          name="valor_mensalidade"
          placeholder="Informe o valor da mensalidade"
          handleOnChange={handleChange}
          value={student.valor_mensalidade}
        />
      </div>
      <div className={Styles.submit}>
        <input type="submit" value={btnText} />
      </div>
    </form>
  )
}

export default StudentsForm;