/*Este contexto se creará para traer los datos de la lista 
de productos*/

//Importaciones 

import { getAllProducts } from "../services";
import { createContext, useEffect, useState } from "react";

//Creación del contexto para los productos

export const ProductsContext = createContext();

//Creación del proveedor 

export function ProductsProvider({ children }){
    
    //useState para almacenar los datos del array de objetos creado
    const [products, setProducts] = useState([]);

    //Simulación de la petición de los datos de una API
    useEffect(() => {
            setProducts(getAllProducts());
    },[])


    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

