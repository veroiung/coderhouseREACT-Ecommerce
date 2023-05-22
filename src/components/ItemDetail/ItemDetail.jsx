
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, nombre, img, precio, category, stock }) => {
   const [quantityAdded, setQuantityAdded] = useState(0)

   const { addItem } = useContext(CartContext)

   const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {
         id, nombre, precio
      }
      addItem (item, quantity)
   }

   return (
      <div className='Detalle'>
         <div className='card-title' categoria={category}>
         </div>
         <picture>
            <img className='producto-imagen' src={img} alt={nombre} />
         </picture>
         <div className='card-body'>
            <h4 className='card-title'><strong>{nombre}</strong></h4>
            <h5 className='card-title'>$ {precio}</h5>
            <footer>
               {
                  quantityAdded > 0 ? (
                     <Link to='/cart' className='btn-style'>Terminar Compra</Link>
                  ) : (
                     <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                  )
               }
            </footer>
         </div>
      </div>
   )
}

export default ItemDetail

/* stock */
/*<ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />*/