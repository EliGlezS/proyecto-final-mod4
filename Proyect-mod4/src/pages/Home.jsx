//Importaciones de los componentes de Home 

import ProductCardsComponents from "../components/ProductCardsComponent"
import useScrollToTop from "../customHook/useScrollToTop"

const Home = () => {

  useScrollToTop()

  return (
    <ProductCardsComponents/>
  )
}

export default Home