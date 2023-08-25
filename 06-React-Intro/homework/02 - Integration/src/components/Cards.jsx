import Card from './Card';

export default function Cards({characters}) {
   return(
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {

               //por cada personaje que recorro devuelvo una card. character es un objeto así q se puede hacer destructuring en el map.
               return(
                  <Card 
                     key={id} //Key es única y ayuda q react idenfique la card si neceista hacer cambios
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image} 
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
            })
         }
      </div>

   )
}
