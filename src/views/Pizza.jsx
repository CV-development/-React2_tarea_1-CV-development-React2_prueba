import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { PizzaContext } from '../context/PizzaContext'
import { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'

const Pizza = () => {
  const { pizzaId } = useParams()
  console.log(pizzaId)
  const { pizzaData } = useContext(PizzaContext)
  const actualPizza = pizzaData.find((pizza) => pizza.id === pizzaId)
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className='d-flex justify-content-center'>
      {actualPizza && (
        <Card style={{ width: '80%' }} className='d-flex flex-row'>
          <div style={{ width: '40%' }}>
            <Card.Img src={actualPizza.img} style={{ objectFit: 'cover', height: '100%' }} />
          </div>
          <div style={{ width: '60%' }}>
            <Card.Body>
              <Card.Title className='display-4'>{capitalizeFirstLetter(actualPizza.name)}</Card.Title>
              <Card.Text>
                <strong>Descripción:</strong> {actualPizza.desc}
              </Card.Text>
              <Card.Text>
                <strong>Ingredientes:</strong>
                <ul>
                  {actualPizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
              <Container className='d-flex justify-content-between'>
                <Card.Text>
                  <strong>Precio:</strong> ${actualPizza.price}
                </Card.Text>
                <Button variant='danger'>🛒 Añadir</Button>
              </Container>
            </Card.Body>
          </div>
        </Card>
      )}
    </div>
  )
}

export default Pizza
