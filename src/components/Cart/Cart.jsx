import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, Total} = useContext(CartContext)
    console.log (Total)
    console.log (totalQuantity)

    
    if(totalQuantity () === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='btn-agregar'>Productos</Link>
            </div>
        )
    }


    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${Total()}</h3>
            <button onClick={() => clearCart()} className='btn-style'>Limpiar Carrito</button>
            <Link to='/checkout' className='btn-v'>Checkout</Link>
        </div>
    )
}

export default Cart


