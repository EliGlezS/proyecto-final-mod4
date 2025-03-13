//Importaciones de los componentes de Home 

import ProductCardsComponents from "../components/ProductCardsComponent"
import useScrollToTop from "../customHook/useScrollToTop"
import '../styles/home.css'

const Home = () => {

  useScrollToTop()

  return (
    <div className="main">
      <ProductCardsComponents/>
    </div>
    
  )
}

export default Home