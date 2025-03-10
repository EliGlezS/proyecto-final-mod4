//poner un mensaje de que no hay productos en el carrito si el array está vacío

//Importaciones
import { useState, useEffect, useContext } from "react"
import { ProductsCartContext } from "../context/ProductsCartContext"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useScrollToTop from "../customHook/useScrollToTop";

const CartListComponent = () => {
    //Se usa el contexto creado para el carrito de compra
    const {productsCart, deleteProductCart, increaseProductQuantity, decreaseProductQuantity} = useContext(ProductsCartContext);

    //Se crea un useState para almacenar el precio
    const [price, setPrice] = useState(0);
   
    //Se usa useNavigate
    const navigate = useNavigate();

    //Se crea la función para el calculo del precio total
    useEffect(() => {
        if (productsCart.length > 0) {
            setPrice(productsCart.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0));
        }
    },[productsCart]);

    //Handler para volver a home y ver los productos
    const handlerGoProducts = () => {
         navigate("/");
    }

    //Se usa el custom Hook para hacer scroll al inicio
    useScrollToTop();

  return (
    <div>
        {productsCart.length < 1 ? (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <p>Your cart is empty</p>
                <button onClick={handlerGoProducts}>Shop Our Products</button>
            </>
        ) : (
            <> 
            <h2>My Cart</h2>
            {productsCart.map((product, index) => (
                <div key={index}>
                    <img src={product.image} alt={product.name}/>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price} $</p>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => decreaseProductQuantity(product)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProductQuantity(product)}>+</button>
                        </div>
                        <button onClick={() => deleteProductCart(product.id)}>Delete Product</button>
                    </div>
                </div>
            ))}
            <div>
                <div>
                    <h3>Total</h3>
                    <p>{price.toFixed(2)} $</p>
                </div>
                {/*Podría poner un botón chekout y compruebe si está login, 
                si es así va a una pag que ponga proceda al pago, Gracias por su compra, y si no que te lleve a login */}
               <p>
                    <Link to="/"> 
                        Continue Shopping
                    </Link>
                </p> 
                
               
            </div>
            </>
           
        )
    }
    </div>
  )
}

export default CartListComponent
