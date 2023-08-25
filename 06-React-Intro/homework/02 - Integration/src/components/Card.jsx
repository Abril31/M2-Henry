export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className="Card">
         <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='Rick' />
         
      </div>
   );
}
//Esta es la plantilla que se reutiliza para generar las demás cards.