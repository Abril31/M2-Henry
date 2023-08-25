import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  let [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',    
  })
  let [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: '', 
  })
  function handleChange (event){
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    })
  }
  return <div>
    <form>
    <label>Nombre</label>
    <input onChange={handleChange} type="text" name="name" value={inputs.name} placeholder="Escribe tu nombre..."/>
    <label>Correo Electrónico</label>
    <input onChange={handleChange} type="text" name="email" value={inputs.email} placeholder="Escribe tu email..."/>
    <label>Mensaje</label>
    <input onChange={handleChange} type="text" name="message" value={inputs.message} placeholder="Escribe tu mensaje..."/>
    
    <button type="submit">enviar</button>
  </form>
  </div>

}
