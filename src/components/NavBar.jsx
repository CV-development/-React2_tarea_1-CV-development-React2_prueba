import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const NavBar = () => {
  const { totalCart } = useContext(PizzaContext)
  const formattedTotal = totalCart.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'CLP'
  })
  return (
    <Navbar
      expand='lg'
      fixed='top'
      variant='dark'
      className='mb-3 bg-primary'
    >
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100 justify-content-between align-items-center'>
            <div>
              <NavLink to='/' className='h3 text-light'>
                🍕 Pizzería Mamma Mía
              </NavLink>
            </div>
            <div>
              <NavLink to='/cart' className='h3 text-light'>
                🛒 $ {formattedTotal}
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
