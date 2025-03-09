//poner un mensaje de que no hay productos en el carrito si el array está vacío

//Importaciones
import { useState, useEffect, useContext } from "react"
import { ProductsCartContext } from "../context/ProductsCartContext"

const CartListComponent = () => {
    //Se usa el contexto creado para el carrito de compra
    const {productsCart, deleteProductCart, increaseProductQuantity, decreaseProductQuantity} = useContext(ProductsCartContext);

    //Se crea un useState para almacenar el precio
    const [price, setPrice] = useState(0);

    //Se crea la función para el calculo del precio total
    useEffect(() => {
        setPrice(productsCart.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0));
    },[productsCart]);

  return (
    <div>
        {/* div por cada uno de los productos del carrito */}
        {productsCart.map((product, index) => (
            <div key={index}>
                <img src={product.image} alt={product.name}/>
            </div>
        ))}

        
    </div>
  )
}

export default CartListComponent