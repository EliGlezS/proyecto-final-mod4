
import { Link } from 'react-router-dom'
//importacion de la imagen 
import logoPrimeZone from '../img/logo_size_invert_primezone.jpg'
import '../styles/headerLaptop.css'

const HeaderLaptopComponent = () => {
  return (
        
    <div className="header-laptop-shop">
        {/* logo */}
        <img className="logo-shop" src={logoPrimeZone} alt="logo de la empresa" />

        {/* NavBar */}
        <nav className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Offers</li>
                    <li>News</li>
                    <li>Our top sellers </li>
                </ul>
        </nav>

        <div className='icons-header-laptop'>

            <div className="login-container-svg">
                {/* svg con un enlace para login */}
                <Link to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>
                
            </div>

            <div className="cart-container-svg">
                {/* svg de carrito con enlace a carrito */}
                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </Link>
                
            </div>

        </div>
        
    </div>
  )
}

export default HeaderLaptopComponent