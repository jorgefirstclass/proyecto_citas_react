import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import './index.css'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
 // Obtiene pacientes del LocalStorage, si no hay nada entonces devuelve un array vacio.
  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes') ) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  // Almacenar en LocalStorage - Hay que convertirlo en string.
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  /* Aqui puedes colocar functions */
  return (
    /* Contenedor principal */  
      <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex gap-2">
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
            
        </div>
        
      </div>
    
  )
}

export default App
