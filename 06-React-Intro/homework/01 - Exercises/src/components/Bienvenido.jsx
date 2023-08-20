import React from "react";
import Botones from "./Botones";


const studentName = "Abril Valdiviezo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido({techSkills}) {
  // el código de tu componente acá
  return (
    <div>
      <h1>
        <mark>Ficha de Estudiante</mark>
      </h1>
      <h3>Nombre: {studentName}</h3>
      <ul>
        {techSkills.map((skill) => {
          return (
            <div>
              <li><i>{skill}</i></li>
            </div>
          );
        })}
      </ul>
      <Botones texto1='Módulo1' texto2="Módulo2" alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
