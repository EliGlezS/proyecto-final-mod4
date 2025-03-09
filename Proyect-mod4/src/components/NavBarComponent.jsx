//El NavBar va en el header y este en todos las pag

import { Link } from "react-router-dom"

const NavBarComponent = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/cart">Shopping Cart</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBarComponent;