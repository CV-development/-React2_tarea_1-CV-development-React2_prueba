import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { PizzaContext } from '../context/PizzaContext'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PizzaCard = () => {
  const { pizzaData, addToCart } = useContext(PizzaContext)
  const navigate = useNavigate()

  const irAPizza = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`)
  }
  const handleAddToCart = (pizza) => {
    addToCart(pizza)
  }
  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        {pizzaData.map((pizza, index) => (
          <Col key={index} md={3} className='mb-4'>
            <Card style={{ width: '100%' }} className='h-100'>
              <Card.Img variant='top' src={pizza.img} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className='d-flex flex-column'>
                <Container>
                  <Card.Title><h2>{pizza.name}</h2></Card.Title>
                  <Card.Text>
                    Ingredientes: {pizza.ingredients.join(', ')}
                  </Card.Text>
                </Container>
                <Container>
                  <Card.Text className='display-6'>
                    {pizza.price}
                  </Card.Text>
                </Container>
                <Container className='d-flex justify-content-between'>
                  <Button variant='primary' onClick={() => irAPizza(pizza.id)}>👀 Ver más</Button>
                  <Button variant='danger' onClick={() => handleAddToCart(pizza)}>🛒 Añadir</Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PizzaCard
