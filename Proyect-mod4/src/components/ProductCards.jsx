import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
//importar LINK?


const ProductCards = () => {

    //Usamos el contexto de los productos 
    const {products} = useContext(ProductsContext);

  return (
    <section>
        <h1>Products </h1>
        {products.map((products) => (
            <div>
                <image>{products.image}</image>
                <div>
                    <p>{products.name}</p>
                    <p>{products.price} $</p>
                    {products.inStock ? <><p>In Stock</p><span className="greenCircle"></span></>: <><p>Out of stock</p><span className="redCircle"></span></>}
                    <div>
                        {/* <button>See more</button> Va un enlace con pinta de botón o Link o Navigate*/}
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}

export default ProductCards
