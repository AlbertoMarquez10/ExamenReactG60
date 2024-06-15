import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MiApi from './componentes/MiApi'
import Buscador from './componentes/Buscador'
import { useState } from 'react'

const App = () => {
  const [personajes, setPersonajes] = useState([])
  const [buscarPersonaje, setBuscarPersonaje] = useState([])

  return (
    <>
      <h1 className='text-center mt-3 mb-3'>Rick & Morty - Uso de API</h1>
      <Buscador
        buscarPersonaje={personajes}
        setBuscarPersonaje={setBuscarPersonaje}
      />
      <div className='contenedorPrincipal d-flex flex-column align-items-center'>
        <MiApi personajes={buscarPersonaje.length > 0 ? buscarPersonaje : personajes} setPersonajes={setPersonajes} />

      </div>
    </>
  )
}

export default App
