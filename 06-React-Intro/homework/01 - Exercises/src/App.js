import React from 'react';
import Bienvenido, { techSkills } from './components/Bienvenido.jsx';

export default function App() {
   return (
      <div>
         <Bienvenido techSkills={techSkills} />
      </div>
   );
}
