import React from 'react';
//import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { animals } = this.props
    return( 
    <div>  
        {animals.map((animal, index)=>{
          return(
          <><div>
          <h5 key={index}>{animal.name}</h5>
          </div>
          <img key={index} src={animal.image} alt={animal.name} width="300px"/>
          <span>{animal.specie}</span></>
        )})}
      
    </div>)

  }
}
