
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
    
        <nav className='NavBar'>
            <NavLink variant="pills" to={'/'}>
            <h3>Tienda inJOGG</h3>
            </NavLink>
           
           <div className='Categories'>
                <NavLink to='/category/denim' activeclassName='ActiveOption'>
                    <h4>Denim</h4>
                </NavLink>
                <div></div>
                <NavLink to='/category/melange' activeclassName='ActiveOption'>
                    <h4>Melange</h4>
                </NavLink>
            </div>
            <CartWidget />
        </nav>

)

}

export default NavBar

        

         /*<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html" title="inicio pagina inJOGG">Tienda inJOGG</a><span
                            className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Categoría UNO</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Categoría DOS</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Categoría TRES</a></li>
                    <li className="nav-item"> 

                    <CartWidget />
                       {/* <a class="nav-link" href="carrito.html" title="carrito de compras">
                <img src="images/iconos/cart-fill.svg"/><span class="numerito" id="numerito">0</span></a> 
                    </li>
                  
                </ul>
            </div>
        </nav>
        */
        
