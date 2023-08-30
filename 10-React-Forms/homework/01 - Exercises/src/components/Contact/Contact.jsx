import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
let errors = {};
if(inputs.name === ""){
  errors.name = "Se requiere un nombre";
}
if(!regexEmail.test(inputs.email)){
  errors.email = "Debe ser un correo electrónico"

}
if(inputs.message  === ""){
  errors.message = "Se requiere un mensaje"
}
return errors;
} 


export default function Contact() {
  let [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  let [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs, [event.target.name]: event.target.value,
      })
    )
  }
  function handleSubmit (event){
    event.preventDefault();
    let validateErrors = validate(inputs);
    setErrors(validateErrors);

    let errorArray = Object.values(validateErrors)
    if(errorArray.length === 0){
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }else{
      alert("Debe llenar todos los campos");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input className={errors.name && 'warning'}
          onChange={handleChange}
          type="text"
          name="name"
          value={inputs.name}
          placeholder="Escribe tu nombre..."
        />
        {errors.name && <p className="danger">{errors.name}</p>}
        <label htmlFor="email">Correo Electrónico</label>
        <input className={errors.email && 'warning'}
          onChange={handleChange}
          type="text"
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
        />
        {errors.email && <p className="danger">{errors.email}</p>}
        <label htmlFor="message">Mensaje</label>
        <input className={errors.message && 'warning'}
          onChange={handleChange}
          type="text"
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
        />
        {errors.message && <p className="danger">{errors.message}</p>}

        <button type="submit">enviar</button>
      </form>
    </div>
  );
}

