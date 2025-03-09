/*Se hace otro contexto para los productos del carrito y los
manejadores que se van a usar en distintos componentes*/

//Importaciones
import { createContext, useState } from "react";

//Creación del contexto para el carrito

export const ProductsCartContext = createContext();

//Creación del proveedor

export function ProductsCartProvider({ children }) {

    //uso del useState para almacenar los productos del carrito 
    const [productsCart, setProductsCart]  = useState([]);

    //manejadores necesarios para los productos del carrito

    //Manejador de añadir producto al carrito
    const addProductCart = (product) =>{
        setProductsCart(productsCart.find((item) =>{
            if (item.id === product.id) {
                increaseProduct(product);
            }else{
                return [...productsCart, {...product, quantity: 1}] 
            }
        }));
    }

    //Manejador de eliminar producto al carrito
    const deleteProductCart = (productId) => {
        setProductsCart(productsCart.filter((item) => item.id !== productId))
    }

    //Manejador de incrementar la cantidad del producto en el carrito
    const increaseProductQuantity = (product) =>{
        setProductsCart(productsCart.map((item) => item.id === product.id ? {...item, quantity: (item.quantity || 1) +1} : item));
    }

    //Manejador de decrementar la cantidad del producto en el carrito
    const decreaseProductQuantity = (product) => {
        setProductsCart(productsCart.map((item) => {
            if (item.id === product.id) {//si el id del elemento que se está revisando en ese momento es igual al id del producto introducido y además la cantidad es igual (estricto) a 1 devuelve un null si no la cantidad disminuye
                if (item.quantity === 1) {
                    return null;
                }else{
                    return {...item, quantity: item.quantity -1};
                }
            }
            else{//Si no es el producto que buscamos, lo dejamos igual
                return item;
            }
            //Se hace un filter para tener un array con los productos que no son null
        }).filter((item) => item !== null));
    }

    return(
        <ProductsCartContext.Provider value={{productsCart, addProductCart, deleteProductCart, increaseProductQuantity, decreaseProductQuantity}}>
            {children}
        </ProductsCartContext.Provider>
    )
}