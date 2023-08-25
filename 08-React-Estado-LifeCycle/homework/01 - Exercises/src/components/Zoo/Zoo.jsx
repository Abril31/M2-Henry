import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  let [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });
 
  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) => {
     setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
     });
    })
  .catch((error) => console.log(error));
  }, []);  

   //recibo un evento y capturo el valor del input con event.target.value.
  //guardo en un constante value y la uso para modificar el esatdo de zoo.
  
  const handleInputChange = (event) => {
    const value = event.target.value;//
    setZoo({//{ ...zoo } utiliza el operador de propagación (...) para crear 
      //una copia superficial de todas las propiedades existentes en el objeto zoo. 
      //Esto es necesario porque queremos mantener las 
      //propiedades animals, species, y allAnimals sin cambios.
      ...zoo,
      zooName: value,
    });
  };
  const handleSpecies = (selectedSpecies) => {
    let filteredAnimals = zoo.allAnimals.filter((animal) =>
    animal.specie === selectedSpecies);
    setZoo({...zoo,
      animals: filteredAnimals
    });
  };
  function handleAllSpecies(){
    
    setZoo({...zoo,
      animals: zoo.allAnimals
    });
  }
  //Se captura el evento y luego se usa setZoo para modificar el estado
  //recibe el estado inicial zoo y lo cambia con zooName: value.
  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species 
      species={zoo.species} 
      handleSpecies={handleSpecies}
      handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals}/>
    </div>
  )
}
