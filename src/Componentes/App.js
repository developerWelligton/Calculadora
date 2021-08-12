import React,{useState} from 'react'; 
 import Tabela from './Componentes/Tabela';
import Peso from './Componentes/Peso'
import Altura from './Componentes/Altura'
import Calcular from './Componentes/calcular'
import Resultado from './Componentes/Resultado'
import './App.css'; 
  
 
 
export default function App() {

  //Armazena os dados manipulados
 const [peso,setPeso]=useState(0)
 const [altura,setAltura]=useState(0)
 const [resultado,setResultado]=useState(0)


  return (
  <>
  <div>  
  {/* Manipula os dados*/}
      <Peso p={peso} sp={setPeso}></Peso><br></br>
      <Altura a={altura} sa={setAltura}></Altura>  
     <Calcular p={peso} a={altura} sr={setResultado}  ></Calcular>
     <Resultado r={resultado}></Resultado>
     <Tabela></Tabela>
  </div>
     
     
  </>
  );
}

 
