import Card from 'react-bootstrap/Card'
import { useEffect } from 'react'
const characters = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22]
const apiUrl = 'https://rickandmortyapi.com/api/character/' + characters

const MiApi = ({ personajes, setPersonajes }) => {
  const consumoApi = async () => {
    const peticion = await fetch(apiUrl)
    const respuesta = await peticion.json()
    setPersonajes(respuesta)
    // console.log(personajes)
  }
  useEffect(() => {
    consumoApi()
  }, [])

  return (
    <>
      <div className='d-sm-flex flex-wrap gap-1 row-gap-3 justify-content-center ps-1 pt-3 pb-3'>
        {personajes.map((personaje) => (
          <Card style={{ width: '16rem' }} key={personaje.id}>
            <Card.Img variant='top' src={personaje.image} />
            <Card.Body>
              <Card.Title>{personaje.name}</Card.Title>
              <Card.Text>
                Especie: {personaje.species} | Genero: {personaje.gender} | Estado: {personaje.status} | Origen: {personaje.origin.name}
              </Card.Text>
            </Card.Body>
          </Card>

        ))}
      </div>

    </>
  )
}

export default MiApi
