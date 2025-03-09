import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
//importar LINK o NAVIGATE?


const ProductCardsComponents = () => {

    //Usamos el contexto de los productos 
    const {products} = useContext(ProductsContext);

  return (
    <section>
        <h1>Products on sale</h1>
        {products.map((product) => (
            <div key={product.id}>
                <img src={product.image} alt={product.name}/>
                <div>
                    <p>{product.name}</p>
                    <p>{product.price} $</p>
                    {product.inStock ? (
                        <><p>In Stock</p><span className="greenCircle"></span></>
                        ) : (
                        <><p>Out of stock</p><span className="redCircle"></span></>
                    )}
                    <p><Link to={`/products/${product.id}`}>See details</Link></p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default ProductCardsComponents;
