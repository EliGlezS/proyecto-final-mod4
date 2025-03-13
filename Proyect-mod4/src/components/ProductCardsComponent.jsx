import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
//importar LINK o NAVIGATE?
import usePagination from "../customHook/usePagination";

//importar css 
import '../styles/pagination.css'
import '../styles/productsCards.css'

const ProductCardsComponents = () => {

    //Usamos el contexto de los productos 
    const {products} = useContext(ProductsContext);

    /*Se taren los datos necesarios a través del uso del customHook para la paginación
    pasando dos parámetros como son el número de items que se quiere por pág y los items*/
    const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(10, products)


  return (
    <section className="section-products-card">
        
        <h1 className="title-section-cards">Products on sale</h1>

        <div className="products-container">
            {currentItems.map((product) => (
            <div className="product-card" key={product.id}>

                <div className="container-img">
                <img className="product-img" src={product.image} alt={product.name}/>
                </div>
                
                <div className="card-info">
                    <h3>{product.name}</h3>
                    <p>{product.price} $</p>
                    {product.inStock ? (
                        <div className="inStock-products"><p>In Stock</p><span className="greenCircle"></span></div>
                        ) : (
                        <div className="noStock-products"><p>Out of stock</p><span className="redCircle"></span></div>
                    )}
                    <p className="see-details-product"><Link to={`/products/${product.id}`}>See details</Link></p>
                </div>

            </div>
            ))}
        </div>
        

        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span>{`${currentPage} of ${totalPages}`}</span>
            <button onClick={nextPage} disabled={currentPage === 2}>Next</button>
        </div>

    </section>
  )
}

export default ProductCardsComponents;
