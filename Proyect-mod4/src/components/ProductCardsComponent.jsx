import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
//importar LINK o NAVIGATE?
import usePagination from "../customHook/usePagination";

//importar css 
import '../styles/pagination.css'


const ProductCardsComponents = () => {

    //Usamos el contexto de los productos 
    const {products} = useContext(ProductsContext);

    /*Se taren los datos necesarios a través del uso del customHook para la paginación
    pasando dos parámetros como son el número de items que se quiere por pág y los items*/
    const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(10, products)

  return (
    <section>
        
        <h1>Products on sale</h1>
        {currentItems.map((product) => (
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

        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={nextPage}>Next</button>
        </div>

    </section>
  )
}

export default ProductCardsComponents;
