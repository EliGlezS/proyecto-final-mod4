//importamos las pages, los proveedores de contexto, las Routes y Route
import { ProductsProvider } from './context/ProductsContext'
import { ProductsCartProvider } from './context/ProductsCartContext'
import ProductsDetails from './pages/ProductsDetails'
//import DetailsComponent from './components/DetailsComponent'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
    <ProductsProvider>
      <ProductsCartProvider>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductsDetails/>}/>
      </Routes>
      </ProductsCartProvider>
    </ProductsProvider>
    

    </>
  )
}

export default App
