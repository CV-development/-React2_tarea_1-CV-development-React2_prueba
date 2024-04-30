import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pizza/:pizzaId'
          element={<Pizza />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>

  )
}

export default App
