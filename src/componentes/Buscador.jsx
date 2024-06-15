import { useState } from 'react'

const Buscador = ({ buscarPersonaje, setBuscarPersonaje }) => {
  // Estado para manejar las busqueda de los personajes ya listados en la API
  const [filtrar, setFiltrar] = useState('')
  const capturarEvento = (e) => {
    const buscartexto = e.target.value.toLowerCase()
    setFiltrar(buscartexto)
    const ejecutarFiltro = buscarPersonaje.filter((buscado) => {
      return (
        buscado.name.toLowerCase().includes(buscartexto) ||
        buscado.species.toLowerCase().includes(buscartexto) ||
        buscado.gender.toLowerCase().includes(buscartexto) ||
        buscado.status.toLowerCase().includes(buscartexto) ||
        buscado.origin.name.toLowerCase().includes(buscartexto)
      )
    })
    setBuscarPersonaje(ejecutarFiltro)
  }
  return (
    <>
      <div className='d-flex col-9 justify-content-center ms-auto mx-auto mb-3'>
        <input
          className='form-control me-2 text-center'
          type='search'
          placeholder='Buscar personaje'
          value={filtrar}
          onChange={capturarEvento}
        />

      </div>
      <h2 className='text-center'>Ordenar</h2>
      <select name='ordenar' id='' className='d-flex col-3 justify-content-center ms-auto mx-auto mb-4' onChange={null}>
        <option value='-'>-</option>
        <option value={null}>Por Nombre</option>
        <option value={null}>Por Especie</option>
        <option value={null}>Por Genero</option>
      </select>

    </>
  )
}
export default Buscador
