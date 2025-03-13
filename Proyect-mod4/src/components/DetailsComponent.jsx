//Importaciones necesarias en la pág. Productos Detalles
import { useContext, useEffect, useState } from "react"
import { ProductsCartContext } from "../context/ProductsCartContext"
import { ProductsContext } from "../context/ProductsContext"
import { Link, useNavigate, useParams } from "react-router-dom"


const DetailsComponent = () => {

  //Se usa el contexto del carrito
  const {addProductCart} = useContext(ProductsCartContext);

  //Se usa el contexto producto
  const {products} = useContext(ProductsContext);

  //Se usa el useParams para obtener los valores de los parámetros dinámicos como el id, ahora se vuelven accesibles dentro del componente (para obtener el id de la URL).
  const {id} = useParams();
  
  //Se usa un nuevo useState para almacenar el producto del que se mostraran los detalles.
  const [productDetails, setProductDetails] = useState(null);

  //Se usa Navigate 
  //const navigate = useNavigate();
  
  useEffect(() => {
    const prod = products.find((item) => item.id === parseInt(id));
    setProductDetails(prod);
  }, [id, products]);

  if (!productDetails) {
    return <p>Product not found</p>;
  }

  //manejador para redirigir a home pulsando el botón atrás
  // const handlerBack = () => {
  //   navigate("/");
  // }

  return (
    <div className="product-details">
        <h1>Product Details</h1>

        <div className="container-img-info-buttons">

          {/* contenedor de la img */}
          <div className="img-product-details">
              <img src={productDetails.image} alt={productDetails.name}/>
          </div>

          {/* Contenedor de los detalles  */}
          <div className="info-product-details">
              <h2>{productDetails.name}</h2>
              <p>{productDetails.category}</p>
              <p>{productDetails.description}</p>
              <ul>{productDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
              </ul>
              <p>{productDetails.price} $</p>

          </div>

          {/* Contenedor de los botones  */}
          <div className="buttons-product-details">
            {/*Si el producto que estamos mirando está en stock (true) aparece un botón que lo añade al carrito, pero 
            si stock es false aparece un botón desabilitado */}
            {productDetails.inStock ? (
              <button onClick={() => addProductCart(productDetails)}>Add to Cart</button>
            ) : (
              <button disabled>Not available at the moment</button>
            )
            }  
          
            {/* Mirar si es corecto navigate o link */}
            <p>
              <Link to="/"> 
                Back Home
              </Link>   
            </p>
            
          </div>

        </div>    
    </div>
  )
}

export default DetailsComponent;