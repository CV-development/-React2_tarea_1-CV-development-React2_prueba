import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  // Estado y variables
  const [pizzaData, setPizzaData] = useState([])
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  // Funciones de manejo de datos
  const getData = async () => {
    try {
      const response = await fetch('../public/pizzas.json')
      const data = await response.json()
      setPizzaData(data)
    } catch (error) {
      console.error('Error al obtener los datos', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // Funciones de manejo del carrito
  const addToCart = (pizza) => {
    const updatedCart = [...cart, { ...pizza, quantity: 1 }]
    setCart(updatedCart)
    setTotalCart(totalCart + pizza.price)
  }

  const removeFromCart = (pizza) => {
    const updatedCart = cart.filter(item => item.id !== pizza.id)
    const subtotal = pizza.price * pizza.quantity
    const newTotalCart = totalCart - subtotal
    setCart(updatedCart)
    setTotalCart(newTotalCart)
  }

  const updateCartQuantity = (pizza, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === pizza.id) {
        return { ...item, quantity }
      }
      return item
    })
    const updatedPizza = updatedCart.find(item => item.id === pizza.id)
    const subtotal = updatedPizza.price * quantity
    setCart(updatedCart)
    setTotalCart(updatedCart.reduce((total, item) => total + item.price * item.quantity, 0))
  }

  return (
    <PizzaContext.Provider value={{ pizzaData, cart, totalCart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
