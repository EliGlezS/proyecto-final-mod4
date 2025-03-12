//importamos las pages, los proveedores de contexto, las Routes y Route
import { ProductsProvider } from './context/ProductsContext'
import { ProductsCartProvider } from './context/ProductsCartContext'
import ProductsDetails from './pages/ProductsDetails'
//import DetailsComponent from './components/DetailsComponent'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import ShoppingCart from './pages/ShoppingCart'
import HeaderComponent from './components/HeaderComponent'
import { UserProvider } from './context/UserContext'
import Checkout from './pages/Checkout'
import Login from './pages/Login'


function App() {
  
  return (
    <>
    <ProductsProvider>
      <ProductsCartProvider>
        <UserProvider>
        <HeaderComponent/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductsDetails/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
        </UserProvider>
      </ProductsCartProvider>
    </ProductsProvider>
    

    </>
  )
}

export default App
