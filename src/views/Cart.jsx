import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { PizzaContext } from '../context/PizzaContext'

const Cart = () => {
  const { cart, totalCart, addToCart, removeFromCart, updateCartQuantity } = useContext(PizzaContext)

  const handleIncrease = (pizza) => {
    addToCart(pizza)
  }

  const handleDecrease = (pizza) => {
    if (pizza.quantity > 1) {
      updateCartQuantity(pizza, pizza.quantity - 1)
    } else {
      removeFromCart(pizza)
    }
  }

  return (
    <Container>
      {cart.map((pizza) => (
        <Card key={pizza.id} className='mb-3'>
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>Price: {pizza.price}</Card.Text>
            <Card.Text>Quantity: {pizza.quantity}</Card.Text>
            <Card.Text>Subtotal: {pizza.price * pizza.quantity}</Card.Text>
            <Button variant='primary' onClick={() => handleIncrease(pizza)}>+</Button>
            <Button variant='danger' onClick={() => handleDecrease(pizza)}>-</Button>
          </Card.Body>
        </Card>
      ))}
      <h3>Total: {totalCart}</h3>
    </Container>
  )
}

export default Cart