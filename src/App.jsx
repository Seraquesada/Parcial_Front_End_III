// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import Listado from './components/Listado/Listado.jsx'
import Cabecera from './components/Cabecera/Cabecera.jsx'
import data from './components/data.json'
import { useState , useEffect } from 'react';


const App = () => {

const [stock,setStock] = useState(data);
  
return (
    <div className="App">
        <Cabecera data={data} />
        <Listado data={data}  />
    </div>
  );
}

export default App;
