import cart from '../CartWidget/assets/iconos/cart-fill-black.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const imageUrl = "https://www.veronicaiungman.com.ar/REACT-images/cart-fill-black.svg"
const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return(
        
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={imageUrl} alt="cart-widget"/> { totalQuantity () }
        </Link>
    )
}
export default CartWidget