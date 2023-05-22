import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({nombre, precio, quantity, id}) => {

  const {removeItem} = useContext (CartContext)

  return (
    <div>
      <section className='producto-carrito'>
        <h4>{nombre}</h4>
        <h4>Precio: $ {precio}</h4>
        <h4>Cantidad: {quantity}</h4>
        <div>Subtotal: $ {precio*quantity}</div>   
        <button onClick={()=> removeItem(id)} className='btn-style'>X</button>
      </section>
    </div>
  )
}

export default CartItem